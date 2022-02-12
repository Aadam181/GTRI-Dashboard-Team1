import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
