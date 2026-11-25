import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  readonly qualifications = portfolio.education;
}
