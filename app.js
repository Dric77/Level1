
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
let sidebarCardContainer = document.getElementById('sidebarCardContainer');
let leyoutView = document.querySelectorAll('.leyoutView');
let card = document.querySelectorAll(".product-cards");
let productShows = document.getElementById("productShows").getElementsByTagName('li');
let productRange = document.getElementById('productRange');
let priceRange = document.getElementById('priceRange');
let priceSlider = document.getElementById('priceSlider');
let livePrice = document.getElementById('livePrice');
let data;
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
        data = '';
        data = json;
        cardsInit();
    });
 };
 getProducts(url);




  function rowColChange() {
    for (let i=0; i<leyoutView.length; i++) {
      leyoutView[i].addEventListener('click', () => {
        tmp = "";
        if(leyoutView[i].attributes[1].nodeValue === "one") {
          cardContainer.className = "row row-cols-4 mt-5";
          cardsInit();
        }
        else {
          cardContainer.className = "row row-cols-1 mt-5";
          data.map((product) => {
            tmp +=  `
            <div class="card mb-3 mt-3 border-0">
            <div class="row g-0 align-items-center">
              <div class="col-md-2">
                <img class="sidbarCard-img" src="${product.image}" alt="...">
              </div>
              <div class="col-md-10">
                <div class="card-body">
                    <div class="stars">
                        <i class="fas fa-star mainColor"></i>
                        <i class="fas fa-star mainColor"></i>
                        <i class="fas fa-star mainColor"></i>
                        <i class="fas fa-star mainColor"></i>
                        <i class="fas fa-star mainColor"></i>
                      </div>
                     <p class="card-title text-muted">${product.title}</p>
                     <p class="card-title text-muted">${product.description}</p>
                     <h3 class="price">$${product.price}</h3>
                </div>
              </div>
            </div>
          </div>  
                `;
          });
        } 
        cardContainer.innerHTML = '';
        cardContainer.innerHTML = tmp;
      })
  }
  };
  rowColChange();

  console.log(productRange.value)

function changeProductCount() {
  limit = productRange.value;
  changeUrlLimit(limit)
  getProducts(url);
}
productRange.addEventListener('change', changeProductCount)

function getSidebarProducts() {
  fetch('https://fakestoreapi.com/products?limit=3')
            .then(res=>res.json())
            .then(data => {
              data.map((el) => {
                tmp += `
                    <div class="card mb-3 mt-3 border-0">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <img class="sidbarCard-img" src="${el.image}" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                            <div class="stars">
                                <i class="fas fa-star mainColor"></i>
                                <i class="fas fa-star mainColor"></i>
                                <i class="fas fa-star mainColor"></i>
                                <i class="fas fa-star mainColor"></i>
                                <i class="fas fa-star mainColor"></i>
                              </div>
                            <p class="card-title text-muted">${el.title}</p>
                            <h3 class="price">${el.price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                      `
              });
              sidebarCardContainer.innerHTML = '';
              sidebarCardContainer.innerHTML += tmp;

            });

};
getSidebarProducts();

function cardsInit() {
  tmp = '';
  data.map((product) => {
     if (product.price < priceRange.value) {
      tmp +=`
      
      <div class="col product-cards">
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

      `;
      
     let priceTmp = 0;
     if (priceTmp < product.price) {
        priceTmp = product.price;
        livePrice.innerHTML = priceTmp;
     }

     }
  })
  setTimeout(() => {
    cardContainer.innerHTML = '';
    cardContainer.innerHTML += tmp;
  }, 1000)
};


//price range slider

priceRange.addEventListener('input', () => {
  cardsInit()
  livePrice.innerHTML = priceRange.value;
   
})

//redisgn product

for (let li in productShows) {
     productShows[li].addEventListener('click', () => {
       if (li == 0) {
        cardContainer.className ='';
        console.log(li)
        cardContainer.className = 'row row-cols-2 mt-5'
       }
       if (li == 1) {
        cardContainer.className ='';
        cardContainer.className = 'row row-cols-3 mt-5'
       }
       if (li == 2) {
        cardContainer.className ='';
        cardContainer.className = 'row row-cols-4 mt-5'
       }
       if (li == 3) {
        cardContainer.className ='';
        cardContainer.className = 'row row-cols-5 mt-5'
       }
     })
};


//Sidebar Collapse

// let Brandcollapse = document.getElementById('Brandcollapse')
// let BrandcollapseBtn = document.getElementById('BrandcollapseBtn')
// BrandcollapseBtn.addEventListener('click', () => {
//  if (Brandcollapse.classList === "collapse") {
//     Brandcollapse.className = "collapsing"
//     setTimeout(() => {
//       Brandcollapse.className = "collapse"
//     }, 300)
//  }
//  else {
//     Brandcollapse.className = "collapsing"
//       setTimeout(() => {
//         Brandcollapse.className = "collapse show"
//       }, 300)
//   }
// })
            


