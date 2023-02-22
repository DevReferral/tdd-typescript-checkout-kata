import { ItemType } from "./types";

export class DiscountClass{
    
  constructor(
    private type:ItemType,
    private discountCount:number,
    private discountValue:number
  ){}
     

  total(items:Array<ItemType>):number{
     let discount=0;

        const count = items.filter(currentItem =>currentItem===this.type).length;

        discount =Math.trunc(count/this.discountCount)*this.discountValue;
     
        return discount;
     
  }

}