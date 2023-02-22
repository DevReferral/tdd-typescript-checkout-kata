import { Discount } from "./Discount";
import { ItemFactory } from "./items";
import { ItemType } from "./types";

export class Store {

    constructor(private discounts?:Array<Discount>){}

    checkout=(items:string):number=>{ //O(n)
     
        const totalPrice = this.totalPrice(items);
        
        const totalDiscount = this.totalDiscount(items);

        return totalPrice-totalDiscount
 }


  private totalPrice(items: string) {
    let total = 0;

    for (let itemType of items.split('')) { //O(n)

      switch (itemType) {
        case ItemType.A:
          total += ItemFactory(ItemType.A).getPrice();
          break;
        case ItemType.B:
          total += ItemFactory(ItemType.B).getPrice();
          break;
        case ItemType.C:
          total += ItemFactory(ItemType.C).getPrice();
          break;
        case ItemType.D:
          total += ItemFactory(ItemType.D).getPrice();
          break;
        default:
          throw new Error("Invalid item: " + itemType);
      }
    }
    return total;
  }

  private totalDiscount(items: string) {
    let totalDiscount = 0;

    for (let discount of this.discounts) //O(n)
      totalDiscount += discount.total(items.split('') as Array<ItemType>);
    return totalDiscount;
  }
}