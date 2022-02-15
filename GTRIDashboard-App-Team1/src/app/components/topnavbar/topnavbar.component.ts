import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopnavbarComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
