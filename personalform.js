//this is for when we refresh the webpage using get old data will also store on network//
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/718441bfcf1f41ae838b24722405ef85/student_details")
    .then((response)=>{
        console.log(response);
        for(let i=0;i<response.length;i++){
        console.log(response.data[i]);
        }
        


    }).catch((err)=>{
        console.log(err);
    })
})



document.getElementById("newform").addEventListener("submit",forms);
//for deleting list when  i click on delete button//
let deletlist=document.getElementById("list");
deletlist.addEventListener("click",deletingscreen);
function forms(e){
    e.preventDefault();

    //setting details on console//
    let names=document.getElementById("naming").value;
    let emails=document.getElementById("gmail").value;
    let phoning=document.getElementById("number").value;
    console.log(names,emails,phoning);


    //adding object in local storgage//
    const details={
        names:names,
        emails:emails,
        phoning:phoning
    }

    //adding data on network//
    axios.post("https://crudcrud.com/api/718441bfcf1f41ae838b24722405ef85/student_details",details)
    .then((response)=>{
        console.log(response.data);
    }).catch((err)=>{
        console.log(err);
    })

    // //setting this details on local storage//
    // localStorage.setItem(details.names,JSON.stringify(details));


    //settings this details on scrren//
    let list=document.createElement("li");//making li tag
    //setting this details on li tag
    list.innerHTML=`${names} ${emails} ${phoning}`;

    //showing this details on li tag//
    let newlist=document.getElementById("list");  
    newlist.appendChild(list);//setting this to parent element to child element


    //adding delete button on screen//
    let deleteing=document.createElement("button");
    let deletebutton=document.createTextNode("deletebutton");
    deletebutton.value=deletebutton;
    deleteing.appendChild(deletebutton);
    list.appendChild(deleteing);

    //adding delte functionality on local storage//
    deleteing.onclick=()=>{
        localStorage.removeItem(details.names);

    }


    //adding edit button on screen//
    let editing=document.createElement("button");
    let editbutton=document.createTextNode("edit button");
    editbutton.value=editbutton;
    editing.appendChild(editbutton);
    list.appendChild(editing);

    //editing functionality on local storage//
    editing.onclick=()=>{
        localStorage.removeItem(details.names);
        //this is for editing section go on form page//
        document.getElementById('naming').value=details.names;
        document.getElementById('gmail').value=details.emails;
        document.getElementById('number').value=details.phoning;
        
    }

};
//this is for deleting data form scrren
function deletingscreen(e){
    let del=e.target.parentElement;
    deletlist.removeChild(del);
}
