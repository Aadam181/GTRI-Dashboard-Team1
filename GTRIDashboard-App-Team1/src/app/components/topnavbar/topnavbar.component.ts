import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopnavbarComponent implements OnInit {

  navItems = [
    {
      path: '/user-profile',
      name: 'User Profile'
    },
    {
      path: '/system-notifications',
      name: 'System Notifications'
    },
    {
      path: '/user-notifications',
      name: 'User Notifications'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
