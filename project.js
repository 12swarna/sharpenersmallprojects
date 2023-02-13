let form=document.getElementById("newform");
//form submit event//
form.addEventListener("submit",formsfunc)

let newDel=document.getElementById("setupform");
//delete event//
newDel.addEventListener("click",removeDetails)


function formsfunc(e){
    e.preventDefault();
    

    let expense=document.getElementById("num").value;
    let textHere=document.getElementById("texts").value;
    let selectHere=document.getElementById("cateogy").value;
    console.log(expense,textHere,selectHere);
    //adding object in local storage//
    let details={
        expense:expense,
        textHere:textHere,
        selectHere: selectHere

    };
    //converting this to add local storage//
    localStorage.setItem(details.textHere,JSON.stringify(details));
    
    


         //in this code making li element and set this to screen//
    let newList=document.createElement("li");
    newList.innerHTML = ` ${expense} ${textHere} ${selectHere}`;

    document.getElementById("setupform").appendChild(newList);
    //adding delete button//
    let del=document.createElement("button");
    let delbutton=document.createTextNode("deletebutton");
    del.value="deletebutton"
   del.class="btn btn-danger btn-sm float-right delet";
   del.appendChild(delbutton);
    newList.appendChild(del);
    del.onclick=()=>{//this is for adding functionality on delete button to delete data form local stoarage//
        localStorage.removeItem(details.textHere);
        

    }

    //adding edit button//
    let edit=document.createElement("button");
    let editButton=document.createTextNode("edit button");
    edit.appendChild(editButton);
    newList.appendChild(edit);
    edit.onclick=()=>{
        localStorage.removeItem(details.textHere);
        document.getElementById("num").value=details.expense;
        document.getElementById("texts").value=details.textHere;
        document.getElementById("cateogy").value=details.selectHere;
    }
}

function removeDetails(e){
    //this line for deleteing list from screen//
    let removed=e.target.parentElement;
    newDel.removeChild(removed);


}
