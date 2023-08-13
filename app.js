
const shippingCost=20;
const shippingCostFree=150;
const cart=document.querySelector(".ul");
const cartList=[];
const nameList=[];
var nameListCounter=0;
var counter=-1;
var total=0;
var ctr=0;
var urunctr=0;
const totalCost=document.getElementById("total");
window.addEventListener("load",()=>{
    localStorage.setItem("shippingCost",shippingCost);
    localStorage.setItem("shippingCostFree",shippingCostFree);

    sessionStorage.setItem("shippingCost",shippingCost);
    sessionStorage.setItem("shippingCostFree",shippingCostFree);
});
const alertP=document.getElementById("alert");
const alertMessage=document.createElement("p");
if(nameList.length==0){
            alertMessage.innerText="SEPETİNİZDE ÜRÜN YOK"
            alertP.appendChild(alertMessage);
        }
const productsDiv= document.querySelector(".products");
productsDiv.addEventListener("click",(event)=>{
    ctr=0;
    if(event.target.classList.contains("minus")){
        console.log("minus btn clicked");
        const name2=event.target.parentElement.parentElement.parentElement.children[0].innerText;
        const total2=event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText;

        if(event.target.parentElement.nextElementSibling.children[0].innerText==0){
           alert("sepetinizde böyle bir ürün yoktur.");
        }
        else if(event.target.parentElement.nextElementSibling.children[0].innerText==1){
            if(confirm(`${name2} will be removed?`)){
                    event.target.parentElement.nextElementSibling.children[0].innerText--;
                    var x=cartList.indexOf(`${name2}`);
                    delete cartList[x];
                    const deleteUrun=document.getElementById(`delete${name2}`);
                    deleteUrun.remove();
                    total -= total2;
                    console.log(total);
                    totalCost.innerText=`${total}$`;
                    for(let i=0;i<nameList.length;i++){
                        var y=nameList.indexOf(`${name2}`);
                        delete nameList[y];
                    }
                    }

        }
        else{
            event.target.parentElement.nextElementSibling.children[0].innerText--;
            console.log(name2);
            var x=cartList.indexOf(`${name2}`);
            // console.log(x);
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
            totalCost.innerText=`${total}$`;
            console.log(total);
        }
    }
    else if(event.target.classList.contains("plus")){
        console.log("plus button is clicked");
        alertMessage.remove();
        event.target.parentElement.previousElementSibling.children[0].innerText++;
        const name=event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
        const total1=event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText
        total+=Number(total1);
        totalCost.innerText=`${total}$`;
        console.log(total);
        cartList.push(name);
        const a= event.target.parentElement.previousElementSibling.children[0].innerText;
        ctr=0;
        if(nameList.length==0){
            nameList.push(name);
            console.log("namelist",nameList);
            const cartLi1=document.createElement("li");
            const cartH1=document.createElement("h3");
            const cartH2=document.createElement("h5");
            cartLi1.setAttribute('id',`delete${name}`)
            cartH2.setAttribute('id',`${name}`);
            cartLi1.setAttribute("class","d-flex justify-content-center");
            cartH2.setAttribute("class","fs-3 mx-1")
            cartH1.innerText=name;
            cartH2.innerText=a;
            cartLi1.appendChild(cartH1);
            cartLi1.appendChild(cartH2);
            cart.appendChild(cartLi1);
        }
        else if(nameList.indexOf(name)==-1){
            nameList.push(name);
            console.log("namelist",nameList);
            const cartLi2=document.createElement("li");
            const cartH3=document.createElement("h3");
            const cartH4=document.createElement("h5");
            cartLi2.setAttribute('id',`delete${name}`)
            cartH4.setAttribute('id',`${name}`);
            cartLi2.setAttribute("class","d-flex justify-content-center");
            cartH4.setAttribute("class","fs-3")
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
            // console.log(ctr);
            const urun=document.getElementById(`${name}`);
            urun.innerText=ctr;
            
        }     
        console.log("CARTlist",cartList);
        
    }
    else if(event.target.classList.contains("remove")){
        var b=event.target.parentElement.previousElementSibling.children[1].children[0];
        const name3=event.target.parentElement.parentElement.children[0].innerText;
        const total3=event.target.parentElement.parentElement.children[1].children[0].innerText;
        if(confirm(`${name3} will be removed?`)){
            console.log("remove button is clicked");
            for(let j=0;j<cartList.length;j++){
                if(cartList[j]==`${name3}`){
                        total-=total3;
                        console.log(total);
                    }
            }
            for(let i=0;i<cartList.length;i++){
                var y=cartList.indexOf(`${name3}`);
                delete cartList[y];
            }
            console.log(total);
            totalCost.innerText=`${total}$`;
            console.log("CARTlist",cartList);
            console.log("namelist",nameList);
            b.innerText=0;
            const deleteUrun2=document.getElementById(`delete${name3}`);
            deleteUrun2.remove();
        }
        // for(let i=0;i<nameList.length;i++){
        //     if(typeof cartList[i]===undefined){
        //         urunctr++;
        //     }
        // }
        // console.log(urunctr);
        // if(urunctr==nameList.length){
        //     const alertMessage2=document.createElement("p");
        //     alertMessage2.innerText="SEPETİNİZDE ÜRÜN YOK"
        //     alertP.appendChild(alertMessage2);
        // }
    }
    else{
        console.log("other element is clicked");
        
    }
})


