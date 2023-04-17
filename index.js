const countElement = document.getElementById("count")
let count = 0;
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
// cartBoxDisplay function is used for changing cart-boxes while clicking button  //


function cartBoxDisplay (){
    
    document.querySelector(".cart-box").classList.toggle("active")
       
        
        if(count === 0){
            document.querySelector(".cart-box-body").style.display="none";
            document.querySelector(".empty-cart").style.display="block"
        } else if (count > 0) {
            document.querySelector(".empty-cart").style.display="none"
            document.querySelector(".cart-box-body").style.display="block";
            
        } 
    }

document.querySelector(".cart").addEventListener("click", function(){
    cartBoxDisplay();

})



// this code is used for images-display on desktop//
let imageList = document.getElementsByClassName("image-list");
for (let i = 0; i < imageList.length; i++) {
    
    
    imageList[i].addEventListener("click", function(){
        removeClass()
        document.getElementsByClassName("image-list")[i].classList.add("active")
        let imageSrc = this.getAttribute("src");
        document.getElementById("main-img1").setAttribute("src", imageSrc)
    })
}

// this code is used for images slider in light-box //

let lightProducts = document.querySelectorAll(".light-product");
let nextClick = document.querySelector(".next");
let currentIndex = 0;

nextClick.addEventListener("click", function() {
  let nextSrc = lightProducts[currentIndex].getAttribute("src");
  document.querySelector(".light-img1").setAttribute("src", nextSrc);

  currentIndex++;
  if (currentIndex >= lightProducts.length) {
    currentIndex = 0;
  }
});

    document.querySelector(".previous").addEventListener("click", function(){
        let previousSrc = lightProducts[currentIndex].getAttribute("src");
        document.querySelector(".light-img1").setAttribute("src", previousSrc);
        currentIndex--;
    })

// nextClick.addEventListener("click", function() {
//   let nextSrc = lightProducts[currentIndex].getAttribute("src");
//   document.querySelector(".light-img1").setAttribute("src", nextSrc);

//   currentIndex++;
//   if (currentIndex >= lightProducts.length) {
//     currentIndex = 0;
//   }
// });



// remove class in images //
function removeClass(){
    for (let index = 0; index < imageList.length; index++) {
        
        document.getElementsByClassName("image-list")[index].classList.remove("active")

        
    }

}

// code fore light box- photos//
let lightPhoto = document.getElementsByClassName("light-product")
for(let i =0; i < lightPhoto.length; i++) {
    lightPhoto[i].addEventListener("click", function(){
        removeLightClass()
        document.getElementsByClassName("light-product")[i].classList.add("active")
        let lightSrc = this.getAttribute("src");
        document.querySelector(".light-img1").setAttribute("src", lightSrc)
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


//this code is for delete-button in cart box//

document.querySelector(".delete").addEventListener("click", function(){
    document.querySelector(".cart-box-body").style.display="none";
    document.querySelector(".empty-cart").style.display="block"
    document.querySelector(".cart-count").style.display="none"
    document.querySelector("#plus").addEventListener("click", function(){
        document.querySelector(".cart-count").style.display="block"
    })
    count = 0

    restart();

})


//code of restart //
function restart (){
    document.querySelector(".delete").addEventListener("click", function(){
        document.querySelector(".cart-count").innerText= 0
        document.querySelector("#count").innerText= 0
        document.querySelector("strong").innerText= 0
        document.querySelector(".sum-price").innerText=0
    })
}
restart();


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

// in this code strong and cart-count is equals while cliking in a plus sign//
document.querySelector("#plus").addEventListener("click", function(){
    document.querySelector(".cart-count").innerText= count
    document.querySelector("strong").innerText= count 
})
// in this code strong and cart-count is equals while cliking in a minus sign//
document.querySelector("#minus").addEventListener("click", function(){
    document.querySelector(".cart-count").innerText= count
    document.querySelector("strong").innerText= count 
})

document.querySelector(".count-box").addEventListener("click", function() {
    if(count == 0) {
        document.querySelector(".cart-box-body").style.display="none";
        document.querySelector(".empty-cart").style.display="block"
    } else if (count > 0) {
        document.querySelector(".cart-box-body").style.display="block";
        document.querySelector(".empty-cart").style.display="none"
    }
    document.querySelector(".sum-price").innerText= "$" + count * onePrice + ".00"
})



