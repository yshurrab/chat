import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
  @HostBinding('class') class = 'display-flex';

  constructor() {
  }

  ngOnInit() {
  }

}
