import { Component } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  ngAfterViewInit() {
    localStorage.clear();
  }
}
