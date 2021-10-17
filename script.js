let addCart = document.getElementById("add-card");

let main = document.getElementsByClassName("col");
let cart = [];

let bill = document.getElementById("bill");

let alertT = document.getElementById("alert");

// هذا اللي داخل الcart

// class MyCart{
//   constructor(name,img,price){
//     this.name=name;
//     this.img=img;
//     this.price=price;
//   }
//   calc(){
//      return new MyCart(this.name,this.img,this.price);

//   }

// }

// }

let products = [
  {
    imageSrc: "imeges/iphone 13 pro.jpeg",
    name: "Iphone 13 pro",
    price: 3250,
  },
  {
    imageSrc: "/imeges/5129auZX34L._AC_SX679_.jpg",
    name: "Macbook",
    price: 4230,
  },
  {
    imageSrc: "/imeges/The Prince.jpg",
    name: "The Prince",
    price: 50,
  },
  {
    imageSrc: "/imeges/Pixel-6-Pro.jpeg",
    name: "Pixel-6-Pro",
    price: 2900,
  },
  {
    imageSrc: "/imeges/Bobby Original Anti-Diefstal Rugzak, Grijs",
    name: "Bobby Original Anti-Diefstal Rugzak, Grijs",
    price: 950,
  },
];

function saveInLocal() {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}
function getInLocal() {
  cart = JSON.parse(sessionStorage.getItem("cart"));
}

if (sessionStorage.getItem("cart") != null) {
  getInLocal();
}

// count = 0;

// let myCart = localStorage.setItem('myCart',JSON.stringify(myCart));

function addToCart(id) {
  let exist = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart.includes(products[id])) {
      products[id].count += 1;

      saveInLocal();
      exist = true;
      break;
    }
  }
  if (!exist) {
    products[id]["count"] = 1;
    cart.push(products[id]);
    saveInLocal();
  }

  console.log("hghfh");
  let value = totalAmount();
  console.log(value);
  alertT.innerText = value;
  // alert(value)
}

function totalAmount() {
  let subTotal = 0;

  let delevary = 0;

  let discount = 0;
  let total = 0;

  let copon = ["y9b", "abc", "hwd", "T1000"];

  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].price);
    console.log(cart[i].count);
    let price = cart[i].price;
    let count = cart[i].count;
    subTotal += price * count;
  }
  let rightS = document.getElementById("rightS");
  if (typeof rightS != undefined && rightS != null) {
    if (document.getElementById("collection").checked) {
      delevary = 0;
    } else {
      if (document.getElementById("dlv1").selected) {
        delevary = 25;
      } else if (document.getElementById("dlv2").selected) {
        delevary = 19;
      } else {
        delevary = 12;
      }
    }
    if (copon.includes(document.getElementById("copon").value)) {
      discount = 150;
    } else {
      discount = 0;
    }

    total = subTotal;
    total = subTotal * 0.15 + total;
    total += delevary;
    total = total - discount;
    console.log(discount);
    console.log(subTotal);
    console.log(total);
    console.log(total);
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("delv").innerText = delevary;
    document.getElementById("total").innerText = total;
  }

  console.log(subTotal);
  return subTotal;
}

// let stordCart = JSON.parse(localStorage.getItem("myCart"))
// console.log(cart[id].price);

let myCartDiv = document.getElementById("mycart");
console.log(cart);
cart.forEach(function (obj) {
  // alert('hosdh')

  console.log(obj);

  let div = document.createElement("div");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");

  // let div3 = document.createElement('div');
  let p = document.createElement("p");
  let p1 = document.createElement("h3");
  let p2 = document.createElement("h5");
  let p21 = document.createElement("h3");
  // let p3 = document.createElement('h5');
  let img = document.createElement("img");

  div2.appendChild(p2);
  div2.appendChild(p21);
  div2.setAttribute("id", "tax");
  // p2.style.backgroundColor = 'red'
  // div2.style.backgroundColor='red'
  div2.style.display = "flex";
  div2.style.flexDirection = "row";

  // div3.appendChild(p3)
  // p3.style.backgroundColor = 'blue'
  // div3.style.backgroundColor='blue'
  // div3.style.display = "flex"
  // div3.style.flexDirection="row"

  // p3.innerText="lkdn"

  img.style.width = "100%";
  img.style.margin = "30%";
  img.style.backgroundImage = "none";
  // div1.style.backgroundColor='red'

  div.setAttribute("id", "itemsCart");

  // p.style.fontSize="larg"
  p.style.display = "flex";
  p.style.flexDirection = "column";
  p.style.justifyContent = "center";
  p.setAttribute("id", "nameOfItem");

  div1.style.display = "flex";
  div1.style.flexDirection = "row";

  p1.style.display = "flex";
  p1.style.flexDirection = "column";
  p1.style.justifyContent = "center";
  p1.setAttribute("id", "priceOfItem");

  p.innerText = obj.name;
  img.src = obj.imageSrc;
  p1.innerText = obj.price;

  div.appendChild(p);
  div.appendChild(img);
  div.appendChild(div1);
  div1.appendChild(p1);
  div.appendChild(div2);
  // div.appendChild(div3)

  myCartDiv.appendChild(div);

  // console.log(obj.name);
});

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  alert(result);
  return result;
}

//   console.log(totalPrice);

// console.log(cart[id].name);

// fetch('products.json', {
//     "method": "GET",
// }).then((response) => {
//     alert("resolve", response)
//     return response.json();
// }).then(
//     data => {
//        console.log(data.results);})
