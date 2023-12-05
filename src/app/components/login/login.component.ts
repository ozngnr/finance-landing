import { Component, EventEmitter, Output } from '@angular/core';
import { CustomInputComponent } from '../common/custom-input/custom-input.component';
import { ButtonComponent } from '../common/button/button.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

interface LoginUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomInputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(-30%)',
        })
      ),
      transition('void <=> *', animate(200)),
    ]),
  ],
})
export class LoginComponent {
  @Output() closeModalEvent: EventEmitter<Event> = new EventEmitter();

  user: LoginUser = {
    email: '',
    password: '',
  };

  closeModal(): void {
    this.closeModalEvent.emit();
    console.log(this.user);
  }
}
