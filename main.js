 async function getProducts(){
const response = await fetch (`https://dummyjson.com/products`);
const data = await response.json();
const products = data.products;
const result=products.map(function (ele){
    return`
    <div>
    <h2> ${ele.title}</h2>
    <img src="${ele.thumbnail}"/>
    <span> ${ele.price}</span>
    </div>
    
    
    `;
} 
).join(``);
document.querySelector(".products-section .row").innerHTML=result;
}
getProducts();