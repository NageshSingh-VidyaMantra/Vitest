import { describe, expect } from 'vitest'
import { getShoppingList, getShoppingListWithCount } from '../../2 Matchers/matchers';

describe(' Test Shopping List', ()=>{
  
    test('Testing getShoppingList function - return Array', () => {

      const shoppingList = getShoppingList();
      // shoppingList - is the array of string containg shopping item

      // Testing if shoppingList contain 'Milk'
      expect(shoppingList).toContain('Milk'); // PASS as it contain
      // expect(shoppingList).not.toContain('Carrots'); // FAIL as it does NOT contain

      expect(shoppingList).toHaveLength(22) // as length of shoppingList is 22
      // expect(shoppingList).toHaveLength(15) // FAIL

    });

    test('Testing getShoppingListWithCount function - return Array of Objects', ()=>{

      const shoppingList = getShoppingListWithCount();
      // shoppingList - is the array of object containg shopping item and as well as count
    
      // In order to check for object in array we use 'toContainEqual' 
      expect(shoppingList).toContainEqual({item: 'Milk', count: 3});
      // expect(shoppingList).toContainEqual({item: 'Milk', count: 4}); // FAIL as count is 4
      // expect(shoppingList).toContainEqual({item: 'Milk'}); // FAIL as count property is missing

      // Now suppose we want to check, if a property exist or NOT in our array of objects
      expect(shoppingList[0]).toEqual({item: 'Milk', count: 3}); // PASS

      // with the help of 'toHaveProperty' matcher we can check if a property exist or NOT
      // and also can check if it is holding the expected value. 
      expect(shoppingList[0]).toHaveProperty('count') // PASS as 'count' does exist on shoppingList[0] Object
      expect(shoppingList[2]).toHaveProperty('item', 'Eggs') // PASS as 'count' does exist on shoppingList[1] Object

      expect(shoppingList).toHaveLength(22);
      // expect(shoppingList).toHaveLength(15) // FAIL
    })

})