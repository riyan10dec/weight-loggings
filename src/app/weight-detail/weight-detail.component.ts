import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// tslint:disable-next-line:import-spacing
import { Weight }         from '../weight';
import { WeightService }  from '../services/weight.service';
@Component({
  selector: 'app-weight-detail',
  templateUrl: './weight-detail.component.html',
  styleUrls: ['./weight-detail.component.css']
})
export class WeightDetailComponent implements OnInit {
  @Input() weight: Weight;

  constructor(
    private route: ActivatedRoute,
    private weightService: WeightService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWeight();
  }

  getWeight(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.weightService.getWeight(id)
      .subscribe(w => this.weight = w);
  }

  goBack(): void {
    this.location.back();
  }
}
