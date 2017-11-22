import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatepickerOptions } from 'ng2-datepicker';
// tslint:disable-next-line:import-spacing
import { Weight }         from '../weight';
import { WeightService }  from '../services/weight.service';
import * as frLocale from 'date-fns/locale/en';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
options: DatepickerOptions = {
  minYear: 1970,
  maxYear: 2030,
  displayFormat: 'YYYY-MM-DD',
  barTitleFormat: 'MMMM YYYY',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  locale: frLocale
};
  @Input() weight: Weight;
  state: string;
  constructor(
    private route: ActivatedRoute,
    private weightService: WeightService,
    private location: Location,
    private router: Router,

  ) {}

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.state = this.route.snapshot.paramMap.get('state');
    if (this.state === 'edit') {
      this.getWeight(id);
    } else {
      this.weight = new Weight();
      this.weight.date = new Date();
    }
  }

  getWeight(id: number): void {
    this.weightService.getWeight(id)
      .subscribe(w => this.weight = w);
  }

  updateWeight(weight: Weight) {
    this.weightService.updateWeight(weight);
    this.router.navigateByUrl('/dashboard');
  }
  newWeight(weight: Weight) {
    this.weightService.newWeight(weight);
    this.router.navigateByUrl('/dashboard');
  }

  goBack(): void {
    this.location.back();
  }
}
