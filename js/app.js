const el = document.getElementsByTagName("input") 
console.log(el)
//select inputs
el[1].addEventListener("click", function(event){ //select element 0 and listen for it
  event.preventDefault()
  var val= document.getElementById("textfield").value
  var locatedStr = val.search(".com")
  var locatedAt = val.search("@")
  if (locatedStr > -1 && locatedAt > -1){
    alert("Thank you for subscribing!")
  } else {
    alert("Please enter a valid email")
  }
  document.getElementById("textfield").value = ""
})

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
