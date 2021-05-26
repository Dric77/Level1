
//miodal

// let modal = document.getElementById('modal');
// let modalInput = document.getElementById('modalInput');
// let body = document.getElementsByTagName('body')

// window.onload = setTimeout(() => {
//     modal.style.top = "50%";
// }, 1000);

// window.onload = setTimeout(() => {
//     if (modalInput === document.activeElement) {
//         console.log('focused')
//     }
//     else {
//         modal.style.top = "-500px"
//     }
// }, 4000);

// body[0].addEventListener('click', () => {
//     modal.style.top = "-500px";
// })


//

let cardContainer = document.getElementById('cardContainer');
let card = document.querySelectorAll(".product-cards");
let resultShow = document.querySelectorAll(".result-show ");
let productRange = document.getElementById('productRange');
let tmp = "";
let limit = 5;
let url = "https://fakestoreapi.com/products?limit=";

//get products and sort

function changeUrlLimit(count) {
    return url = "https://fakestoreapi.com/products?limit=" + count;
};

changeUrlLimit(limit)


 function getProducts(url) {
    fetch(url)
    .then(res=>res.json())
    .then(json=> {
      console.log(json)
        tmp = '';
        json.map((product) => {
            tmp +=`
            
            <div class="col-lg-3 product-cards">
            <div class="card border-0">
                <img src="${product.image}" class="card-img-top product-img" alt="...">
                <div class="card-body">
                  <div class="stars">
                    <i class="fas fa-star mainColor"></i>
                    <i class="fas fa-star mainColor"></i>
                    <i class="fas fa-star mainColor"></i>
                    <i class="fas fa-star mainColor"></i>
                    <i class="fas fa-star mainColor"></i>
                  </div>
                  <h6 class="card-title mt-2 lead h2">${product.title}</h6>
                  <h4>$${product.price}</h4>
                  <div class="colorPicker">
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                  </div>
                </div>
              </div>
          </div>

            `
        })
        cardContainer.innerHTML = '';
        cardContainer.innerHTML += tmp;
    });
 };

 
 getProducts(url);

productRange.addEventListener('click', () => {
    limit = productRange.value;
    changeUrlLimit(limit)
    getProducts(url);
})

//redisgn product


resultShow[0].addEventListener('click', () => {
    console.log(card[0])
})



            


