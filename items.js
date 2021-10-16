// let addToCartButtons = document.getElementsByClassName('btn-primary');
// console.log(addToCartButtons);

// for(let i = 0 ; i< addToCartButtons.length ; i++){
//     let button = addToCartButtons[i];
//     button.addEventListener('click', addCartClicked)
// }

// function removeCartItem(){

// }

// function addCartClicked(event){
//     let button = event.target
//     let shopItem = button.parentElement.parentElement
//     let title = shopItem.getElementsByClassName('card-title')[0].innerHTML
//     let price = shopItem.getElementsByClassName('card-text')[0].innerHTML
//     let image = shopItem.getElementsByClassName('card-img-top')[0].src
//     console.log(title, price, image);
//     addItemToCart(title, price, image)
// }

// function addItemToCart(title, price, image){

    
//     let cartRow = document.createElement('div')
//     cartRow.innerText = 'title';
//     let cartItems = document.getElementsByClassName('cart-items')[0]
//     cartItems.append(cartRow)
    
// }




let products = [
      {
      name:'shirt',
      price: 19,
      inCart: 0
    },
      {
      name:'ball',
      price: 30,
      inCart: 0
      },
      {
      name:'iPhone',
      price: 5000,
      inCart: 0
      },
      {
      name:'cod',
      price: 200,
      inCart: 0
      },
      {
      name:'frame',
      price: 15,
      inCart: 0
      },
      {
      name:'shoe',
      price: 80,
      inCart: 0
      }
    ];

let addToCartButtons = document.getElementsByClassName('btn-primary');

for(let i = 0 ; i< addToCartButtons.length ; i++){
    let button = addToCartButtons[i];
    button.addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
    
    }

function cartNumbers(product){
    // console.log("product is" , product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    // console.log(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
    
}




function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers ;
    }
}


function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);   
    

    if(cartItems !== null){

        if(cartItems[product.name] == undefined){
            cartItems ={
                ...cartItems,
                [product.name]: product
            }
        }

        cartItems[product.name].inCart +=1;
    }

    else {
        product.inCart=1;
        cartItems = {
            [product.name] : product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    
    let cartCost = localStorage.getItem('totalCost')
    

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price)

    }else{
        localStorage.setItem("totalCost",product.price)
    }
    console.log('Total cost is: ', cartCost)
}


function added(){
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems);

    let cartCost = localStorage.getItem('totalCost')
    cartCost = parseInt(cartCost);

    let totalElement = document.querySelector('.total');
    totalElement = totalElement.parentElement;
    

    let cartElement = document.querySelector('.cart-body');
    cartElement = cartElement.parentElement;

    let cartTotal = document.querySelector('.total');
    cartTotal = cartTotal.parentElement;

    console.log(cartElement);
    if(cartItems && cartElement){
        cartElement.innerHTML ='';
        Object.values(cartItems).map(item =>{
            cartElement.innerHTML += `
            <div class ="cart-body">
                <div class="col-md-4">    
                    <div class="card" style="width: 18rem;">
                        <figure>
                            <img class="card-img-top" src="./images/${item.name}.jpg" alt="Card image cap">
                        </figure>
                        <div class="card-body">
                            
                            <h5 class="card-title">
                            <ion-icon name='close-circle' class="remove"></ion-icon> 
                            ${item.name}
                            </h5>
                            <h5 class="card-text ">Price: ${item.price}.00 SR</h5>
                            <ion-icon class="increase" name="caret-up-outline"></ion-icon>
                            <p class ="card-text ">${item.inCart}</p>
                            <ion-icon class="decrease" name="caret-down-outline"></ion-icon>
                            <h4 class="total">
                                Total: ${(item.inCart * item.price)}.00 SR
                            </h4>
                        </div>
                    </div>
                </div>        
            </div>
            <br><br>
            
            `;
        })

        totalElement.innerHTML += `
        <div class="row">
            <div class="col"> 
                <div class ="basketTotalContainer">
                    <h4 class="basketTotalTitle"> Cart Total </h4>
                    <h4 class="basketTotal">
                    ${(cartCost * 1.15).toFixed(2)} SR
                    </h4>
                    <button class="btn btn-primary checkout" type="button" onclick="location.href='./checkout.html'">Check Out </button>
                </div>
            </div>
        </div>    
        
        `
        
    }
    console.log(typeof cartCost);
}








// function updateQuantity(){
//     let inc = document.querySelector("increase");
//     let dec = document.querySelector("decrease");

//     let cartItems = localStorage.getItem('productsInCart')
//     cartItems = JSON.parse(cartItems);

//     console.log(cartItems);   
// }

onLoadCartNumber();
added();

// updateQuantity();


// cartElement.innerHTML = `<div class="card hover01 card1" style="width: 18rem;">
//         <figure>
//             <img class="card-img-top" src="" alt="Card image cap">
//         </figure>
//         <div class="card-body">
//           <h5 class="card-title">${cartItems.name}</h5>
//           <p class="card-text ">${cartItems.price}</p>
//           <a href="#" class="btn btn-primary">BUY NOW</a>
//         </div>
//       </div>
//     </div>`









// <div class="product">
// <ion-icon name='close-circle'></ion-icon>
// <img class="cart-img" src="./images/${item.name}.jpg">
// <span>${item.name}</span>
// </div>
// <div class="price">${item.price}</div>
// <div class="quantity">
// <ion-icon class="decrease" name="arrow-drop left-circle"></ion-icon>  
// <span>${item.inCart}</span>
// <ion-icon class="increase" name="arrow-drop left-circle"></ion-icon>
// </div>




// // object to store items
// const item = {
//     name:"shirt",
//     price:50,
//   }
  
// // sopping card stores an array of items
// let card = [item];

// // add item to card
// function add(item){
// card.push({name : n, price: p})
// }

 
// let card = [item];
// let numCard =1;



// add("water",1);
// card;




    
            // cartTotal.innerHTML += `
            // <p>Total</p>
            // `
    
    

    // let cartContent = document.createElement('p');
    // cartContent.setAttribute('id','content');
    // document.getElementById('content').innerHTML = "Hello";
    // cartElement.appendChild(cartContent);

    // console.log(cartItems);

    // `product name: ${products[0].name}`;
