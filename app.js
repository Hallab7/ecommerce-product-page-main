const addition = document.getElementById("plus");
const subtraction = document.getElementById("minus");


addition.addEventListener("click",plus);
function plus() {
  let sample = document.getElementById('zero');
document.getElementById('zero').innerHTML= Number(sample.innerHTML)+1;
}


subtraction.addEventListener("click",minus);
function minus() {
    if(Number(document.getElementById('zero').innerHTML) > 1) {
  let sample = document.getElementById('zero');
document.getElementById('zero').innerHTML= Number(sample.innerHTML)-1;
    }
}

const addtoCart = document.getElementById("add");

addtoCart.addEventListener('click', addToCart);
let cartNo = document.getElementById('cart-no');
function addToCart() {
  let quantity = document.getElementById('zero').innerHTML;


  cartNo.innerHTML = quantity;
  let multiple = document.getElementById('multiple');

  multiple.innerHTML = " x " + quantity;

  let total = document.getElementById('total');

  total.innerHTML = " $"+(125*quantity + ".00")

  cartNo.classList.add('active1')

  if (quantity >= 1) {
  document.getElementById('bottom').style.display = "block";
  document.getElementById('empty-msg').style.display = "none"
  } 
  else {
    document.getElementById('bottom').style.display = "none";
    document.getElementById('empty-msg').style.display = "block"
  }


}

const cart1 = document.getElementById('cart');
const active = document.getElementById('pop-up');

cart1.addEventListener('click', cart);

function cart() {

  console.log(active.classList.value == "pop-up active")
  
  if (active.classList.value == "pop-up active"){
  
  // // active.style.display = 'none';
  active.classList.remove("active")
  }
  else {
  //   // active.style.display = 'block'
    active.classList.add("active")
  }

}

const delete1 = document.getElementById('Capa_1');
delete1.addEventListener('click', delete2);
function delete2() {
  document.getElementById('bottom').style.display = "none";
  document.getElementById('empty-msg').style.display = "block";

  cartNo.classList.remove('active1')
}

  // document.querySelector(".container:not(#cart)").addEventListener("click", () => {
  //   if(active.classList.value == "pop-up active") {
  // //   // active.style.display = "none"
  //   console.log("Hee")
  //   active.classList.remove("active")
  //   }
  // })
  document.querySelector(".main-container").addEventListener("click", () => {
    if(active.classList.value == "pop-up active") {
  //   // active.style.display = "none"
    console.log("Hee")
    active.classList.remove("active")
    }
  })
  var zee = document.querySelector(".side-container");
  var zay = document.querySelector(".header");
  function myFunction() {
    var x = document.getElementById("mylinks");
    var y = document.querySelector(".icon");
    
    if (x.style.display === "block") {
      x.style.display = "none";
     

    } else {
      x.style.display = "block";
      zee.classList.add("z-container")
      cart1.removeEventListener('click', cart);
      
      // y.style.display = "none"
      

    }
  }

  document.getElementById("close").addEventListener("click", () => {
    var x = document.getElementById("mylinks");
    var y = document.querySelector(".icon");
    x.style.display = "none";
    zee.classList.remove("z-container")
    cart1.addEventListener('click', cart);
    // y.style.display = "block";
   
  })

  document.getElementById("image1").addEventListener("click", () => {
    var a = document.getElementById("image1");
    var b = document.getElementById("image2");
    var c = document.getElementById("image3");
    var d = document.getElementById("image4");
    a.classList.add("active-img");
    b.classList.remove("active-img");
    c.classList.remove("active-img");
    d.classList.remove("active-img");
  })
  document.getElementById("image2").addEventListener("click", () => {
    var b = document.getElementById("image1");
    var a = document.getElementById("image2");
    var c = document.getElementById("image3");
    var d = document.getElementById("image4");
    a.classList.add("active-img");
    b.classList.remove("active-img");
    c.classList.remove("active-img");
    d.classList.remove("active-img");
  })
  document.getElementById("image3").addEventListener("click", () => {
    var a = document.getElementById("image1");
    var a = document.getElementById("image2");
    var c = document.getElementById("image3");
    var d = document.getElementById("image4");
    c.classList.add("active-img");
    b.classList.remove("active-img");
    a.classList.remove("active-img");
    d.classList.remove("active-img");
  })
  document.getElementById("image4").addEventListener("click", () => {
    var a = document.getElementById("image1");
    var b = document.getElementById("image2");
    var c = document.getElementById("image3");
    var d = document.getElementById("image4");
    d.classList.add("active-img");
    a.classList.remove("active-img");
    b.classList.remove("active-img");
    c.classList.remove("active-img");
  })