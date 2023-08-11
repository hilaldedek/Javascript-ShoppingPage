
const shippingCost=20;
const shippingCostFree=150;
const cart=document.querySelector(".ul");
const cartList=[];
const nameList=[];
var nameListCounter=0;
var counter=-1;
var total=0;
var buffer=0;

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
        console.log("plus button is clicked");
        event.target.parentElement.previousElementSibling.children[0].innerText++;
        const name=event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
        const total1=event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText
        total+=Number(total1);
        console.log(total);
        cartList.push(name);
        buffer=nameList.length;
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
             const cartH4=document.createElement("h4");
            const cartH3=document.createElement("h3");
             const cartLi=document.createElement("li");

             //HATA BAŞLANGICI
             if(buffer==nameList.length){
                const pTextNode2=document.createTextNode(a);
                console.log("eşitiz");
                pTextNode2.innerText=a;
                console.log("a=",a);
                cartH3.appendChild(pTextNode2);
                console.log(a);
                
                
                
            }
            else if(buffer<nameList.length){
                counter++;
                console.log("girdim");
                const pTextNode=document.createTextNode(nameList[counter]);
                const pTextNode2=document.createTextNode(a);
                console.log("a=",a);
                cartH4.appendChild(pTextNode);
                cartH3.appendChild(pTextNode2);
            }
             
           
            cartLi.appendChild(cartH4);
            cartLi.appendChild(cartH3);
            cart.appendChild(cartLi);
            //HATA BİTİŞİ
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


