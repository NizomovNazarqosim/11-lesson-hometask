const elForm = document.querySelector(".form");
const elInputName = document.querySelector(".input__name");
const elInputRelationship = document.querySelector(".input__relationship");
const elInputPhone = document.querySelector(".input__phone");
const elListResult  =document.querySelector(".list");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    const all = []

    const nameValue = elInputName.value;
    const RelationshipValue = elInputRelationship.value;
    const phoneValue = elInputPhone.value;
  
    const some = {
        name: nameValue,
        relationship: RelationshipValue,
        phone: phoneValue,
    }

    all.push(some)
    elInputName.value = null;
    elInputRelationship.value = null;
    elInputPhone.value = null;
    
  
    for(let item of all){

        const lists = document.createElement("ul")
              lists.setAttribute("class", "item__wrap")

     const newLiOne = document.createElement("li")
           newLiOne.innerHTML= nameValue
           newLiOne.setAttribute("class", "result__one")
           lists.appendChild(newLiOne)

     const newLiTwo = document.createElement("li")
           newLiTwo.innerHTML =RelationshipValue
           newLiTwo.setAttribute("class", "result__two")
           lists.appendChild(newLiTwo)

     const newLiThree = document.createElement("li")
           newLiThree.innerHTML =phoneValue
           newLiThree.setAttribute("class", "result__three")
           lists.appendChild(newLiThree)


 elListResult.appendChild(lists)






    //   newLiOne.textContent =`${nameValue}`
    //   newLiOne.setAttribute("class", "result__one")
    //   newLiOne.style.listStyle ="none"


    //   newLiTwo.textContent =`${RelationshipValue}`
    //   newLiTwo.setAttribute("class", "result__two")
    //   newLiTwo.style.listStyle ="none"

    //   newLiThree.textContent =`${phoneValue}`
    //   newLiThree.setAttribute("class", "result__three")
    //   newLiThree.style.listStyle ="none"
   
    //   elListResult.appendChild(newLiOne)
    //   elListResult.appendChild(newLiTwo)
    //   elListResult.appendChild(newLiThree)
      
  

    }


   
}) 
