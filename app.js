
const shippingCost=20;
const shippingCostFree=150;
const cart=document.querySelector(".ul");
const cartList=[];
var total=0;

// console.log(document.querySelector(".plus").parentElement.parentElement.previousElementSibling.previousElementSibling.innerText);
// console.log(document.querySelector(".minus").parentElement.parentElement.previousElementSibling.previousElementSibling.innerText);
// console.log(document.querySelector(".minus").parentElement.parentElement.parentElement.children[1].children[0].innerText);

window.addEventListener("load",()=>{
    localStorage.setItem("shippingCost",shippingCost);
    localStorage.setItem("shippingCostFree",shippingCostFree);

    sessionStorage.setItem("shippingCost",shippingCost);
    sessionStorage.setItem("shippingCostFree",shippingCostFree);
});

const productsDiv= document.querySelector(".products");
productsDiv.addEventListener("click",(event)=>{
    if(event.target.classList.contains("minus")){
        console.log("minus btn clicked");
        const name2=event.target.parentElement.parentElement.parentElement.children[0].innerText;
        const total2=event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText;
        if(event.target.parentElement.nextElementSibling.children[0].innerText==0){
           console.log("sepetinizde böyle bir ürün yoktur.");
        }
        else if(event.target.parentElement.nextElementSibling.children[0].innerText==1){
            if(confirm("product will be removed?")){
                    event.target.parentElement.nextElementSibling.children[0].innerText--;
                    var x=cartList.indexOf(`${name2}`);
                    // console.log(x);
                    delete cartList[x];
                    }

        }
        else{
            event.target.parentElement.nextElementSibling.children[0].innerText--;
            console.log(name2);
            var x=cartList.indexOf(`${name2}`);
            console.log(x);
            delete cartList[x];
            console.log(cartList);
            total -= total2;
            console.log(total);
        }
    }
    else if(event.target.classList.contains("plus")){

        console.log("plus button is clicked");
        event.target.parentElement.previousElementSibling.children[0].innerText++;
        const name=event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
        const total1=event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText
        total+=Number(total1);
        console.log(total);
        // console.log(name);
        cartList.push(name);
                // if(cartList.length==0){
        //     cartList.push(name);
        // }
        // else{
        //     while(cartList.indexOf(name)==-1){
        //         cartList.push(name);
        //     }
        // }
      
       const cartP=document.createElement("p");
        const cartLi=document.createElement("li");
        const pTextNode=document.createTextNode(name);
        cartP.appendChild(pTextNode);
        cartLi.appendChild(cartP);
        cart.appendChild(cartLi);
        console.log(cartList);
        // console.log(cartLi);
    }
    else if(event.target.classList.contains("remove")){
        console.log("remove button is clicked");
    }
    else{
        console.log("other element is clicked");
    }
})
// console.log(cartList.length);
// for(let i=0; i<=cartList.length;i++){
//     const cartP=document.createElement("p");
//     const cartLi=document.createElement("li");
//     const pTextNode=document.createTextNode(cartList[i]);
//     console.log(cartLi);
//     cartP.appendChild(pTextNode);
//     cartLi.appendChild(cartP);
// }

