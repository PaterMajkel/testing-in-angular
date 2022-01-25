export class Item {
  // name:string;
  // price:number;

  constructor(public name: string, public price: number = 0) {}
}

export const items: Item[] = [
  new Item('milk'),
  new Item('orange'),
  new Item('onion'),
];
