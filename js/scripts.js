var generalTotal;

function SaveItem(item) {
	var name = item.parentNode.children[0].innerHTML;
	var price = item.parentNode.children[3].innerHTML;
	localStorage.setItem(name, price);
	alert('Your Total is: ' + generalTotal);

	doShowAll();

}

function RemoveItem(name) {
	console.log(name.parentNode.parentNode.children[0].innerHTML)
	var deleteItem = name.parentNode.parentNode.children[0].innerHTML;
	localStorage.removeItem(deleteItem);
	doShowAll();
}

function discount(location) {
	let dicountCode = location.parentNode.parentNode.children[0].children[0].value
	let discountValue = 50
	if (dicountCode == "amjad") {
		generalTotal = generalTotal - discountValue
		console.log(discountValue)
	} else {
		// Do nothing
		console.log(discountValue)
	}
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

function doShowAll(alter) {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr class='table-success'><th scope='col'>Item</th><th scope='col'>Price</th><th scope='col'>Delete</th></tr>\n";
		var priceList = []
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			priceList.push(parseFloat(localStorage.getItem(key)))
			list += "<tr class='table-success'><td class='table-success'>" + key + "</td>\n<td class='table-success'>" +
				localStorage.getItem(key) + "</td>\n<td class='table-success'>" +
				`<input type=button class="btn btn-danger" value="Delete" onclick="RemoveItem(this)"></td></tr>`;
		}
		if (priceList.length == 0) {
			if (document.getElementById('list') != null)
				document.getElementById('list').innerHTML = `<tr class='table-success'><td class='table-success'><div class="alert alert-warning" role="alert">
			You're Cart Is 
		  </div>
		  </td>\n<td class='table-success'><div class="alert alert-danger" role="alert">
		  Empty
		  </div>
		</td></tr>\n`;
		} else {

			let total = priceList.reduce(function (acc, val) {
				return (acc + val);
			})

			let vat = total * 0.15;

			generalTotal = total + vat;
			console.log("inside display "+generalTotal)
			document.getElementById('cart').innerHTML = `Cart(${localStorage.length})`;

			if (document.getElementById('list') != null)

				document.getElementById('list').innerHTML = list + `<h4>VAT: ${vat}</h4>` +
				`<h4>Total excluve VAT: ${generalTotal - vat}</h4>` +
				`<h4>Total including VAT : ${generalTotal}</h4>
		<br>
		<div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Coupon Discount %" aria-label="First name">
    </div>
    <div class="col">
        <button type="button" onclick="discount(this)" class="btn btn-secondary">Apply Coupon </button>
    </div>
  </div>
  <br>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
  delivery
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
  collection
  </label>
</div><select class="form-select" aria-label="Default select example">
  <option selected>different delivery options</option>
  <option value="1">Aramix</option>
  <option value="2">SMSA</option>
  <option value="3">Zajil</option>
</select>
` +
				`
<br>
<button type="button" onclick="ceckOut()" class="btn btn-primary">Check Out</button>

		`;

		}

	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}


function ceckOut() {
	let referenceNumber = Math.random();

	alert('You Placed Youre Order Number is #' + referenceNumber);
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	} else {
		return false;
	}
}