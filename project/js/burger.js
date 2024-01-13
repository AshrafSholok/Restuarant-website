async function displayburger() {

    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=hamburger');
    posts = await response.json();
    console.log(posts);
}

var food = '';


async function display(){

    for(var i = 0; i < posts.recipes.length; i++){
       food+=`
       
       <div class="col-4" style=" padding:0.7rem;display:flex;flex-wrap:wrap; justify-content:center;">
            <div class="card" style="width: 60%;box-shadow:0.1rem 0 0 0.1rem rgba(0,0,0,0.223); background-color:rgba(0,0,0,0.505);">
                <div style="width: 100% !important;height:10rem;">
                    <img style="width: 100%; height:10rem;" src="${posts.recipes[i].image_url}" alt="">
                </div>
                <div class="card-body" style="text-align: center;">
                    <h5 class="card-title" style="color:white;">${posts.recipes[i].title}</h5>
                    
                    <a href="crud.html?title=${posts.recipes[i].title}" class="btn btn-warning">Order Now</a>
                </div>
            </div>
        </div>
       `;
    }

    document.getElementById('burger-container').innerHTML = food;
}


async function displayall() {
await displayburger();
    display();
}

displayall();

function search (category) {
    var foodd = '';
    for (var i = 0; i < posts.recipes.length; i++) {
        if (posts.recipes[i].title.toLowerCase().includes(searchInput.value.toLowerCase())) {
            foodd+=`
       
       <div class="col-4" style=" padding:0.7rem;display:flex;flex-wrap:wrap; justify-content:center;">
            <div class="card" style="width: 60%;box-shadow:0.1rem 0 0 0.1rem rgba(0,0,0,0.223); background-color:rgba(0,0,0,0.505);">
                <div style="width: 100% !important;height:10rem;">
                    <img style="width: 100%; height:10rem;" src="${posts.recipes[i].image_url}" alt="">
                </div>
                <div class="card-body" style="text-align: center;">
                    <h5 class="card-title" style="color:white;">${posts.recipes[i].title}</h5>
                    
                    <a href="crud.html" class="btn btn-warning">Order Now</a>
                </div>
            </div>
        </div>
       `;
        }
        document.getElementById(category).innerHTML = foodd;
    }
};




$(document).ready(function(){
    $('.loading .lds-default').fadeOut(3000,function(){
        $('.loading').fadeOut(3000)
    })
})

