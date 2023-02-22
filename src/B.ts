
import { Item } from './items';

const PRICE=30

const DISCOUNT_COUNT=2
const DISCOUNT_VALUE=15

export class B implements Item{

  getDiscount() {
   return  {
      count:DISCOUNT_COUNT,
      value:DISCOUNT_VALUE
    }
  }
 
   
  getPrice(){
    return PRICE
   }
}
