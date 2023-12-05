export interface Currencies {
  id: number;
  name: string;
  value: string;
  imgSrc: string;
}

export const currencies: Currencies[] = [
  {
    id: 1,
    name: 'US Dollar',
    value: 'USD',
    imgSrc: '/assets/icons/amerikan_flag.svg',
  },
  {
    id: 2,
    name: 'British Pound',
    value: 'GBP',
    imgSrc: '/assets/icons/Uk_flag.svg',
  },
  {
    id: 3,
    name: 'Euro',
    value: 'EUR',
    imgSrc: '/assets/icons/eur_flag.svg',
  },
];
