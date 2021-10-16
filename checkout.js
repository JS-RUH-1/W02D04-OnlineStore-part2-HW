// checkout page
function checkCost(){
    let cartCost = localStorage.getItem('totalCost');
    

    // display total price
    let checkTotal = document.querySelector('.check-total1 span')
    if(cartCost){
        cartCost = parseInt(cartCost);
    // console.log(typeof cartCost);
        cartCost= (cartCost*1.15).toFixed(2);
        checkTotal.innerHTML = `${cartCost} SR`;
    }
    else{
        checkTotal.innerHTML = `0 SR`;
    }

    // update cart number on checkout
    let cartNum = localStorage.getItem('cartNumbers');
    let cartSpan = document.querySelector('.badge-pill');

    if(cartNum){
        cartSpan.innerHTML =`${cartNum}`;
    }
    else{
        cartSpan.innerHTML =`0`;

    }
    // // update price if shipping 
    // let ship = document.querySelector("#ship");
    // // console.log(ship);
    // if(ship.checked){
    //     cartCost = (cartCost + 20);
    //     checkTotal.innerHTML = `${cartCost} SR`;
    // }
        // console.log(typeof cartCost);

    // let collect = document.querySelector("#collect");
    // const val = document.querySelector('input[name="ship"]:checked').value;

    // console.log(val);
    // if(collect.checked){
    //     cartCost = (cartCost + 20);
    //     checkTotal.innerHTML = `${cartCost} SR`;
    // }
    
    // var radios = document.forms["collectMethod"].elements["ship"];
    // for(var i = 0, max = radios.length; i < max; i++) {
    //     radios[i].onclick = function() {
    //         alert(this.value);
    // }

}

    


checkCost();


// validate form
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())


  function cartNumbers(){
    // console.log("product is" , product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    // console.log(productNumbers);
    
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }else{
        document.querySelector('.cart span').textContent = 0;
    }
    
}
cartNumbers();



