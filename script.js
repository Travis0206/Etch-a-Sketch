//assigning div from the html page
let container = document.querySelector(".container");
let button = document.querySelector("button");

function userInput(){
    return prompt("Enter a number for rows and collums")
}

function makeRows (userInput){ 

    if (userInput>99){
        alert( "error click for a new grid thats under 100")
    }else{
//assiging the variables from the css to my inputs for rows and cols in this function 
    container.style.setProperty("--grid-rows", userInput);
    container.style.setProperty("--grid-cols", userInput);
    //a loop to make a a square depending how many rows and cols
    for (i=0;i<(userInput*userInput);i++){
        let cell = document.createElement("div");//creates a div
        cell.classList.add("grid-item");
        // cell.textContent = `${i+1}`; //this will number inside the cells numerically
        cell.style.width = 960/userInput + "px"//to make however many unputs to make equal widths within the grid
        container.appendChild(cell); //this is adding the cell  the container
        
    };
}
}

function whenHovered(){
    let childElement = document.querySelectorAll(".grid-item");//to select  all the grid-item class
    childElement.forEach( (ele) => {//assignging all the elemtns this function
        ele.addEventListener("mouseenter", (e) => {
            console.log(e.target);
            e.target.classList.add("hovered-color");
            
    })
})
}



button.addEventListener("click",()=>{
    document.querySelector(".container").innerHTML ="";
    makeRows(userInput())
    whenHovered()
})




