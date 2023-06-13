import { describe, expect } from 'vitest'
import { getShoppingList, getShoppingListWithCount } from '../../2 Matchers/matchers';

describe(' Test Shopping List', ()=>{
  
    test('Testing getShoppingList function - return Array', () => {

      const shoppingList = getShoppingList();

      expect(shoppingList).toContain('Milk');
      // expect(shoppingList).not.toContain('Carrots'); // Fail

      expect(shoppingList).toHaveLength(22)
      // expect(shoppingList).toHaveLength(15) // Fail

    });

    test('Testing getShoppingListWithCount function - return Array of Objects', ()=>{
      const shoppingList = getShoppingListWithCount();
    
      // expect(shoppingList).toContain({item: 'Milk', count: 3}); // Fail
      expect(shoppingList).toContainEqual({item: 'Milk', count: 3});
      // expect(shoppingList).toContainEqual({item: 'Milk', count: 4}); // Fail
      // expect(shoppingList).toContainEqual({item: 'Milk'}); // Fail

      expect(shoppingList).toHaveLength(22);
      // expect(shoppingList).toHaveLength(15) // Fail

    })

})