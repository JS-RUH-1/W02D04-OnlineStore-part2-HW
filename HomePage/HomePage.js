window.localStorage.clear();

// animate back ground
particlesJS("snowfall",{
  "particles": {
    "number": {
      "value": 100
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "value": 10,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      }
    },
    "modes": {
      "push": {
        "particles_nb": 12
      }
    }
  }
});

let selectedItems = [];
let items = [];

class item {
  constructor(id, name, price, image, details = [], quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.details = details;
    this.quantity = quantity;
  }
  getQuantity(item) {
    return item.Counter;
  }
  reduceQuantity(item) {
    item.Counter--;
  }
  getImage(item) {
    return item.image;
  }

  getQuantity(item) {
    return item.Counter;
  }
  getPrice(item) {
    return item.price;
  }
  // getName(item) {
  //   return item.name;
  // }
  //function to load cards

  loadItems(items = []) {
    let container = document.getElementById("container");
    // let divs=document.createElement("div");
    // divs.setAttribute("id", "divId");
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      container.innerHTML +=
        `
      <div class="card ">
      <h2>${item.name}</h2>
          <img
            class="img1 img-fluid img-thumbnail rounded d-block"
            src="${this.getImage(item)}"
            alt="img"
          />
  
          <p>${item.details[0]}</p>
          <button
            data-toggle="modal"
            data-target="#Modal${i}"
            type="button"
            class="btn btn-primary btn-sm"
          >
            More Detalis
          </button>

          <button id=` +
        item.id +
        ` type="button" onclick="addToSelected(this)" class="btn btnA btn-warning btn-sm mt-1">
           quick Add to cart
          </button>
        </div>
      `;
    }
  }
}

// end of class item
let totalP=0;
let totalWVat=0;
function addToSelected(item) {
 
  selectedItems.push(items[item.id]);
  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
      totalP += items[item.id].price ;
      totalWVat=totalP*0.15+totalP;
    alert(
      "The total is " + totalP + " and the total with vat is " + totalWVat
    );
}
//function to load data
function load() {
  let item1 = new item(
    0,
    `Carhartt Sweatshirt`,
    50,
    "../images/Carhartt_Men.jpg",
    [
      "Machine Wash",
      "100% Cotton",
      "As soft as your favorite t-shirt",
      "Imported",
    ],
    10
  );
  let item2 = new item(
    1,
    "Champion Long Sleeve Hoodie",
    120,
    "../images/Champion_Mens_Long_Sleeve.jpg",
    ["100% Cotton", " As soft as your favorite t-shirt"],
    10
  );

  let item3 = new item(
    2,
    "Champion Pullover",
    250,
    "../images/Champion_Mens_Powerblend.jpg",
    ["50% Cotton, 50% Polyester", "Machine Wash"],
    10
  );

  let item4 = new item(
    3,
    "Nike Epic Training Jacket",
    350,
    "../images/Nike_Mens_Epic_Trainin_ Jacket.jpg",
    [" 100% Polyester", "Imported"],
    10
  );
  let item5 = new item(
    4,
    "Nike Legend Dri-Fit Shirt",
    450,
    "../images/Nike_Mens_Legend_Short.jpg",
    ["80% Cotton, 20% Polyester", "Machine Wash"],
    10
  );
  let item6 = new item(
    5,
    "PUMA Classics Logo Tee",
    250,
    "../images/PUMA_Classics.jpg",
    [
      "Machine Wash",
      "50% Cotton, 50% Polyester",
      " As soft as your favorite t-shirt",
      "Imported",
    ],
    10
  );
  let item7 = new item(
    6,
    "USA American Spartan Patriotic Shirt",
    25,
    "../images/T_shert.jpg",
    [
      "Imported",
      "50% Cotton, 50% Polyester",
      " As soft as your favorite t-shirt",

      "Machine Wash",
    ],
    10
  );
  let item8 = new item(
    7,
    "KLIEGOU T-Shirt",
    45,
    "../images/T_shert2.jpg",
    [" As soft as your favorite t-shirt", "50% Cotton, 50% Polyester"],
    10
  );

  items.push(item1, item2, item3, item4, item5, item6, item7, item8);

  item1.loadItems(items);
  loadModals(items);
  // handleAddBtn(items);

  return items;
}

// Function to create modals
function loadModals(items = []) {
  let modalsContiner = document.getElementById("modals");

  console.log("i am in load modals");
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    modalsContiner.innerHTML +=
      `
    <!-- Modal code -->
    <div
      class="modal fade"
      id="Modal${i}"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
    <!-- Modal content -->

      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="headerForModal${i}">${item.name}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul id=ul${i} type="square">
            
            </ul>
            <h6 class="text-center mt-3">price: ${item.price}$</h6>

            <a
              href="https://www.amazon.com/s?k=mens+clothes&rh=n%3A7141123011%2Cp_n_price%3A2661612011&nav_sdd=aps&pd_rd_r=9079cc9b-19a5-4d5e-9ab5-30fb5788d4dd&pd_rd_w=3xLbg&pd_rd_wg=HEJYB&pf_rd_p=320aebf6-ff00-4c44-a7f4-29ae7eafffb0&pf_rd_r=FM4CB230N5FNQ8TK8TQR&qid=1633537630&ref=sxts_sxts_ref_scx_alster_0"
            >
              <p class="text-center">Visit brand website</p>
            </a>
          </div>
          <div class="modal-footer">
          <button id=` +
      item.id +
      ` type="button" onclick="addToSelected(this)" class="btn btn-warning ">
           Add to cart
         </button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
`;
    let itemUl = document.getElementById(`ul${i}`);
    for (let i = 0; i < item.details.length; i++) {
      itemUl.innerHTML += `
      <li>${item.details[i]} </li>
    
    `;
    }
  }
}

// itemInCart = load();
//function to alert user after add item to cart
