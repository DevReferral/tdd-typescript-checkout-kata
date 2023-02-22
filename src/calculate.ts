/**
 * A : 50  (discount)=> 3 for 130
 * B : 30 (discount)=>   2 for 45
 * C : 20  No discount
 * D : 15 No discount
 * */
import { discount } from './discount';
import { DiscountClass } from './discountClass';
import { ItemFactory } from "./items";
import { ItemType } from "./types";

export const checkout=(items:string):number=>{ //O(n)
     
   let total =0
   
   for ( let itemType of items.split('')){ //O(n)
         
        switch (itemType){         
            case 'A':
              total +=ItemFactory(ItemType.A).getPrice()
              break;
            case 'B':
              total+=ItemFactory(ItemType.B).getPrice()
              break;
            case 'C':
              total+=ItemFactory(ItemType.C).getPrice()
              break;
            case 'D':
              total+=ItemFactory(ItemType.D).getPrice()
              break;
            default:
              throw new Error("Invalid item: " + itemType)
        }  
   }

   const uniqueItems = new Set(items.split(''))
     
   for ( let item of uniqueItems ) //O(n)
        total-= discount(item,items.split(''))

   return total
}