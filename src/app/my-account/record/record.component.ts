import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  count: number;

  constructor() {
    this.count = 1;
  }

  ngOnInit() {
  }

}
