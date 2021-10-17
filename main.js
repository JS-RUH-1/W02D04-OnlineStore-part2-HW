let ship_cost = 0;
let total = 0;
let order_num = 1
function add_cart(id){
    let prod_img = id.parentNode.parentNode.querySelector("img").getAttribute("src");
    let prod_des = id.parentNode.parentNode.querySelector(".card-body").textContent;
    let prod_price = id.parentNode.parentNode.querySelector(".inline-blk").textContent;
    let prod = {"id":id.value, "img":prod_img, "descrip":prod_des, "price":prod_price, "qty":1}
    localStorage.setItem(id.value, JSON.stringify(prod))
    on_load()
}

function load_cart(){
    if(localStorage.length != 0){
        render()
    }else{
        document.getElementById("cart").innerHTML = "<h5 class='text-center pt-5'>No Items added</h5>"
    }
    on_load()
}


function render(){
    for(let i=0;i<localStorage.length; i++){
            let prodn = localStorage.key(i)
            let prodt = localStorage.getItem(prodn)
            let prodj = JSON.parse(prodt)
            document.getElementById("cart").innerHTML += 
            `<div id="prod-c${prodj.id}" class="card my-3">
                <div class="row g-0">
                    <div class="col-md-2">
                        <img class="img-fluid rounded-start p-img"  src="${prodj.img}" >
                    </div>
                    <div class="col-md-4 pt-4">
                        <div class="card-body">
                            <div class="card-text">
                            ${prodj.descrip}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 pt-4">
                        <div class="card-body">
                            <div id="prod-c${'prodj.id'}-p" class="card-text fw-bold text-end">
                            SAR ${prodj.price}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 pt-4">
                        <div class="card-body">
                            <div class="card-text">
                            <input class="form-control" type="number" id="${prodj.id}" onchange="chng_qty(this)" value="${prodj.qty}" min="1">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 pt-4">
                        <div class="card-body">
                            <div class="card-text text-end">
                            <button id="del" class="btn btn-danger btn-sm" onclick="del_prod(this)" value="${prodj.id}">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }
    cart_total()        
}

function cart_total(){
    for(let i=0; i<localStorage.length; i++){
        let prodn = localStorage.key(i)
        let prodt = localStorage.getItem(prodn)
        let prod_price = Number(JSON.parse(prodt).price)
        let prod_qty = Number(JSON.parse(prodt).qty)
        total += (prod_price*prod_qty)
    }
    document.getElementById("cart-total").innerHTML = 
        `<div class="col-md-2">
            Total: SAR ${total}<br>
            VAT: SAR ${(total*0.15).toFixed(2)}<br>
            Shipping: SAR ${ship_cost}<br>
            <b>Total: SAR ${total + (total*0.15) + ship_cost}</b>   
        </div>`
}

function chng_qty(idd){
    total = 0;
    let prodt = localStorage.getItem(idd.id)
    let prod = JSON.parse(prodt)
    prod.qty = idd.value
    localStorage.setItem(idd.id,JSON.stringify(prod))
    cart_total()
}

function delivery_opt(id){
    if(id.value == "shiping"){
        ship_cost = 35;
    }else{
        ship_cost = 0;
    }
    document.getElementById("cart-total").innerHTML = 
        `<div class="col-md-2">
            Total: SAR ${total}<br>
            VAT: SAR ${(total*0.15).toFixed(2)}<br>
            Shipping: SAR ${ship_cost}<br>
            <b>Total: SAR ${total + (total*0.15) + ship_cost}</b>   
        </div>`
}

function add_coupon(){
    let cop_code = document.getElementById("coupon").value
    let disc = 0;
    switch(cop_code){
        case "cd20":
            disc = total - (total * 0.20);
            break;
        case "cd35":
            disc = total - (total * 0.35);
            break;
        default:
            disc = total;
    }
    document.getElementById("cart-total").innerHTML = 
        `<div class="col-md-2">
            Total: SAR ${disc.toFixed(2)}<br>
            VAT: SAR ${(disc*0.15).toFixed(2)}<br>
            Shipping: SAR ${ship_cost}<br>
            <b>Total: SAR ${(disc + (disc*0.15) + ship_cost).toFixed(2)}</b>   
        </div>`
}

function del_prod(id){
    localStorage.removeItem(id.value);
    document.getElementById(`prod-c${id.value}`).style.display = "none"
    location.reload()
}

function on_load(){
    document.body.querySelector('sup').innerHTML = localStorage.length;   
}

function finish(id){
    id.parentNode.parentNode.innerHTML = 
    `<div class="container border border-success bg-success rounded-2 mt-5" style="min-height: 200px;">
        <h4 class="pt-4 text-white">Thank you for shopping with us.</h4>
        <h5 class="pt-4 text-white">Your order <b class="bg-warning text-dark">WZ001-${order_num}</b> has been received and under preparing.</h5>
    </div>`
    total = 0
    localStorage.clear()
}
