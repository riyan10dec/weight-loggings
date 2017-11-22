
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Weight } from '../weight';
import { WeightService } from '../services/weight.service';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  weights: Weight[];
  averageMin: number = 0;
  averageMax: number = 0;
  averageVar: number = 0;
  constructor(private weightService: WeightService) { }
  ngOnInit() {
    this.getWeight();
  }
  getWeight(): void {
    this.weightService.getWeights()
    .subscribe(ws => {
      this.weights = ws;
      this.weights.forEach( w => {
        this.averageMin += w.min;
        this.averageMax += w.max;
        this.averageVar += (w.max - w.min);
      });
      this.averageMin = this.averageMin / ws.length;
      this.averageMax = this.averageMax / ws.length;
      this.averageVar = this.averageVar / ws.length;
    });
  }
}
