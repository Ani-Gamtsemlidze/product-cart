const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const countElement = document.getElementById("count")
let count = 0;
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
function photoChange () {
document.getElementById("img1").addEventListener("click", function(){
        document.getElementById("main-img1").style.display = "block";
        document.getElementById("main-img2").style.display = "none";
        document.getElementById("main-img3").style.display = "none";
        document.getElementById("main-img4").style.display = "none";
        
        
})
document.getElementById("img2").addEventListener("click", function(){
        document.getElementById("main-img2").style.display = "block";
        document.getElementById("main-img1").style.display = "none";
        document.getElementById("main-img3").style.display = "none";
        document.getElementById("main-img4").style.display = "none";
        
})
document.getElementById("img3").addEventListener("click", function(){
        document.getElementById("main-img3").style.display = "block";
        document.getElementById("main-img1").style.display = "none";
        document.getElementById("main-img2").style.display = "none";
        document.getElementById("main-img4").style.display = "none";

        
})
document.getElementById("img4").addEventListener("click", function(){
        document.getElementById("main-img4").style.display = "block";
        document.getElementById("main-img1").style.display = "none";
        document.getElementById("main-img2").style.display = "none";
        document.getElementById("main-img3").style.display = "none";
        
})
}
photoChange();

function photoChangeLight() {

    document.getElementById("light1").addEventListener("click", function(){
        document.getElementById("light-img1").style.display = "block";
        document.getElementById("light-img2").style.display = "none";
        document.getElementById("light-img3").style.display = "none";
        document.getElementById("light-img4").style.display = "none";
    })
    document.getElementById("light2").addEventListener("click", function(){
        document.getElementById("light-img2").style.display = "block";
        document.getElementById("light-img1").style.display = "none";
        document.getElementById("light-img3").style.display = "none";
        document.getElementById("light-img4").style.display = "none";
    })
    document.getElementById("light3").addEventListener("click", function(){
        document.getElementById("light-img3").style.display = "block";
        document.getElementById("light-img1").style.display = "none";
        document.getElementById("light-img2").style.display = "none";
        document.getElementById("light-img4").style.display = "none";
    })
    document.getElementById("light4").addEventListener("click", function(){
        document.getElementById("light-img4").style.display = "block";
        document.getElementById("light-img1").style.display = "none";
        document.getElementById("light-img2").style.display = "none";
        document.getElementById("light-img3").style.display = "none";
    })
}
photoChangeLight();

document.querySelector(".main-image").addEventListener("click", function(){
    document.querySelector(".light-box").style.display= "flex"
})

document.querySelector(".cancel").addEventListener("click", function(){
    document.querySelector(".light-box").style.display="none"
})





