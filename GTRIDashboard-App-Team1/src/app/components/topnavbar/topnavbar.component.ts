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
      path: '/system-notifications',
      name: 'ICON SN',
     
    },
    {
      path: '/user-notifications',
      name: 'ICON UN'
    },
    {
      path: '',
      name: 'Hello, Admin >',
      subItems: [
        {
          path: '/user-profile',
          name: 'My Profile',
        },
        {
          path: '/user-settings',
          name: 'Settings',
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
