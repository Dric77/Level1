//slider code

let slideData = [
    {
        img: 'http://themes.pixelstrap.com/multikart/assets/images/home-banner/1.jpg',
        tittle1: "welcome to fashion",
        tittle2: "men fashion",
        btn: 'shop now',
        
    },
    {
        img: 'http://themes.pixelstrap.com/multikart/assets/images/home-banner/2.jpg',
        tittle1: "welcome to fashion",
        tittle2: "men fashion",
        btn: 'shop now',
        
    },
];

var myCarousel = document.querySelector('#myCarousel');

var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000,
    wrap: false
  });
  
  //modal

//   let myModal = document.getElementById('myModal');
//   let btn = document.getElementById('btn-modal-my');
//   let body = document.getElementsByTagName('body');
// console.log(myModal)

// function modal() { 
//     myModal.classList.add('show')
//     body.classList.add('modal-show')
   
//     console.log(body)
// };
// btn.addEventListener ('click', modal)
