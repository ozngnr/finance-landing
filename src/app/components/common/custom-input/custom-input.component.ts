import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
})
export class CustomInputComponent {
  @Input() type?: 'text' | 'number' | 'email' | 'password';
  @Input() value: string = '';
  @Input() inputId: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
}
