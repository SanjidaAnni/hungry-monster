const getSearchValue = () =>{

    const searchValue = document.getElementById("search-input").value;
    if(!searchValue){
        document.getElementById("row").innerHTML=""
    }
    else{

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(res => res.json())
    .then(data => { 
        const meals = data.meals;
        meals.map(meal => {      
            const row1 = document.getElementById("row")
            const mealContainer = document.createElement("div")
            mealContainer.setAttribute("class","col col-style")
            const mealName = meal.strMeal
            const mealImg = meal.strMealThumb
            const mealId = meal.idMeal
            
            const mealDiv = 
                `<div class="card card-style" onclick="getMealDetails(${mealId})"  style="width: 14rem;">
                    <img class="card-img-top" src="${mealImg}" alt="Card image cap">
                    <div class="card-body">
                    <h6 class="card-text">${mealName}</h6>
                </div>`
                mealContainer.innerHTML=mealDiv
                row1.appendChild(mealContainer)
        })
    })
    .catch(error =>{
        document.getElementById("row").innerHTML=
            "<p>Sorry! There is no meal for this search. </br> Please try again...</p>"
        
    })
    
    }
}




const getMealDetails = (id) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(resp => resp.json())
    .then(data => {
        const meal = data.meals    
        meal.map(element=>{
            const mealImg = element.strMealThumb
           const mealdetailsContainer = document.createElement("div")
           const mealdetailsDiv = 
            `<div style="width: 23rem; height:300px">
                <img style="width: 400px; height:300px; border-radius:"10px"; margin-top:50px" src="${mealImg}" alt="Card image cap">
                <div class="card-body" style="width: 400px;">
                    <h2 class="card-title" style=" color: tomato">${element.strMeal}</h2><br>
                    <h5>Ingredients:</h5>
                    <p class="card-text">${element.strIngredient1}</p>
                    <p class="card-text">${element.strIngredient2}</p>
                    <p class="card-text">${element.strIngredient3}</p>
                    <p class="card-text">${element.strIngredient4}</p>
                    <p class="card-text">${element.strIngredient5}</p>
                    <p class="card-text">${element.strIngredient6}</p>
                    <p class="card-text">${element.strIngredient7}</p>
                    <p class="card-text">${element.strIngredient8}</p>
                    <p class="card-text">${element.strIngredient9}</p>
                    <p class="card-text">${element.strIngredient10}</p>
                    <button class="btn btn-dark" onclick="goBack()" id="back-search"><-Go Back
                    </button>
                <div>
            </div>`
        // console.log(meal)
        mealdetailsContainer.innerHTML=mealdetailsDiv 
        document.getElementById("search-meal").appendChild(mealdetailsContainer)
        document.getElementById("all-meals").style.display="none"
        })  
        
        
         
        

    })

}


const backToSearch= () =>{
    document.getElementById("all-meals").style.display="block"
    document.getElementById("search-meal").innerHTML=""
    document.getElementById("row").innerHTML=""
    document.getElementById("search-input").value=""
}
const goBack= () =>{
    document.getElementById("all-meals").style.display="block"
    document.getElementById("search-meal").innerHTML=""
}