


// HAMBURGUER ICON FUNCTION

function openMenu() {

    var counter = 0 ; 

    var btn = document.querySelector(`.hamburguer`) ; 

    btn.onclick = function () {

        document.getElementById(`hiddenNav`).style.display = `block` ; 

        document.querySelector(`header`).style.height = `300px`; 

        counter++ ; 


        if (counter == 2) {

        document.getElementById(`hiddenNav`).style.display = `none` ; 

        document.querySelector(`header`).style.height = `100px`; 

        counter = 0; 

        }


    }


}






// WARPS

function warpHome() {

    console.log("testing-Logo-Warp");
    window.location.href = "../index.html" ; 

};





// FORM VALIDATION

function validateform(){  

    //var pull input value for Full Name box  
    var name = document.querySelector(`[name="Fullname"]`) ; 
    var validator = name.value ; 


    // Number.isInteger() takes the value in the () and returns "true" if it is a number and "false" if it is NaN (i.e. a string)
    // Although prompt turns everything into a string, parseInt will only convert into integers up until the first character thats not a number. So parseInt(123abc) = 123 and parseInt(gustavo) = NaN; 
    
    let filter = parseInt(validator);
    let filterCheck = Number.isInteger(filter); 


    // console.log(filterCheck)


        if (filterCheck == true) {

            console.log("numeric/ not a string");
            alert(`Invalid input entry. "Full Name" entry only accepts words. Please try again`) ;
            return false

            // <form onsumbit=`return validateform()` states that if this function returns false, the form submission will be cancelled. 
            //      In this case, it will only return false if the Full Name input includes anything that is not a string. 

        } else {

            return true ; 

        }


    }







