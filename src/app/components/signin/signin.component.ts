import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  imageUrls: string[] = [
    '../../../assets/travel.jpg',
    '../../../assets/travel4.jpg',
    '../../../assets/travel3.jpg',
  ];

  currentImageIndex: number = 0;

  profileForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.setNextBackgroundImage();
  }

  onSubmit(): void {
    const { username, password } = this.profileForm.value;

    this.authService.login(username, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/search']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  setNextBackgroundImage() {
    const currentImageUrl = this.imageUrls[this.currentImageIndex];
    const divElement = this.elementRef.nativeElement.querySelector('.background-container');
    this.renderer.setStyle(divElement, 'background-image', `url(${currentImageUrl})`);

    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;

    setTimeout(() => {
      this.renderer.setStyle(divElement, 'background-image', `url(${this.imageUrls[this.currentImageIndex]})`);
      this.setNextBackgroundImage();
    }, 5000); // Change image every 5 seconds (5000 milliseconds)
  }
}
