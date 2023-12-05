import { Component } from '@angular/core';
import { ButtonComponent } from '../common/button/button.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showLoginModal: boolean = false;

  toggleLoginModal(): void {
    this.showLoginModal = !this.showLoginModal;
  }
}
