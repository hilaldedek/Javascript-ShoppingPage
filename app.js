
const shippingCost=20;
const shippingCostFree=150;
const cart=document.querySelector(".ul");
const cartList=[];
const nameList=[];
var nameListCounter=-1;
var total=0;


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
        nameListCounter++;
        console.log("plus button is clicked");
        event.target.parentElement.previousElementSibling.children[0].innerText++;
        const name=event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
        const total1=event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText
        total+=Number(total1);
        console.log(total);
        cartList.push(name);

        if(nameList.length==0){
            nameList.push(name);
                }
                else{
                    while(nameList.indexOf(name)==-1){
                        nameList.push(name);
                    }
                }
        console.log(nameList);
        nameListCounter=nameList.length;
        console.log(nameListCounter);
      
       do{
            const a= event.target.parentElement.previousElementSibling.children[0].innerText;
            const cartP=document.createElement("p");
            cartP.innerText=a;
             const cartH4=document.createElement("h4");
            
             const cartLi=document.createElement("li");
             const pTextNode=document.createTextNode(name);
           cartH4.appendChild(pTextNode);
            cartLi.appendChild(cartH4);
            cartLi.appendChild(cartP);
            cart.appendChild(cartLi);
       }while(nameListCounter<nameList.length);
       
        
        
        console.log(cartList);
        
    }
    else if(event.target.classList.contains("remove")){
        console.log("remove button is clicked");
    }
    else{
        console.log("other element is clicked");
    }
})


