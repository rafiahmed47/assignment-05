const mealList = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            getMealsList(data.meals);
        })
        .catch(error => {
            const alert = document.getElementById('alert');
            const alertText =`
                ${meal} is available in space.. kindly contact with Elon Mask for that.
            `;
            alert.innerText = alertText;
        });
}

document.getElementById('btn').addEventListener('click', function () {
    const Input = document.getElementById('input').value;
    mealList(Input);
})


const getMealsList = menus => {     
    const menusDiv = document.getElementById('menus');
    menusDiv.innerHTML = '';
    menus.forEach(menu => {
        const menuDiv = document.createElement('div')
        menuDiv.className = 'menu';
        const menuInfo = `
            <div onclick = "displayIngredient('${menu.strMeal}')">
            <img src = "${menu.strMealThumb}">
            <p>${menu.strMeal}</p>
        `;
        menuDiv.innerHTML = menuInfo;
        menusDiv.appendChild(menuDiv);
    })
}
const displayIngredient = menu => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`)
        .then(res => res.json())
        .then(data => renderIngredient(data.meals[0]));
}

const renderIngredient = ingredient => {
    const menuDetailsDiv = document.getElementById('menu-details');
    const ingredientsAll = `
        <img src = "${ingredient.strMealThumb}">
        <h2>${ingredient.strMeal}</h3>
        <h4>Ingredients:</h5>
        <p>${ingredient.strIngredient1}</p>
        <p>${ingredient.strIngredient2}</p>
        <p>${ingredient.strIngredient3}</p>
        <p>${ingredient.strIngredient4}</p>
        <p>${ingredient.strIngredient5}</p>
        <p>${ingredient.strIngredient6}</p>
        <p>${ingredient.strIngredient7}</p>
        <p>${ingredient.strIngredient8}</p>
        <p>${ingredient.strIngredient9}</p>
        <p>${ingredient.strIngredient10}</p>
    `;
    menuDetailsDiv.innerHTML = ingredientsAll;
    document.getElementById('btn').addEventListener('click', function () {
        menuDetailsDiv.innerHTML = '';
    })

}