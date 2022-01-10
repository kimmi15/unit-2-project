document.querySelector("#h").addEventListener("click",home);

function home() {
  window.location.href = "home.html";
}

document.querySelector("header>div>div").addEventListener("click",shop);

function shop() {
  
    window.location.href = "womenProduct.html";
}

var data = [
    {
      
      name: "T-shirt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR814IQh75wrTQC_I8TNpM1ltQcQVg9VOwqCg&usqp=CAU",
      price: 33
    },
    {
      
      name: "T-shirt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR814IQh75wrTQC_I8TNpM1ltQcQVg9VOwqCg&usqp=CAU",
      price: 33
    },
    {
      
      name: "T-shit",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR814IQh75wrTQC_I8TNpM1ltQcQVg9VOwqCg&usqp=CAU",
      price: 33
    },
    {
      
        name: "T-shit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR814IQh75wrTQC_I8TNpM1ltQcQVg9VOwqCg&usqp=CAU",
        price: 33000
      }
      
  ]

    localStorage.setItem("pay",JSON.stringify(data))

     var main= document.querySelector("main");

     var total=0;

     data.map(add)

     function add(elem)
     {
     var div = document.createElement("div");
     main.append(div);
     
     var ig = document.createElement("img");
     ig.setAttribute("src",elem.image)
     var head = document.createElement("p");
         head.textContent=elem.name;
         head.style.fontWeight="bold";
         head.style.fontSize="10px";
     var  des = document.createElement("p");
     des.innerHTML="$"+elem.price;

     var div2 = document.createElement("div")

     var rmv = document.createElement("button")
     rmv.innerHTML="Remove"

     div2.append(rmv)
    
     div.append(ig,head,des,div2) 

     total=total + elem.price;

     
     }


     var T =document.createElement("h5");

     T.textContent= "Total = $" + total;
     T.style.fontSize ="17px"
     

     var box = document.querySelector("#t");

     box.append(T)

     document.querySelector("#out").addEventListener("click",checkout)

     function checkout()
     {
         window.location.href = "payment.html"
     }

     document.querySelector("button").addEventListener("click",rmv)

     function rmv(index)
     {
             data.splice(index,1);
     }