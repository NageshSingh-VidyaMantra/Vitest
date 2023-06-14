export const apple1 = {
    color: 'red',
    weight: '100 gm'
}

export const apple2 = apple1;

export const apple3 = {
    color: 'red',
    weight: '100 gm'
}

export const apple4 = {
    color: 'red',
    weight: '150 gm'
}

/* 
  This function return shopping list
*/
export function getShoppingList(){
return [
'Milk',
'Butter',
'Eggs',
'Cheese',
'Yoghurt',
'Apples',
'Bananas',
'Oranges',
'Grapes',
'Melon',
'Berries',
'Lettuce',
'Tomatoes',
'Onions',
'Garlic',
'Potatoes',
'Carrots',
'Cucumber',
'Avocado',
'Brocolli',
'Spinach',
'Coriander',
];
}

/* 
  This function return shopping list with there count
*/
export function getShoppingListWithCount(){
    return [
    {item: 'Milk', count: 3},
    {item: 'Butter', count: 1},
    {item: 'Eggs', count: 2},
    {item: 'Cheese', count: 2},
    {item: 'Yoghurt', count: 3},
    {item: 'Apples', count: 2},
    {item: 'Bananas', count: 2},
    {item: 'Oranges', count: 4},
    {item: 'Grapes', count: 2},
    {item: 'Melon', count: 2},
    {item: 'Berries', count: 5},
    {item: 'Lettuce', count: 2},
    {item: 'Tomatoes', count: 5},
    {item: 'Onions', count: 5},
    {item: 'Garlic', count: 2},
    {item: 'Potatoes', count: 5},
    {item: 'Carrots', count: 4},
    {item: 'Cucumber', count: 4},
    {item: 'Avocado', count: 2},
    {item: 'Brocolli', count: 5},
    {item: 'Spinach', count: 5},
    {item: 'Coriander', count: 2},
    ];
    }