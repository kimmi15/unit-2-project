var products = JSON.parse(localStorage.getItem("kohlShop"));
var cart =[]

products.map(function (elem) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", elem.image);
  var price = document.createElement("h2");
  price.textContent = elem.price;
  var name = document.createElement("p");
  name.textContent = elem.name;
var category=document.createElement("h2");
  category.textContent=elem.category;
 var type=document.createElement("p");
 type.textContent=elem.type;
 var price2 = document.createElement("h4");
 price2.textContent = elem.price2;
 var button = document.createElement("button");
 button.textContent = "add to cart";
 var button2=document.createElement("button");
 button2.textContent="delete";
 
 button2.addEventListener("click",deleteTask)


 button.addEventListener("click", function () {
   console.log(elem);
   addToCart(elem);
 });


  div.append(img, price,price2,name,button,button2);
  document.querySelector("#right").append(div);
});

function addToCart(elem){
    console.log(elem);
}
function deleteTask(){
        
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
}
