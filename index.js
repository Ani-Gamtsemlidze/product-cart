const countElement = document.getElementById("count")
let count = 0;
let num = document.getElementsByClassName("cart-num")
// countBox function is used for counting chosen items //
function countBox () { 
    document.getElementById("plus").addEventListener("click", function() {
        if(count < 5) {

            count ++
            countElement.innerText = count;
        }
    })
    document.getElementById("minus").addEventListener("click", function(){
        if( count > 0) {
            count --;
            countElement.innerText = count;
        }

    })
} 
countBox();
// cartBoxDisplay function is used for changing cart pop-out  //
function cartBoxDisplay (){

    // Check count at the beginning of the function

    document.querySelector(".cart").addEventListener("click", function(){
        document.querySelector(".cart-box").classList.toggle("active")

        if(count === 0){
            document.querySelector(".cart-box-body").style.display="none";
            document.querySelector(".empty-cart").style.display="block"
        } else if (count > 0) {
            document.querySelector(".empty-cart").style.display="none"
            document.querySelector(".cart-box-body").style.display="block";
            
        } 
    })
}

cartBoxDisplay();


//     document.querySelector(".cart").addEventListener("click", function(){
//     if(count === 0){
        
//             document.querySelector(".cart-box").style.display="block"
//             document.querySelector(".cart-box-body").style.display="none"
//     } else if (count > 0) {
//             document.querySelector(".cart-box").style.display="block"
//             document.querySelector(".empty-cart").style.display="none"
        
//              }
//     })
// }
// cartBoxDisplay();



let imageList = document.getElementsByClassName("image-list");
for (let i = 0; i < imageList.length; i++) {
    
    
    imageList[i].addEventListener("click", function(){
        removeClass()
        document.getElementsByClassName("image-list")[i].classList.add("active")
        let imageSrc = this.getAttribute("src");
        document.getElementById("main-img1").setAttribute("src", imageSrc)
    })
}



function removeClass(){
    for (let index = 0; index < imageList.length; index++) {
        
        document.getElementsByClassName("image-list")[index].classList.remove("active")

        
    }

}

let lightPhoto = document.getElementsByClassName("light-product")
for(let i =0; i < lightPhoto.length; i++) {
    lightPhoto[i].addEventListener("click", function(){
        removeLightClass()
        document.getElementsByClassName("light-product")[i].classList.add("active")
        let lightSrc = this.getAttribute("src");
        document.getElementById("light-img1").setAttribute("src", lightSrc)
    })
}

function removeLightClass(){
    for (let i = 0; i < lightPhoto.length; i++) {
        
        document.getElementsByClassName("light-product")[i].classList.remove("active")
    }

}


document.querySelector(".main-image").addEventListener("click", function(){
    document.querySelector(".light-box").style.display= "flex"
})

document.querySelector(".cancel").addEventListener("click", function(){
    document.querySelector(".light-box").style.display="none"
})
document.querySelector(".light-box").addEventListener("click", function(){
    document.querySelector(".light-box").style.display="none"
})
document.querySelector(".light-container").addEventListener("click", function(e){
    e.stopPropagation()
})
document.querySelector(".button").addEventListener("click", function(){
    document.querySelector(".cart-count").style.display="block"
    document.querySelector(".cart-count").innerText=count
})

document.querySelector(".cart").addEventListener("click", function(){
    document.querySelector("strong").textContent= count
})

let onePrice = 125
document.querySelector(".cart").addEventListener("click", function(){
        document.querySelector(".sum-price").innerText= "$" + count * onePrice + ".00"
    })



    document.querySelector(".delete").addEventListener("click", function(){
    let nums = count - 1 
    document.querySelector("strong").textContent= nums
    document.querySelector("#count").innerText= nums
    document.querySelector(".cart-count").innerText= nums
    document.querySelector(".sum-price").innerText= "$" + nums * onePrice + ".00"
})

document.querySelector(".menu-tab-mobile").addEventListener("click", function(){
    setTimeout(function(){

        document.querySelector(".menu-bar").style.display="block"
        document.querySelector(".background-shade-mobile").style.display="block"
    }, 500 )
})
document.querySelector(".close-bar").addEventListener("click", function(){
    document.querySelector(".menu-bar").style.display="none"
    document.querySelector(".background-shade-mobile").style.display="none"
}) 
document.querySelector(".background-shade-mobile").addEventListener("click", function(){
    document.querySelector(".menu-bar").style.display="none"
    document.querySelector(".background-shade-mobile").style.display="none"
})


