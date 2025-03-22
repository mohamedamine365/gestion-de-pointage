import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule} from 'ng2-charts';

@Component({
  selector: 'tbd-repartition-des-acces',
  standalone: true,
  imports: [CommonModule, ChartsModule], // Utilisez ChartsModule ici
  templateUrl: './tbd-repartition-des-acces.component.html',
  styleUrls: ['./tbd-repartition-des-acces.component.css'],
})
export class ChartComponent {
  // Configuration du graphique
  public barChartOptions: any = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
  };

  public barChartLabels = ['08/12/2024', '09/12/2024', '10/12/2024', '11/12/2024', '12/12/2024'];
  public barChartData = {
    labels: this.barChartLabels,
    datasets: [
      { data: [2, 3, 1, 4, 2], label: 'Failed', backgroundColor: 'blue' },
      { data: [30, 20, 25, 28, 32], label: 'Success', backgroundColor: 'orange' },
    ],
  };

  public barChartType: string = 'bar';
}