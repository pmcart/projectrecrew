import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../models/candidate';
@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent implements OnInit {

  @Input() candidate?: Candidate;

  constructor() { }

  ngOnInit(): void {
  }

}
