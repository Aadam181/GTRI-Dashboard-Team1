import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-am',
  templateUrl: './am.component.html',
  styleUrls: ['./am.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class amComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

  
}
