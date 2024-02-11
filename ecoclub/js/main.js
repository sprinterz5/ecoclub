var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  
  contain: true,
  draggable: true,
  freeScroll: true,
  wrapAround: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
var checkt = 0;
function validate() {
    
    
        if(checkt == 0){
          document.getElementById('sidebar').style = "right:0px";
          document.getElementById('html').style = "overflow-y:hidden";
          checkt = 1;

        }
        else{
          document.getElementById('sidebar').style = "right:-50vw";
          document.getElementById('html').style = "overflow-y:default";
          checkt = 0;
        }
    
}