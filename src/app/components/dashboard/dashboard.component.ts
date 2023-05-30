
import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, TimeScale } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private myChart: Chart | undefined;
  public pieChart: Chart | undefined;
  public chart: any;
  ngOnInit(): void {
    this.createChart2();
    this.createChart();
    this.myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['janvier', 'fevrier', 'mars', 'avril', 'mai'],
        datasets: [{
          label: '# Nombre d annonces par mois',
          data: [12, 30, 3, 5, 2],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [LinearScale, TimeScale]
    });

  }

  createChart(){

    this.chart = new Chart("MyChart2", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Maison', 'Appartement','Locale','Ferme','Terrain', 'Immeuble'],
        datasets: [{
          label: 'Nombre d annonce',
          data: [30, 24, 10, 43, 25, 80],
          backgroundColor: [
            '#CCCCFF',
            '#6495ED', // Change the color code here
            '#40E0D0',
            '#9FE2BF',
            '#DE3163',
            '#9B59B6',

          ],
          hoverOffset: 4
        }],

      },
      options: {
        aspectRatio:2.5
      }

    });

  }

  createChart2(){

    this.chart = new Chart("MyChart3", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13' ],
        datasets: [
          {
            label: "Vente",
            data: ['2','10', '4', '5'],
            backgroundColor: 'salmon'
          },
          {
            label: "Location",
            data: ['3', '5', '7', '2'],
            backgroundColor: 'violet'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}

