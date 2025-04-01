import { Component } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-repartion-des-acces',
  standalone: true,
  imports: [CommonModule,NgChartsModule],
  templateUrl: './repartion-des-acces.component.html',
  styleUrl: './repartion-des-acces.component.css'
})
export class RepartionDesAccesComponent {
  public barChartOptions: any = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
  };

  public barChartLabels: string[] = [];
  public barChartData: any = { datasets: [] };
  public ChartType: ChartType = 'bar';  

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getChartData().subscribe({
        next: (data) => {
            console.log("Data received:", data);

            this.barChartLabels = data.labels;
            this.barChartData = {
                labels: this.barChartLabels,  // Ensure labels are assigned
                datasets: data.datasets
            };

            console.log("Updated Chart Data:", this.barChartData);
        },
        error: (err) => {
            console.error("Error fetching data:", err);
        }
    })
  }

}
