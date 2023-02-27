//when i refresh the page all data delte form network so this code solve this probelm//
window.addEventListener("DOMContentLoaded",()=>{
axios.get("https://crudcrud.com/api/f618f944ff9a4891ac03f747bd0758ee/customering")
.then((response)=>{
    console.log(response.data);

}).catch((error)=>{
    console.log(error);
})
}
)


let makingForm = document.getElementById("newform");

makingForm.addEventListener("submit", fun);


// //delte//
// let delteid=document.getElementById("firstheading");
// delteid.addEventListener("click",removeDetails);


function fun(event) {
  event.preventDefault();
   
  let sellingpro=document.getElementById("selling").value;
  let productdet=document.getElementById("product").value;
  console.log(sellingpro,productdet);

  //local storage//
  let details={
    sellingpro:sellingpro,
    productdet:productdet
  };
  localStorage.setItem(details.sellingpro,JSON.stringify(details));

  //adding data from crudcrud//
  axios.post("https://crudcrud.com/api/f618f944ff9a4891ac03f747bd0758ee/customering",details)
  .then((response)=>{
    console.log(response.data);
  }).catch((err)=>{
    console.log(err);
  })

  //setting screen first one //
  
  let list=document.createElement("li");
  list.style.fontWeight="lighter";
  list.innerHTML= `${sellingpro}_${productdet}`;
  list.setAttribute("id", sellingpro); // add this line//
  document.getElementById("firstheading").appendChild(list);
  console.log(list);

  //setting screen second one//
  let list2=document.createElement("li");
  list2.innerHTML=` Rs ${sellingpro}`;
  document.getElementById("secondheading").appendChild(list2);

//adding deletebutton//
let del=document.createElement("button");
let delbutton=document.createTextNode("deleteproduct");
del.addEventListener("click", removeDetails);
del.appendChild(delbutton);
list.appendChild(del);
del.onclick=()=>{
    localStorage.removeItem(details.sellingpro);

    axios
      .delete(`hhttps://crudcrud.com/api/f618f944ff9a4891ac03f747bd0758ee/customering/${response.data._id}`
        
      )
      
      .then((response) => {
        console.log(response.data);
        
      })

      .catch((err) => {
        console.log(err);
      });

    
  };
}
 

function removeDetails(event){
    let removed=event.target.parentElement;
    removed.remove();
    

}



