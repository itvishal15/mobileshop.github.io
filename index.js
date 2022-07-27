const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const product = [
    {
        id : 1,
        title: "APPLE iPhone 13 Max Pro",
        price:80000,
        img:"titan.jpg",
        colors:[
            {
                code:"iphone13.jpg",
                img:"iphone13.jpg",
            },
            {
                code:"titan.png",
                img:"iphone13.jpg",
            },
        ],
    },
    {
        id : 2,
        title: "Samsung",
        price:30000,
        img:"samsung.jpg",
        colors:[
            {
                code:"samsung.jpg",
                img:"samsung.jpg",
            },
            {
                code:"samsung.png",
                img:"samsung.png",
            },
        ], 
    },
    {
        id : 3,
        title: "Oppo",
        price:18000,
        img:"oppo.jpg",
        colors:[
            {
                code:"oppo.jpg",
                img:"oppo.jpg",
            },
            {
                code:"oppo2.jpg",
                img:"opp2.jpg",
            },
        ],
    },
    {
        id : 4,
        title: "Redmi",
        price:13000,
        img:"redmi.jpg",
        colors:[
            {
                code:"redmi.jpg",
                img:"redmi.jpg",
            },
            {
                code:"redmi.jpg",
                img:"redmi.jpg",
            },
        ],
    },
    {
        id : 5,
        title: "VIVO",
        price:16000,
        img:"vivo.jpg",
        colors:[
            {
                code:"vivo.jpg",
                img:"vivo.jpg",
            },
            {
                code:"vivo.jpg",
                img:"vivo.jpg",
            },
        ],
    }
]

//Updating product page------>

let choosenProduct = product[0];
var currentProductImg = document.querySelector(".productImg");
var currentProductTitle = document.querySelector(".productTitle");
var currentProductPrice = document.querySelector(".productPrice");
var currentProductColors = document.querySelectorAll(".color");
var currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", () =>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = product[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent =  choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index)=>{
            color.src = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


//  Close and open functionality for payment option

var productButton = document.querySelector(".productBtn");
var payment = document.querySelector(".payment");
var close1 = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
});

    close1.addEventListener("click", ()=>{
        payment.style.display = "none";
    });

    



// Creating cart in html

var close2 = document.querySelector(".cartClose");
var cartIcon = document.querySelector(".cartImage");
var cartButton = document.querySelector(".cartBtn");
 var cart = document.querySelector(".cartContainer");
 var cartIndata = document.querySelector(".cartInData");
 var cartData = document.getElementById('navSpan');

    cartIcon.addEventListener("click", ()=>{
       if(parseInt(cartData.innerHTML) == 0){
        alert('Your Cart is empty');
        }
    });
 
let x = 0;
cartButton.addEventListener("click", ()=>{
    cartData.innerHTML = ++x;
});

//  Close and open functionality for cart option

cartIcon.addEventListener("click", ()=>{
    cart.style.display = "flex";
});

close2.addEventListener("click", ()=>{
    cart.style.display = "none";
});


var cartItem = document.querySelector('.cartProducts');
// var productContainer = document.querySelector('.cartproduct');

var total_amount = document.querySelector('.ctotal')
var itemval = document.getElementById('cartInput');
var itemPrice = document.querySelector('.productPrice');
var cartPrice = document.querySelector('.cprice');
var basketTotal = document.querySelector('.bascketTotal');

const decreaseNum = () =>{
    if(itemval.value <= 0){
        itemval.value = 0;
        cartPrice.innerHTML = 0;
         total_amount.innerHTML = 0;
         basketTotal.innerHTML = parseInt(total_amount.innerHTML);
    }else{
        itemval.value = parseInt(itemval.value) - 1;
        cartPrice.innerHTML = parseInt(cartPrice.innerHTML) - parseInt(itemPrice.innerHTML);
         total_amount.innerHTML = parseInt(cartPrice.innerHTML);
         basketTotal.innerHTML = parseInt(total_amount.innerHTML);
    }
}
const increaseNum = () =>{
    itemval.value = parseInt(itemval.value) + 1;
    cartPrice.innerHTML = parseInt(cartPrice.innerHTML) + parseInt(itemPrice.innerHTML);
    total_amount.innerHTML = parseInt(cartPrice.innerHTML);
    basketTotal.innerHTML = parseInt(total_amount.innerHTML);
}


//  Adding Elements to cart

var currentCartImg = document.querySelector(".cartImg");
var currentCartTitle = document.querySelector(".cartSTitle");
var currentCartPrice = document.querySelector(".cprice");
var currentCartQuantity = document.querySelector(".cartInput");

choosenProduct = product[0];
menuItems.forEach((item, index)=>{
    choosenProduct = product[index];
    cartButton.addEventListener("click", ()=>{
        // if(parseInt(cartData.innerHTML) == 0){
        //     cartIndata.innerHTML= "Add to Cart";
        // }
        currentCartImg.src = choosenProduct.img;
        currentCartTitle.innerHTML = choosenProduct.title;
        currentCartPrice.innerHTML = choosenProduct.price;
    });
});








