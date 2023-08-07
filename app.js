const shippingCost=20;
const shippingCostFree=150;
const cart=document.querySelector(".ul");
const cartList=[];
// console.log(document.querySelector(".plus").parentElement.parentElement.previousElementSibling.previousElementSibling.innerText);
// console.log(document.querySelector(".minus").parentElement.parentElement.previousElementSibling.previousElementSibling.innerText);

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
        if(event.target.parentElement.nextElementSibling.children[0].innerText!=1){
            event.target.parentElement.nextElementSibling.children[0].innerText--;
            const name2=document.querySelector(".minus").parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
            var x=cartList.indexOf(name2);
            const y=cartList.splice(x,1);
            console.log(cartList);
        }
        else{
            if(confirm("product will be removed?")){
                
            }
        }
    }
    else if(event.target.classList.contains("plus")){
        console.log("plus button is clicked");
        event.target.parentElement.previousElementSibling.children[0].innerText++;
        const name=event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
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
        console.log(cartList);
        
    }
    else if(event.target.classList.contains("remove")){
        console.log("remove button is clicked");
    }
    else{
        console.log("other element is clicked");
    }
})