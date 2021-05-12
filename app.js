let slider = [
    {
      url: "example.com",
      img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F05%2F941521734-850x560.jpeg" ,
      tittle: "First Slide"
    },
    {
      url: "example.com",
      img: "https://cdn.images.express.co.uk/img/dynamic/67/590x/Ronaldo-Portugal-975022.jpg?r=1533692219313" ,
      tittle: "Second Slide"
    },
    {
      url: "example.com",
      img: "https://en.as.com/en/imagenes/2019/06/22/football/1561194508_818748_1561196404_noticia_normal.jpg" ,
      tittle: "Second Slide"
    },
    {
      url: "example.com",
      img: "https://i.pinimg.com/originals/1c/2a/4e/1c2a4e1adb4bc0bcd9fb723425a15474.jpg" ,
      tittle: "Second Slide"
    },
    {
      url: "example.com",
      img: "https://i.pinimg.com/originals/33/70/f2/3370f290ee450b9a263d6f50434ed1c9.gif" ,
      tittle: "Second Slide"
    },
];

//selectors

let slideContainer = document.getElementById('slideContainer');
let imgLoader = document.getElementById('imgLoader');
let left = document.getElementById('left');
let right = document.getElementById('right');
let burger = document.getElementById('burger');
let nav = document.getElementById('nav');
let cancel = document.getElementById('cancel');
let modalBtn = document.getElementById('modalBtn');
let modalContainer = document.getElementById('modalContainer');
let blocker = document.getElementById('blocker');
let cancelModal = document.getElementById('cancelModal');
let close = document.getElementById('close');
let save = document.getElementById('save');

let currentSlide = 1;
let interval;
let tmp = '';


//Slide functions


function SlideInit(currentSlide) {
    imgLoader.innerHTML = `<img src="${slider[currentSlide].img} ">`;
};
SlideInit(0);

// function slideSwiperInit() {
//   slider.map(() => {
//     tmp += `<div></div>`
//   })
  
//   slideContainer.innerHTML += `<div class="swipe">
//                        ${tmp}
//                   </div>`;
// }
// slideSwiperInit();

// let swipe = document.getElementsByClassName('swipe')

// // function slideWiperActive(active) {
// //   swipe[0].childNodes[active].classList.add('activeSlider')
// // }
// // slideWiperActive(currentSlide);

function slideSwipe() {
  if  (currentSlide > slider.length-1) {
    currentSlide = 0;
    SlideInit(currentSlide);
  }
  else {
    SlideInit(currentSlide);
    currentSlide++;
  }
};

function intervalFn() {
  interval = setInterval( () => {
    slideSwipe();
},3000);
};

intervalFn();

function stopSlide() {
  clearInterval(interval);
  console.log("in")
}
function continueSlide() {
   intervalFn(); 
}

imgLoader.addEventListener('mouseover', stopSlide)
imgLoader.addEventListener('mouseout', continueSlide)

function rightFn() {
  clearInterval(interval);
  slideSwipe();
  intervalFn();

}
function leftFn() {
  clearInterval(interval);
  slideSwipe(-slider.length-1);
  intervalFn();

}

right.addEventListener('click', rightFn)
left.addEventListener('click', leftFn)

//Slide Code End


//burger Menu

function burgerOpen() {
  nav.classList.add('nav')
}
function burgerClose() {
  nav.classList.remove('nav')
}

burger.addEventListener('click', burgerOpen)
cancel.addEventListener('click', burgerClose)


// modal Code


modalBtn.addEventListener('click', () => {
  modalContainer.style.top = "150px";
  modalContainer.style.opacity = "100%";
  blocker.classList.add('bodyBlocker');
  clearInterval(interval);
});

function saveModal() {
  modalContainer.innerHTML = `<h1>Saved</h1>`;
  modalContainer.style.textAlign = 'center';
  setTimeout(closeModal, 2000)
  intervalFn();
};

function closeModal() {
  modalContainer.style.top = "-150px";
  modalContainer.style.opacity = "0";
  blocker.classList.remove('bodyBlocker');
  intervalFn();
};

close.addEventListener('click', closeModal);
cancelModal.addEventListener('click', closeModal);
save.addEventListener('click', saveModal)
