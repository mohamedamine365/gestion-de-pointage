import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts'; // ✅ Remplace ChartsModule par NgChartsModule
import { ChartType } from 'chart.js';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'tbd-repartition-des-acces',
  standalone: true,
  imports: [CommonModule, NgChartsModule], // ✅ Remplace ChartsModule par NgChartsModule
  templateUrl: './tbd-repartition-des-acces.component.html',
  styleUrls: ['./tbd-repartition-des-acces.component.css'],
})
export class TBDRepartitionDesAccesComponent  {
  public barChartOptions: any = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
  };

  public barChartLabels: string[] = [];
  public barChartData: any = { datasets: [] };
  public ChartType: ChartType = 'bar';  

  constructor(private chart: ChartService) {}

  ngOnInit(): void {
    this.chart.getChartData().subscribe({
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

