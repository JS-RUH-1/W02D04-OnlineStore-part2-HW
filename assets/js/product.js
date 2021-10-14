//When user click on item it sets the local storage with the item name
function setitem1(name) {
  localStorage.setItem("item-1", name);
  localStorage.setItem("price-1", "4999");
  localStorage.setItem(
    "cartCount",
    1 +
      (localStorage.getItem("cartCount") != null
        ? parseInt(localStorage.getItem("cartCount"))
        : 0)
  );
  localStorage.setItem(
    "counter-1",
    1 +
      (localStorage.getItem("counter-1") != null
        ? parseInt(localStorage.getItem("counter-1"))
        : 0)
  );
  console.log(
    localStorage.getItem("counter-1") != null
      ? parseInt(localStorage.getItem("counter-1"))
      : 0
  );

  document.getElementById("cart-products").innerHTML =
    localStorage.getItem("cartCount");

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Added Successfuly'
      })

}
function setitem2(name) {
  localStorage.setItem("item-2", name);
  localStorage.setItem("price-2", "3955");
  localStorage.setItem(
    "cartCount",
    1 +
      (localStorage.getItem("cartCount") != null
        ? parseInt(localStorage.getItem("cartCount"))
        : 0)
  );
  localStorage.setItem(
    "counter-2",
    1 +
      (localStorage.getItem("counter-2") != null
        ? parseInt(localStorage.getItem("counter-2"))
        : 0)
  );

  document.getElementById("cart-products").innerHTML =
    localStorage.getItem("cartCount");
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Added Successfuly'
      })
}
function setitem3(name) {
  localStorage.setItem("item-3", name);
  localStorage.setItem("price-3", "4555");
  localStorage.setItem(
    "cartCount",
    1 +
      (localStorage.getItem("cartCount") != null
        ? parseInt(localStorage.getItem("cartCount"))
        : 0)
  );
  localStorage.setItem(
    "counter-3",
    1 +
      (localStorage.getItem("counter-3") != null
        ? parseInt(localStorage.getItem("counter-3"))
        : 0)
  );

  document.getElementById("cart-products").innerHTML =
    localStorage.getItem("cartCount");
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Added Successfuly'
      })
}
function setitem4(name) {
  localStorage.setItem("item-4", name);
  localStorage.setItem("price-4", "455");
  localStorage.setItem(
    "cartCount",
    1 +
      (localStorage.getItem("cartCount") != null
        ? parseInt(localStorage.getItem("cartCount"))
        : 0)
  );
  localStorage.setItem(
    "counter-4",
    1 +
      (localStorage.getItem("counter-4") != null
        ? parseInt(localStorage.getItem("counter-4"))
        : 0)
  );

  document.getElementById("cart-products").innerHTML =
    localStorage.getItem("cartCount");
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Added Successfuly'
      })


}
function setitem5(name) {
  localStorage.setItem("item-5", name);
  localStorage.setItem("price-5", "255");
  localStorage.setItem(
    "cartCount",
    1 +
      (localStorage.getItem("cartCount") != null
        ? parseInt(localStorage.getItem("cartCount"))
        : 0)
  );
  localStorage.setItem(
    "counter-5",
    1 +
      (localStorage.getItem("counter-5") != null
        ? parseInt(localStorage.getItem("counter-5"))
        : 0)
  );

  document.getElementById("cart-products").innerHTML =
    localStorage.getItem("cartCount");
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Added Successfuly'
      })
}
function setitem6(name) {
  localStorage.setItem("item-6", name);
  localStorage.setItem("price-6", "599");
  localStorage.setItem(
    "cartCount",
    1 +
      (localStorage.getItem("cartCount") != null
        ? parseInt(localStorage.getItem("cartCount"))
        : 0)
  );
  localStorage.setItem(
    "counter-6",
    1 +
      (localStorage.getItem("counter-6") != null
        ? parseInt(localStorage.getItem("counter-6"))
        : 0)
  );
  document.getElementById("cart-products").innerHTML =
    localStorage.getItem("cartCount");
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Added Successfuly'
      })
}
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});