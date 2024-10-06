const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $22', 'Oatmeal- $21', 'Frittata- $15'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join(''); //creates content for brekfast menu
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML; //place the content into HTML


let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});//creates content for maincourse menu
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem; //place the content into HTML

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;