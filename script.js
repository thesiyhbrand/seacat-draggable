var myDraggable = Draggable.create("#dragme",{
    type: 'x',
    bounds: "#container",
});

function checkOverlap() {
    var div1 = document.querySelector(".end");
    var div2 = document.getElementById('dragme');
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();

    if (
      rect1.left < rect2.right
    ) {
    document.querySelector("#video1").style.opacity= 0;
    document.querySelector("i").style.opacity= 0;
    document.querySelector(".on-cir").style.backgroundColor= "#fff";
    console.log('Divs are overlapping!');
    }
    else{
        document.querySelector("#video1").style.opacity= 1;
        document.querySelector("i").style.opacity= 1;
        document.querySelector(".on-cir").style.backgroundColor= "orange";
    }
  }
window.addEventListener('mousemove', checkOverlap);
