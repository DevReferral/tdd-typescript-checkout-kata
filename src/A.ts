
import { Item } from "./items";

const PRICE = 50

const DISCOUNT_COUNT=3
const DISCOUNT_VALUE=20

export class A implements Item{  
 
  getPrice(){
    return PRICE
   }

   getDiscount(){
     return {
      count:DISCOUNT_COUNT,
      value:DISCOUNT_VALUE
     }
   }
}