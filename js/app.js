const el = document.getElementsByTagName("input") 
//select inputs
el[1].addEventListener("click", function(){ //select element 0
    alert("Thank you for subscribing!")
})
console.log(el) //displays buttons in console

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
