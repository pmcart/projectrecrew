import { Component, OnInit } from '@angular/core';
import { Candidates } from '../mock-candidates';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor() { }
  candidates = Candidates;
  ngOnInit(): void {
  }

}
