import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'nmt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  message: string;

  constructor(private testService: TestService) {
    this.message = '';
  }

  ngOnInit() {
    this.message = this.testService.hello();
  }

}
