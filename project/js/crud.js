var dishName = document.getElementById('dishName');
var dishPrice = document.getElementById('dishPrice');
var cuisineType = document.getElementById('cuisineType');
var dishes = [];
var searchInput = document.getElementById('searchInput');
var inputs = document.getElementsByClassName('form-control');
var addBtn = document.getElementById('addBtn');
var currentIndex = 0;

if (localStorage.getItem('dishData')) {
    dishes = JSON.parse(localStorage.getItem('dishData'));
    displayData();
}

addBtn.onclick = function () {
    if (addBtn.innerHTML == 'Add Dish') {
        addDish();
    } else {
        updateDish();
    }
    displayData();
    clearData();
};


function addDish() {
    var dish = {
        name: dishName.value,
        price: dishPrice.value,
        cuisine: cuisineType.value,
    };
    dishes.push(dish);
    var stringArray = JSON.stringify(dishes);
    localStorage.setItem('dishData', stringArray);
}

function displayData() {
    var tableContent = '';
    var price;
    for (var i = 0; i < dishes.length; i++) {
        price = 50 * (parseInt(dishes[i].cuisine));
        tableContent += `<tr>
            <td>${dishes[i].name}</td>
            <td>${price}</td>
            <td>${dishes[i].cuisine}</td>
            <td><button class='btn btn-warning' onclick='getDishInfo(${i})'>Update</button></td>
            <td><button onclick='deleteDish(${i})' class='btn btn-danger'>Delete</button></td>
        </tr>`;
    }
    document.getElementById('table').innerHTML = tableContent;
}

function deleteDish(index) {
    dishes.splice(index, 1);
    var stringArray = JSON.stringify(dishes);
    localStorage.setItem('dishData', stringArray);
    displayData();
}

function clearData() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function getDishInfo(index) {
    currentIndex = index;
    var currentDish = dishes[index];
    dishName.value = currentDish.name;
    dishPrice.value = currentDish.price;
    cuisineType.value = currentDish.cuisine;
    addBtn.innerHTML = 'Update Dish';
}

function updateDish() {
    var dish = {
        name: dishName.value,
        price: dishPrice.value,
        cuisine: cuisineType.value,
    };
    dishes[currentIndex] = dish;
    var stringArray = JSON.stringify(dishes);
    localStorage.setItem('dishData', stringArray);
    addBtn.innerHTML = 'Add Dish';
}


   // Get the query parameters from the URL
   var params = new URLSearchParams(window.location.search);
   // Get the value of the 'valueToSend' parameter
   var receivedValue = params.get('title');
   // Display the received value
   document.getElementById('dishName').value = receivedValue;
   document.getElementById('dishPrice').value = 50;




   

$(document).ready(function(){
    $('.loading .lds-default').fadeOut(3000,function(){
        $('.loading').fadeOut(3000)
    })
})

