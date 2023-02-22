import { Store } from "../src/Store";

import { Discount } from "../src/Discount";
import { ItemType } from "../src/types";
/**
 * A : 50  (discount)=> 3 for 130
 * B : 30 (discount)=>   2 for 45
 * C : 20  No discount
 * D : 15 No discount
 * */
describe('total for items without discount', () => {
    
    let store:Store ;
    
    beforeEach(() => {

        const A_DISCOUNT = new Discount(ItemType.A,3,20)
        const B_DISCOUNT = new Discount(ItemType.B,2,15)
        
       store = new Store([A_DISCOUNT, B_DISCOUNT])
    })
    describe('total for items without discount', () => {

        it('expect checkout(items:string) to exist',()=> {
            
            
            expect(store.checkout).toBeInstanceOf(Function)
        })
        it('should return 0 when no items are available', () => {
            expect(store.checkout("")).toEqual(0)
        })

        it('expect AABCD to add to the total 165',()=>{
            expect(store.checkout('AABCD')).toEqual(165)
        })

        it('should throw an error when items is invalid',()=>{ // return item
            expect(()=>store.checkout('4AABBC')).toThrow("Invalid item: 4")
        })

    })
 

    describe('the discount should be applied to the total',()=>{
        
            it('when there are "AAA" , the discount should be applied, ',()=>{
                expect(store.checkout('AAA')).toEqual(130)
                
            })
            it('should be 100 when "AA" is there',()=>{
                expect(store.checkout('AA')).toEqual(100)
            })

            it('should be 260 when AABCDADDCD is entered',()=>{

                expect(store.checkout('AABCDADDCD')).toEqual(260)
            })

            it('should be 310 when AAABBBCCCDDD is entered',()=>{
                expect(store.checkout('AAABBBCCCDDD')).toEqual(310)
            })

            it('should be 75 when BBB is entered',()=>{
                expect(store.checkout('BBB')).toEqual(75)
            })
  
})

});





