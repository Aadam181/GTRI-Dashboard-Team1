import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopnavbarComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();
  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
