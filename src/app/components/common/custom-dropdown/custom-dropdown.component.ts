import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('expandCollapse', [
      state(
        'open',
        style({
          height: '120px',
        })
      ),
      state(
        'closed',
        style({
          height: '40px',
        })
      ),
      transition('open <=> closed', [animate('0.2s')]),
    ]),
    trigger('rotate', [
      state(
        'open',
        style({
          transform: 'rotate(0)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'rotate(-180deg)',
        })
      ),
      transition('open <=> closed', [animate('0.3s')]),
    ]),
  ],
  templateUrl: './custom-dropdown.component.html',
  styleUrl: './custom-dropdown.component.css',
})
export class CustomDropdownComponent {
  @Input() options?: any;
  @Input() selectedOption?: any;
  @Input() label?: string;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  optionClicked(option: any): void {
    this.onSelect.emit(option);
    this.closeDropdown();
  }
}
