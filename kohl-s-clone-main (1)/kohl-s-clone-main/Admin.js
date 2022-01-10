document.querySelector("#form").addEventListener("submit", addItem);
var prod = JSON.parse(localStorage.getItem("kohlShop")) || [];
function addItem(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var price = document.querySelector("#price").value;
  var type = document.querySelector("#select").value;
  var type2=document.querySelector("#selectCat").value;
  var image = document.querySelector("#img").value;
  var price2=document.querySelector("#price2").value


  var prodObj = {
    name: name,
    price: price,
    type: type,
    category: type2,
    image: image,
    price2:price2
  };

    prod.push(prodObj);
    localStorage.setItem("kohlShop", JSON.stringify(prod));
 
 
  }
document.querySelector("button").addEventListener("click", function () {
  window.location.href = "products.html";
});