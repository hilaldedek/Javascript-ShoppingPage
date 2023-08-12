
const shippingCost=20;
const shippingCostFree=150;
const cart=document.querySelector(".ul");
const cartList=[];
const nameList=[];
var nameListCounter=0;
var counter=-1;
var total=0;
var buffer=0;
var ctr=0;

window.addEventListener("load",()=>{
    localStorage.setItem("shippingCost",shippingCost);
    localStorage.setItem("shippingCostFree",shippingCostFree);

    sessionStorage.setItem("shippingCost",shippingCost);
    sessionStorage.setItem("shippingCostFree",shippingCostFree);
});
const productsDiv= document.querySelector(".products");
productsDiv.addEventListener("click",(event)=>{
    ctr=0;
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
                    const deleteUrun=document.getElementById(`delete${name2}`);
                    deleteUrun.remove();
                    }

        }
        else{
            event.target.parentElement.nextElementSibling.children[0].innerText--;
            console.log(name2);
            var x=cartList.indexOf(`${name2}`);
            console.log(x);
            delete cartList[x];
            const urun1=document.getElementById(`${name2}`);
            for(let i=0;i<cartList.length;i++){
                if(cartList[i]==name2){
                    ctr++;
                }
            }
            urun1.innerText=ctr;

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
        // console.log(total);
        cartList.push(name);
        
        buffer=nameList.length;
        const a= event.target.parentElement.previousElementSibling.children[0].innerText;
        // console.log(document.querySelectorAll(".plus").);
        ctr=0;
        if(nameList.length==0){
            nameList.push(name);
            const cartLi1=document.createElement("li");
            const cartH1=document.createElement("h3");
            const cartH2=document.createElement("h5");
            cartLi1.setAttribute('id',`delete${name}`)
            cartH2.setAttribute('id',`${name}`);
            cartH1.innerText=name;
            cartH2.innerText=a;
            cartLi1.appendChild(cartH1);
            cartLi1.appendChild(cartH2);
            cart.appendChild(cartLi1);
        }
        else if(nameList.indexOf(name)==-1){
            nameList.push(name);
            const cartLi2=document.createElement("li");
            const cartH3=document.createElement("h3");
            const cartH4=document.createElement("h5");
            cartLi2.setAttribute('id',`delete${name}`)
            cartH4.setAttribute('id',`${name}`);
            cartH3.innerText=name;
            cartH4.innerText=a;
            cartLi2.appendChild(cartH3);
            cartLi2.appendChild(cartH4);
            cart.appendChild(cartLi2);
        }
        else{
            for(let i=0;i<cartList.length;i++){
                if(cartList[i]==name){
                    ctr++;
                }
            }
            console.log(ctr);
            const urun=document.getElementById(`${name}`);
            urun.innerText=ctr;
            
        }     
        console.log(cartList);
        
    }
    else if(event.target.classList.contains("remove")){
        console.log("remove button is clicked");
        var b=event.target.parentElement.previousElementSibling.children[1].children[0];
        const name3=event.target.parentElement.parentElement.children[0].innerText;
        console.log(name3);
        console.log("b",b);
        b.innerText=0;
        const deleteUrun2=document.getElementById(`delete${name3}`);
        deleteUrun2.remove();
    }
    else{
        console.log("other element is clicked");
        
    }
})


