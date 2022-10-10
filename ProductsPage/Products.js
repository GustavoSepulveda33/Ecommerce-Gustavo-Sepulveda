
// WARPS

function warpHome() {

    console.log("testing-Logo-Warp");
    window.location.href = "../Homepage/Homepage2.html" ; 

}


//POPOUT PAGE GUIDE

// guidePopout = document.getElementById("guideContainer");

var myScrollFunc = function() {

    var scrollDistance = window.scrollY;

    // console.log(scrollDistance); 

        // FIRST POP UP GUIDE `PRODUCTS ---- BACT TO TOP`
        if ( scrollDistance > 2000) {

            document.getElementById("guide").style.display = "block"; 

        } else {

            document.getElementById("guide").style.display = "none";
        } ; 


        // SECOND POP UP GUIDE `PREVIOUS SECTION`
        if ( scrollDistance > 6500) {

            document.getElementById("guide2").style.display = "block"; 

        } else {

            document.getElementById("guide2").style.display = "none";
        }




};

window.addEventListener("scroll", myScrollFunc);














// Fetch functions & Show More Functions

// Created templates for showMore() function and just used template for new products. 

// PROD 1
function showMore() {       

    // showMore() funtion activates (by clicking `learn more` button) `btn.onclick = function() that changes the display of the hidden section in each products slide to `block`.
    //      Simultanously changes `learn more` to `learn less` and changes it again. 


    // works off a counter, when you click the `learn more` once, it changes the counter and displays the hidden section.
    //     Click a second time and it will change the counter, equal to the if statement and reset the counter, the `learn more` text and hidding the section. 

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}


// PROD 2
function showMore1() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn1`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden2`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn1`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden2`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn1`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}

// PROD 3
function showMore2() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn2`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden3`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn2`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden3`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn2`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}

// PROD 4
function showMore3() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn3`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden4`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn3`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden4`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn3`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}


// PROD 5
function showMore4() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn4`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden5`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn4`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden5`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn4`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}

// PROD 6
function showMore5() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn5`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden6`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn5`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden6`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn5`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}


// PROD 7
function showMore6() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn6`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden7`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn6`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden7`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn6`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}


// PROD 8
function showMore7() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn7`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden8`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn7`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden8`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn7`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}


// PROD 9
function showMore8() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn8`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden9`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn8`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden9`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn8`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}


// PROD 10
function showMore9() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn9`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden10`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn9`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden10`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn9`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}


// PROD 11
function showMore10() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn10`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden11`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn10`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden11`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn10`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}


// PROD 12
function showMore11() {

    var counter = 0 ; 

    var btn = document.querySelector(`.prodLearnMoreBtn11`) ; 

    btn.onclick = function () {

        document.getElementById(`hidden12`).style.display = `block` ; 
        document.querySelector(`.prodLearnMoreBtn11`).innerHTML = `Show Less` ; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hidden12`).style.display = `none` ; 
        document.querySelector(`.prodLearnMoreBtn11`).innerHTML = `Show More` ; 
        counter = 0; 

        }


    }


}






// FETCH JSON FUNCTIONS
// CREATED TEMPLATES FOR EACH PRODUCT. JUST KEEP USING TEMPLATE FOR NEW PRODUCT


// fetch("Products.json") -> calls the products.json file locally stored. 
//      returns a promise for that request and is pass through a function that parses it with the .json()
// .then(obj) -> turns the info gotten from the response.json and converts it into an object to make it accesible through js. 

fetch("Products.json")    
.then((response) => response.json())

.then((obj) => {

    let json = obj.Products; 



    // PRODUCT #1

    // calls the products targetted <div> in the HTML and adds on the innerHTML
    //         info added to innerHTML is populated with array values pulled from the json file fetched above. 


    document.getElementById("prod1").innerHTML = 
    `
    
    <p class="productName">${json[0].productName}</p>
    <p class="description">${json[0].description}</p>
    <p class="price">${json[0].price}</p>
    
    <br>

    <div class="BtnContainer">
    <button class="prodLearnMoreBtn" onclick="showMore()" >Show More</button>
    <button class="buyNow">Add to Cart</button>
    </div>

    <br>


    ` ; 

    // HIDDEN `SHOW MORE` SECTION 
    // populated with data from json file fetched above

    document.getElementById("hidden").innerHTML = 
    `
    <img id="hiddenImg" src="${json[0].photoLocation1}" alt="${json[0].productName}">
    <img id="hiddenImg" src="${json[0].photoLocation2}" alt="${json[0].productName}">
    <img id="hiddenImg" src="${json[0].photoLocation3}" alt="${json[0].productName}">

    <br>
    <br>
    <p class="specLabel">Additional Specs:</p>
    <p class="specs">
    
        Frequency Response: ${json[0].freqResponse} 
        <br>
        Weigh: ${json[0].weight}
        <br>
        Dimensions: ${json[0].dimensions}

    
    </p>

    ` ; 


// PRODUCT #1 TEMPLATE KEEPS GETTING USED, JUST ADJUSTED TO ARRAY NUMBER. 



        // PRODUCT #2
        document.getElementById("prod2").innerHTML = 
        `
        
        <p class="productName">${json[1].productName}</p>
        <p class="description">${json[1].description}</p>
        <p class="price">${json[1].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn1" onclick="showMore1()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden2").innerHTML = 
        `
        <img id="hiddenImg" src="${json[1].photoLocation1}" alt="${json[1].productName}">
        <img id="hiddenImg" src="${json[1].photoLocation2}" alt="${json[1].productName}">
        <img id="hiddenImg" src="${json[1].photoLocation3}" alt="${json[1].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Frequency Response: ${json[1].freqResponse} 
            <br>
            Weigh: ${json[1].weight}
            <br>
            Dimensions: ${json[1].dimensions}
    
        
        </p>
    
        ` ; 


        // PRODUCT #3
        document.getElementById("prod3").innerHTML = 
        `
        
        <p class="productName">${json[2].productName}</p>
        <p class="description">${json[2].description}</p>
        <p class="price">${json[2].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn2" onclick="showMore2()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden3").innerHTML = 
        `
        <img id="hiddenImg" src="${json[2].photoLocation1}" alt="${json[2].productName}">
        <img id="hiddenImg" src="${json[2].photoLocation2}" alt="${json[2].productName}">
        <img id="hiddenImg" src="${json[2].photoLocation3}" alt="${json[2].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Frequency Response: ${json[2].freqResponse} 
            <br>
            Weigh: ${json[2].weight}
            <br>
            Dimensions: ${json[2].dimensions}
    
        
        </p>
    
        ` ; 

        // PRODUCT #4
        document.getElementById("prod4").innerHTML = 
        `
        
        <p class="productName">${json[3].productName}</p>
        <p class="description">${json[3].description}</p>
        <p class="price">${json[3].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn3" onclick="showMore3()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden4").innerHTML = 
        `
        <img id="hiddenImg" src="${json[3].photoLocation1}" alt="${json[3].productName}">
        <img id="hiddenImg" src="${json[3].photoLocation2}" alt="${json[3].productName}">
        <img id="hiddenImg" src="${json[3].photoLocation3}" alt="${json[3].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Frequency Response: ${json[3].freqResponse} 
            <br>
            Weigh: ${json[3].weight}
            <br>
            Dimensions: ${json[3].dimensions}
    
        
        </p>
    
        ` ; 


        // PRODUCT #5
        document.getElementById("prod5").innerHTML = 
        `
        
        <p class="productName">${json[4].productName}</p>
        <p class="description">${json[4].description}</p>
        <p class="price">${json[4].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn4" onclick="showMore4()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden5").innerHTML = 
        `
        <img id="hiddenImg" src="${json[4].photoLocation1}" alt="${json[4].productName}">
        <img id="hiddenImg" src="${json[4].photoLocation2}" alt="${json[4].productName}">
        <img id="hiddenImg" src="${json[4].photoLocation3}" alt="${json[4].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Inputs / Outputs: ${json[4].IO} 
            <br>
            Weigh: ${json[4].weight}
            <br>
            Dimensions: ${json[4].dimensions}
    
        
        </p>
    
        ` ; 


        // PRODUCT #6
        document.getElementById("prod6").innerHTML = 
        `
        
        <p class="productName">${json[5].productName}</p>
        <p class="description">${json[5].description}</p>
        <p class="price">${json[5].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn5" onclick="showMore5()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden6").innerHTML = 
        `
        <img id="hiddenImg" src="${json[5].photoLocation1}" alt="${json[5].productName}">
        <img id="hiddenImg" src="${json[5].photoLocation2}" alt="${json[5].productName}">
        <img id="hiddenImg" src="${json[5].photoLocation3}" alt="${json[5].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Inputs / Outputs: ${json[5].IO} 
            <br>
            Weigh: ${json[5].weight}
            <br>
            Dimensions: ${json[5].dimensions}
    
        
        </p>
    
        ` ; 


        // PRODUCT #7
        document.getElementById("prod7").innerHTML = 
        `
        
        <p class="productName">${json[6].productName}</p>
        <p class="description">${json[6].description}</p>
        <p class="price">${json[6].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn6" onclick="showMore6()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden7").innerHTML = 
        `
        <img id="hiddenImg" src="${json[6].photoLocation1}" alt="${json[6].productName}">
        <img id="hiddenImg" src="${json[6].photoLocation2}" alt="${json[6].productName}">
        <img id="hiddenImg" src="${json[6].photoLocation3}" alt="${json[6].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Inputs / Outputs: ${json[6].IO} 
            <br>
            Weigh: ${json[6].weight}
            <br>
            Dimensions: ${json[6].dimensions}
    
        
        </p>
    
        ` ; 

        // PRODUCT #8
        document.getElementById("prod8").innerHTML = 
        `
        
        <p class="productName">${json[7].productName}</p>
        <p class="description">${json[7].description}</p>
        <p class="price">${json[7].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn7" onclick="showMore7()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden8").innerHTML = 
        `
        <img id="hiddenImg" src="${json[7].photoLocation1}" alt="${json[7].productName}">
        <img id="hiddenImg" src="${json[7].photoLocation2}" alt="${json[7].productName}">
        <img id="hiddenImg" src="${json[7].photoLocation3}" alt="${json[7].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Inputs / Outputs: ${json[7].IO} 
            <br>
            Weigh: ${json[7].weight}
            <br>
            Dimensions: ${json[7].dimensions}
    
        
        </p>
    
        ` ; 

        // PRODUCT #9
        document.getElementById("prod9").innerHTML = 
        `
        
        <p class="productName">${json[8].productName}</p>
        <p class="description">${json[8].description}</p>
        <p class="price">${json[8].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn8" onclick="showMore8()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden9").innerHTML = 
        `
        <img id="hiddenImg" src="${json[8].photoLocation1}" alt="${json[8].productName}">
        <img id="hiddenImg" src="${json[8].photoLocation2}" alt="${json[8].productName}">
        <img id="hiddenImg" src="${json[8].photoLocation3}" alt="${json[8].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Inputs / Outputs: ${json[8].IO} 
            <br>
            Weigh: ${json[8].weight}
            <br>
            Dimensions: ${json[8].dimensions}
    
        
        </p>
    
        ` ; 





        // PRODUCT #10
        document.getElementById("prod10").innerHTML = 
        `
        
        <p class="productName">${json[9].productName}</p>
        <p class="description">${json[9].description}</p>
        <p class="price">${json[9].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn9" onclick="showMore9()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden10").innerHTML = 
        `
        <img id="hiddenImg" src="${json[9].photoLocation1}" alt="${json[9].productName}">
        <img id="hiddenImg" src="${json[9].photoLocation2}" alt="${json[9].productName}">
        <img id="hiddenImg" src="${json[9].photoLocation3}" alt="${json[9].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Inputs / Outputs: ${json[9].IO} 
            <br>
            Weigh: ${json[9].weight}
            <br>
            Dimensions: ${json[9].dimensions}
    
        
        </p>
    
        ` ; 

        // PRODUCT #11
        document.getElementById("prod11").innerHTML = 
        `
        
        <p class="productName">${json[10].productName}</p>
        <p class="description">${json[10].description}</p>
        <p class="price">${json[10].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn10" onclick="showMore10()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden11").innerHTML = 
        `
        <img id="hiddenImg" src="${json[10].photoLocation1}" alt="${json[10].productName}">
        <img id="hiddenImg" src="${json[10].photoLocation2}" alt="${json[10].productName}">
        <img id="hiddenImg" src="${json[10].photoLocation3}" alt="${json[10].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Inputs / Outputs: ${json[10].IO} 
            <br>
            Weigh: ${json[10].weight}
            <br>
            Dimensions: ${json[10].dimensions}
    
        
        </p>
    
        ` ;



        // PRODUCT #12
        document.getElementById("prod12").innerHTML = 
        `
        
        <p class="productName">${json[11].productName}</p>
        <p class="description">${json[11].description}</p>
        <p class="price">${json[11].price}</p>
        
        <br>
    
        <div class="BtnContainer">
        <button class="prodLearnMoreBtn11" onclick="showMore11()" >Show More</button>
        <button class="buyNow">Add to Cart</button>
        </div>
    
        <br>
    
    
        ` ; 
    
        document.getElementById("hidden12").innerHTML = 
        `
        <img id="hiddenImg" src="${json[11].photoLocation1}" alt="${json[11].productName}">
        <img id="hiddenImg" src="${json[11].photoLocation2}" alt="${json[11].productName}">
        <img id="hiddenImg" src="${json[11].photoLocation3}" alt="${json[11].productName}">
    
        <br>
        <br>
        <p class="specLabel">Additional Specs:</p>
        <p class="specs">
        
            Inputs / Outputs: ${json[11].IO} 
            <br>
            Weigh: ${json[11].weight}
            <br>
            Dimensions: ${json[11].dimensions}
    
        
        </p>
    
        ` ;



});



