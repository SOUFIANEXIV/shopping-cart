

const cartShop= document.querySelector('.cart-shop');
const cartBox=document.querySelector('.cart-box');
const closeCart=document.querySelector('.fa-xmark');

    cartShop.addEventListener('click',()=>{
    cartBox.classList.add('active')});


closeCart.addEventListener('click',()=>{
cartBox.classList.remove('active')});
//=================================//

let products=[{
    id:0,
    title:"lorem1",
    price:100,
    imgserc:'/img/product1.jpg',
    inCart:0,
},{
    id:1,
    title:"lorem2",
    price:20,
    imgserc:'/img/product2.jpg',
    inCart:0,
},{
    id:2,
    title:"lorem3",
    price:50,
    imgserc:'/img/product3.jpg',
    inCart:0,
},{
    id:3,
    title:"lorem4",
    price:520,
    imgserc:'/img/product4.jpg',
    inCart:0,
},{
    id:4,
    title:"lorem5",
    price:70,
    imgserc:'/img/product5.jpg',
    inCart:0,
},{
    id:5,
    title:"lorem6",
    price:77,
    imgserc:'/img/product6.jpg',
    inCart:0,
},{
    id:6,
    title:"lorem1",
    price:22,
    imgserc:'/img/product7.jpg',
    inCart:0,
},{
    id:7,
    title:"lorem1",
    price:90,
    imgserc:'/img/product8.jpg',
    inCart:0,
}]

const productEL=document.querySelector('.all-product');
  function renderProduct(){
products.forEach((product)=>{
    productEL.innerHTML +=`  <div class="product-box">
    <img src="${product.imgserc}" class="product-img">
    <div class=product-title>${product.title}</div>
    <div class="items-box">
        <div class="price">${product.price}$</div>
        <i class="fa-solid fa-cart-shopping"></i>
</div>
   

</div>
    `
})
 
  
    }
    renderProduct(); 
    //============//
    // add cart//
    let carts=document.querySelectorAll('.fa-cart-shopping');
    
    for(let i=0; i < carts.length;i++){
      carts[i].addEventListener('click',()=>{
cartNumbers(products[i]);
total(products[i]);
      })
    }

function onLoadCartNumbers(){
  
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.span').textContent = productNumbers; 
    }else {
    }
}

//==================//






    function cartNumbers(product) 
    {
     
        let productNumbers=localStorage.getItem('cartNumbers');
    
        productNumbers=parseInt(productNumbers);

        if(productNumbers){
         
        localStorage.setItem('cartNumbers',productNumbers + 1); 
            document.querySelector('.span').textContent = productNumbers + 1; 
        }else {
            localStorage.setItem('cartNumbers',+ 1);   
            document.querySelector('.span').textContent = 1; 

        }
    setIems(product);
    }





function setIems(product){

let cartItems=localStorage.getItem('products');
cartItems=JSON.parse(cartItems);

if(cartItems != null ){

    if(cartItems[product.id] == undefined){
        cartItems={
            ...cartItems,[product.id]:product
        }
    }
    cartItems[product.id].inCart += 1;
 }  else{
    product.inCart=1;

  cartItems={
        [product.id]:product 

 }
}
   localStorage.setItem("products",JSON.stringify(cartItems));

   removeCartItems(); 
 
}

//==========//
function total(product){
   let cartCost= localStorage.getItem('total');


if (cartCost != null){

   cartCost=parseInt(cartCost); 
localStorage.setItem('total',cartCost + product.price);



    
}

else{
    localStorage.setItem('total',product.price);
}

}



////////////////
function displayCart(){
    let cartItems =localStorage.getItem('products');
    cartItems=JSON.parse(cartItems);
    let cartProduct=document.querySelector('.cart-all')
if(cartItems && cartProduct){
  cartProduct.innerHTML='';
  Object.values(cartItems).map(item =>{
    cartProduct.innerHTML +=`
 
            <div class="cart-product">
           
    
            
            <img src="${item.imgserc}" class="box-img">
 
            <div class="casse">
            
                        <div class="box-title">${item.title}</div>
                      <div class="btn">
                 <button class="btn-1"><i onclick="decrement(${item.id})" class="fa-solid fa-minus"></i></button>
                <div class="quantity">${item.inCart}</div>
                 <button class="btn-2"><i  onclick="increment(${item.id})"class="fa-solid fa-plus"></i></button>
  <span class="item-price">${item.price *item.inCart}$</span>
               <i class="fa-solid fa-trash-can"></i>  </div>  
                       
             
          

            </div>`
           
       
         

        })


    
}

}

function displayTotal(){
   let toto= localStorage.getItem('total');
    let totales =document.querySelector('.coco')
  ;
    toto == null ? totales.innerHTML=(0+'$') : totales.innerHTML=( toto + '$')


}
   
    var removeItems=document.getElementsByClassName('fa-trash-can');
    console.log(removeItems);
    for( var i=0;i<removeItems.length; i++){
        var button=removeItems[i];
        button.addEventListener('click',removeItems);
       
    }
function removeCartItems(e){
    var button=event.target;
    buttonClicked.parentElement.remove();
}

 



displayTotal();
  displayCart();

    onLoadCartNumbers();




