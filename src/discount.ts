
import { ItemFactory } from "./items"
import { Entry, ItemType, Key } from "./types"

export const discount =(item:string,items:string[]):number=>{
    let _discount=0

    const count = items.filter(currentItem =>currentItem===item).length

    const Item = ItemFactory(item as ItemType);

     if ( typeof Item.getDiscount === 'function'){

        const {count:discountCount,value:discountValue} =Item.getDiscount();
            
        _discount =Math.trunc(count/discountCount)*discountValue
     }
    
   return _discount
}
