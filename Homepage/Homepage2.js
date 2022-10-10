

//POPOUT PAGE GUIDE

// guidePopout = document.getElementById("guideContainer");

var myScrollFunc = function() {

    var scrollDistance = window.scrollY;


        if ( scrollDistance > 700) {

            document.getElementById("guide").style.display = "block"; 

        } else {

            document.getElementById("guide").style.display = "none";
        }




};

window.addEventListener("scroll", myScrollFunc);





// WARPS

// PRODUCTS PAGE - PRO AUDIO WARP
function productWarpPro() {

    console.log("testing-Pro"); 
    window.location.href = "../ProductsPage/Products.html#proAudioSection" ; 
    return ; 

}; 

// PRODUCTS PAGE - HOME AUDIO WARP
function productWarpHome() {

    console.log("testing-Home"); 
    window.location.href = "../ProductsPage/Products.html#homeAudioSection" ; 
    return ;   

}; 

// LOGO HOME PAGE WARP
function warpHome() {

    console.log("testing-Logo-Warp");
    window.location.href = "../Homepage/Homepage2.html" ; 

}






// SLIDESHOW 


// NEXT / PREV EVENT LISTENER `CLICK` 
let slidePosition = 0 ; 


// const slides = total amount of divs with class name "slide"
const slides = document.getElementsByClassName("slide") ;
// const totalSlides = total amount of divs that have class name `slide`
const totalSlides = slides.length; 


document.getElementById("nextBtn").addEventListener("click", function() {swipeNext()}) ; 


document.getElementById("prevBtn").addEventListener("click", function() {swipePrev()}) ; 




// Function to add / remove `active` or `silent` class to say which img is visible. 
function slideSwipe() {

    // var active;
    // var silent;

    for (let slide of slides) {

        slide.classList.remove(`active`) ;
        slide.classList.add(`silent`) ; 

    }

    slides[slidePosition].classList.add(`active`) ;

}


// Function to make imgs loop between themselves.
function swipeNext() {

    console.log("next checkpoint"); 

    if (slidePosition === totalSlides - 1) {

        console.log(" next if test");
        slidePosition = 0 ; 

    } else {

        console.log("next else test");
        slidePosition++ ; 

    }

    console.log("next callback test");
    slideSwipe() 

}

// Function to make imgs loop between themselves.
function swipePrev() {

    console.log("prev checkpoint") ; 

    if (slidePosition === 0) {

        slidePosition = totalSlides - 1 ;

    } else {

        slidePosition-- ; 

    }

    slideSwipe() 
}






















































