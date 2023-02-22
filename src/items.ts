import { A } from "./A"
import { B } from "./B"
import { C } from "./C"
import { D } from "./D"

import { ItemType } from "./types"

export interface Item{

   getPrice():number

   getDiscount?():{
    count:number,
    value:number,
   }
}

export const ItemFactory = (item:ItemType):Item=>{
     
      switch(item){
        
        case ItemType.A:
          return new A();
        case ItemType.B:
          return new B();
        case ItemType.C:
          return new C();
        case ItemType.D:
          return new D();
        default:
          throw new Error(`Invalid item: ${item}`)

     }
}
