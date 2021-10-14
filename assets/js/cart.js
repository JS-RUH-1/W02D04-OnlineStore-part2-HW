document.getElementById("status").style.visibility = "hidden";
document.getElementById("adressdiv").style.visibility = "hidden";
document.getElementById("carttotal").innerHTML =
  localStorage.getItem("cartCount");

//Show Cart Items
document.getElementById("product-div").innerHTML =
  // for all product we check if the item is null we give it defult value of ""
  '  <li class="list-group-item d-flex justify-content-between lh-condensed">' +
  "<div>" +
  ' <h6 class="my-0">' +
  (localStorage.getItem("item-1") != null
    ? localStorage.getItem("item-1")
    : "") +
  "</h6>" +
  "</div>" +
  '<span class="text-muted">' +
  (localStorage.getItem("item-1") != null
    ? parseInt(localStorage.getItem("counter-1")) *
      parseInt(localStorage.getItem("price-1"))
    : "") +
  "</span>" +
  "</li>" +
  ' <li class="list-group-item d-flex justify-content-between lh-condensed">' +
  "<div>" +
  ' <h6 class="my-0">' +
  (localStorage.getItem("item-2") != null
    ? localStorage.getItem("item-2")
    : "") +
  "</h6>" +
  "</div>" +
  '<span class="text-muted">' +
  (localStorage.getItem("item-2") != null
    ? parseInt(localStorage.getItem("counter-2")) *
      parseInt(localStorage.getItem("price-2"))
    : "") +
  "</span>" +
  "</li>" +
  ' <li class="list-group-item d-flex justify-content-between lh-condensed">' +
  "<div>" +
  ' <h6 class="my-0">' +
  (localStorage.getItem("item-3") != null
    ? localStorage.getItem("item-3")
    : "") +
  "</h6>" +
  "</div>" +
  '<span class="text-muted">' +
  (localStorage.getItem("item-3") != null
    ? parseInt(localStorage.getItem("counter-3")) *
      parseInt(localStorage.getItem("price-3"))
    : "") +
  "</span>" +
  "</li>" +
  "</li>" +
  ' <li class="list-group-item d-flex justify-content-between lh-condensed">' +
  "<div>" +
  ' <h6 class="my-0">' +
  (localStorage.getItem("item-4") != null
    ? localStorage.getItem("item-4")
    : "") +
  "</h6>" +
  "</div>" +
  '<span class="text-muted">' +
  (localStorage.getItem("item-4") != null
    ? parseInt(localStorage.getItem("counter-4")) *
      parseInt(localStorage.getItem("price-4"))
    : "") +
  "</span>" +
  "</li>" +
  "</li>" +
  ' <li class="list-group-item d-flex justify-content-between lh-condensed">' +
  "<div>" +
  ' <h6 class="my-0">' +
  (localStorage.getItem("item-5") != null
    ? localStorage.getItem("item-5")
    : "") +
  "</h6>" +
  "</div>" +
  '<span class="text-muted">' +
  (localStorage.getItem("item-5") != null
    ? parseInt(localStorage.getItem("counter-5")) *
      parseInt(localStorage.getItem("price-5"))
    : "") +
  "</span>" +
  "</li>" +
  "</li>" +
  ' <li class="list-group-item d-flex justify-content-between lh-condensed">' +
  "<div>" +
  ' <h6 class="my-0">' +
  (localStorage.getItem("item-6") != null
    ? localStorage.getItem("item-6")
    : "") +
  "</h6>" +
  "</div>" +
  '<span class="text-muted">' +
  (localStorage.getItem("item-6") != null
    ? parseInt(localStorage.getItem("counter-6")) *
      parseInt(localStorage.getItem("price-6"))
    : "") +
  "</span>" +
  "</li>";

/*---------------------------------------------- */

// hide / show delivrey company drop down list ;
function hide_show(listindex) {
  switch (listindex) {
    case "Collection":
      document.getElementById("status").style.visibility = "hidden";
      document.getElementById("adressdiv").style.visibility = "hidden";
      break;
    case "Delivery":
      document.getElementById("status").style.visibility = "visible";
      document.getElementById("adressdiv").style.visibility = "visible";
      break;
  }
  return true;
}
let vat1 =
  (localStorage.getItem("item-1") != null
    ? parseInt(localStorage.getItem("counter-1")) *
      parseInt(localStorage.getItem("price-1"))
    : 0) +
  (localStorage.getItem("item-2") != null
    ? parseInt(localStorage.getItem("counter-2")) *
      parseInt(localStorage.getItem("price-2"))
    : 0) +
  (localStorage.getItem("item-3") != null
    ? parseInt(localStorage.getItem("counter-3")) *
      parseInt(localStorage.getItem("price-3"))
    : 0) +
  (localStorage.getItem("item-4") != null
    ? parseInt(localStorage.getItem("counter-4")) *
      parseInt(localStorage.getItem("price-4"))
    : 0) +
  (localStorage.getItem("item-5") != null
    ? parseInt(localStorage.getItem("counter-5")) *
      parseInt(localStorage.getItem("price-5"))
    : 0) +
  (localStorage.getItem("item-6") != null
    ? parseInt(localStorage.getItem("counter-6")) *
      parseInt(localStorage.getItem("price-6"))
    : 0);

let total = (parseInt(vat1 * 1) + vat1 * 0.15).toFixed(2);
let disccount1 = 1;

// Diccount for now is static and equal 5% i could do it later using array of objects

function disscountChange() {
  let disscountChar = ["A", "B", "C"];

  let dissboxVlaue = document.getElementById("disbox").value;

  let disscountCondtion = disscountChar.some((elm) => {
    return elm == dissboxVlaue;
  });

  if (disscountCondtion) {
    document.getElementById("discountcode").style.color = "green";

    disccount1 = parseInt(total) * 0.05;
    document.getElementById("discountcode").innerHTML =
      "-" + disccount1.toFixed(2);

    document.getElementById("total").innerHTML = (total - disccount1).toFixed(
      2
    );
  } else {
    document.getElementById("discountcode").style.color = "black";
    document.getElementById("discountcode").innerHTML = 0.0;
    // document.getElementById("disc15").style.visibility = "hidden";
    // document.getElementById("dis1").style.visibility = "hidden";
    document.getElementById("total").innerHTML = total;
  }
}

function genreate1() {
  return "#ORNumber:" + Math.floor(Math.random() * 100000 + 1);
}

function showSucess() {
  Swal.fire({
    title: "Thank you for your purchase!",
    text: genreate1(),
    icon: "success",
    showConfirmButton: true,
    timer: "4000",
    didClose: () => {
      localStorage.clear();
      window.location.href = "products.html";
    },
  });
}

document.getElementById("vat1").innerHTML = (vat1 * 0.15).toFixed(2);
document.getElementById("total").innerHTML = total;

console.log(total);
