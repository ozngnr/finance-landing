import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards = [
    {
      id: 1, 
      iconSrc: '/assets/icons/SECURE.svg', 
      title: 'Secure', 
      text: `
        Send money online fast, secure and easy. 
        Live tracking and notifications + 
        flexible delivery and payment options.
      `
    },
    {
      id: 2, 
      iconSrc: '/assets/icons/ACCESSIBLE.svg', 
      title: 'Easy Accessible', 
      text: `
        Create a chart for any currency pair in the world to see their currency history.
        These currency charts use live mid-market rates, are easy to use, and are very reliable.
      `
    },
    {
      id: 3, 
      iconSrc: '/assets/icons/FAST.svg', 
      title: 'Fast and Reliable', 
      text: `
        Need to know when a currency hits a specific rate? The Xe Rate Alerts will let you know when
        the rate you need is triggered on your selected currency pairs.
      `
    },
  ]
}
