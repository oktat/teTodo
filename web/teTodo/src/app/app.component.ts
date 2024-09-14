import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmitterService } from './shared/emitter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teTodo';

  logedIn = false;

  constructor(
    private emitterService: EmitterService
  ) {}

  ngOnInit() {
    this.emitterService.event.subscribe((data: any) => {
      this.logedIn = data;
    });    
  }

  logout() {
    this.emitterService.setLogedIn(false);
  }
}
