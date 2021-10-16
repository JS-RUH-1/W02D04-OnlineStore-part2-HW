window.onload = function () {
  console.log("page is fully loaded");

  // animate back ground
  particlesJS("snowfall", {
    particles: {
      number: {
        value: 100,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 10,
        random: true,
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        straight: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
        },
      },
      modes: {
        push: {
          particles_nb: 12,
        },
      },
    },
  });

  // code to get ele from the homepage
  let selectedItems = JSON.parse(localStorage.getItem("selectedItems"));

  let total = 0;
  let alltotal = 0;
  let discount = 0;
  let delivery = 0;
  let vat = 0;
  // console.table(selectedItem);

  function getQuantity(item) {
    let itemQuantity = 0;
    for (let i = 0; i < selectedItems.length; i++) {
      const element = selectedItems[i];
      if (element.id == item.id) {
        itemQuantity++;
      }
    }
    return itemQuantity;
  }
  // function showed(item){

  //   for (let i = 0; i < selectedItems.length; i++) {
  //     for (let j = i; j < selectedItems.length; j++) {
  //       if(selectedItems[j].id==selectedItems[i])
  //       return true;
  //       else return false;
  //     }

  //   }
  // }

  for (let i = 0; i < selectedItems.length; i++) {
    const item = selectedItems[i];
    // showed(item)
    if (false) {
      continue;
    } else {
      // console.log(item);
      let newItem = document.createElement("li");
      document.getElementById(
        "itemsUl"
      ).innerHTML += `<li class="d-flex align-items-center list-group-item">
    <div class="cardLi ">
  <h2 class="m-5 ">${item.name}</h2>  
      <img
          src="${item.image}"
          alt="book img"
         class=" img-fluidLi img-thumbnail rounded d-block"
        />
        <h3 class="m-5">price: ${item.price}  quantity: ${getQuantity(
        item
      )} </h3>

        <button
        type="button"
        class="btn btn-danger mt-3 remove"
      >
        Delete
      </button>
</div>
      </li>`;
    }
  }
  let allRemoveButtons = document.getElementsByClassName("remove");
  console.log(allRemoveButtons);
  for (let i = 0; i < allRemoveButtons.length; i++) {
    allRemoveButtons[i].addEventListener("click", function () {
      selectedItems.splice(i, 1);
      localStorage.clear();
      localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
      location.reload();
    });
  }

  const coupons = ["js", "html", "css"];

  const CouponBtn = document.querySelector(".discountCouponsBtn");
  const coupon = document.querySelector("#discountCoupons");

  CouponBtn.onclick = function () {
    if (discount > 0) {
      alert("You have used a discount Coupon");
    } else if (coupon.value == "KSA") {
      discount = 50;
      alert("You got 50$ discount!");
      localStorage.setItem("discount", 50);
      location.reload();
    } else if (coupon.value == "Abdullah") {
      discount = 30;
      alert("You got 30$ discount!");
      localStorage.setItem("discount", 30);
      location.reload();
    } else alert("not valid coupon!");
  };
  let deliverySpan = document.getElementById("delivery");
  let collectChecked = document.querySelector("#collect");
  collectChecked.onclick = function () {
    document.getElementById("deliveryOptions").style.display = "none";
    if (0 == collectChecked.value) {
      localStorage.setItem("delivery", 0);
      deliverySpan.innerText = `The delivery cost is ` + 0;
      location.reload();
      alert("cost for delivery " + document.querySelector("#collect").value);
      console.log(document.querySelector("#collect").value);
    }
  };

  let fastChecked = document.querySelector("#fastD");
  let normalChecked = document.querySelector("#normalD");

  let deliveryChecked = document.querySelector("#deliveryradio");
  deliveryChecked.onclick = function () {
    let deliveryOptions = document.getElementById("deliveryOptions");
    deliveryOptions.style.display = "block";
    if (30 == deliveryChecked.value) {
      localStorage.setItem("delivery", 30);
      deliverySpan.innerText = `The delivery cost is ` + 30;

      alert(
        "cost for delivery " + document.querySelector("#deliveryradio").value
      );
    }
    fastChecked.onclick = function () {
      if (fastChecked.value == 45) {
        localStorage.setItem("delivery", 45);
        deliverySpan.innerText = `The fast delivery cost is ` + 45;
        location.reload();
        alert(
          "cost for fast delivery " + document.querySelector("#fastD").value
        );
      }
    };
    normalChecked.onclick = function () {
      if (normalChecked.value == 30) {
        localStorage.setItem("delivery", 30);
        deliverySpan.innerText = `The normal delivery cost is ` + 30;
        location.reload();
        alert(
          "cost for normal delivery " + document.querySelector("#normalD").value
        );
      }
    };
  };

  function getTotal(itemInCart = []) {
    let res = 0;
    itemInCart.forEach((item) => (res += item.price));

    return res;
  }

  function getVat(total) {
    return (vat = Math.ceil(total * 0.15));
  }

  total = getTotal(selectedItems);

  //  console.log(total);
  alltotal = 0;
  if (localStorage.getItem("discount") > 0) {
    discount = localStorage.getItem("discount");
  } else discount = 0;

  if (localStorage.getItem("delivery") > 0) {
    delivery = localStorage.getItem("delivery");
  } else delivery = 0;

  vat = getVat(total);

  document.getElementById("submit").onclick = function () {
    let res = Math.ceil(Math.random() * 1600) + "SA";
    alert("your order reference number is: " + res);
  };

  deliveryFromLS = localStorage.getItem("delivery");

  alltotal =
    parseInt(total) +
    parseInt(vat) -
    parseInt(discount) +
    parseInt(deliveryFromLS);

  let totalSpan = document.getElementById("price");
  totalSpan.innerText = `The total price is ` + total;
  let totalVatSpan = document.getElementById("priceVat");
  totalVatSpan.innerText = `The VAT is ` + vat;
  let discountSpan = document.getElementById("discount");
  discountSpan.innerText = `The discount you got is ` + discount;
  deliverySpan = document.getElementById("delivery");
  if (deliveryFromLS == null) {
    deliverySpan.innerText = `The delivery cost is ` + 0;
  } else deliverySpan.innerText = `The delivery cost is ` + deliveryFromLS;

  let allTotalSpan = document.getElementById("allTotal");
  if (isNaN(alltotal)) {
    allTotalSpan.innerText = `The total cost is `;
  } else allTotalSpan.innerText = `The total cost is ` + alltotal;
};
