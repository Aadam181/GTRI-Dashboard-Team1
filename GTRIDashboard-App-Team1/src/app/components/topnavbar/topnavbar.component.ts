import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
