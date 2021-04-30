// Global variables containing elements 
// Getting elements by their id's
var tbody = document.getElementById("table-body");
var submitForm = document.getElementById("submit");
//Getting element by querying selectors
var defaultText = document.querySelector("tbody > tr");

// Listening for an onclick event and checking user input fields
submitForm.addEventListener("click", validateForm);
function validateForm(){
    var name = document.forms["expense-form"]["expense-name"].value;
    var expenseDate = document.forms["expense-form"]["expense-date"].value;
    var expenseAmount = document.forms["expense-form"]["expense-amount"].value;
    var inputElements = document.getElementsByTagName("input");
    var borderColor = "2px solid red";

    if(name == "" && expenseDate == "" && expenseAmount == ""){
        alert("please fill in all required forms");
        console.log(name, expenseAmount, expenseAmount);
    }else if(name == "" && expenseDate == ""){
            for(var i = 0; i <= 1; i++){
                inputElements[i].style.border = borderColor;
            }
    }else if(expenseDate == "" && expenseAmount == ""){
        for(var i = 1; i <= 2; i++){
            inputElements[i].style.border = borderColor;
        }
    }else if(name == "" && expenseAmount == ""){
        for(var i = 0; i <=2; i+=2){
            inputElements[i].style.border = borderColor;
        }
    }else if(name == ""){
        inputElements[0].style.border = borderColor;
    }else if (expenseDate == ""){
        inputElements[1].style.border = borderColor;
    }else if (expenseAmount == ""){
        inputElements[2].style.border = borderColor;
    }else{
        alert("submitted successfully");
        for(var i = 0;i <=2; i++){
            inputElements[i].style.border = "2px solid rgb(32, 151, 32)";
        }
        //function for adding filled information into table
        addToTable();
        // clearing all input values after submission
        for(var i = 0; i<=2;i++){
            inputElements[i].value = "";
        }
    }
}

function addToTable(){
    var name = document.getElementById("name").value;  //getting the input element with the id of name and storing its value
    var expenseDate = document.getElementById("date").value; // getting the input element with the id of date and storing its value
    var expenseAmount = document.getElementById("amount").value; // getting the input element with the id of name and storing its value
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    
    td1.appendChild(document.createTextNode(name));
    td2.appendChild(document.createTextNode(expenseDate));
    td3.appendChild(document.createTextNode("$" + expenseAmount));

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.className = "delete";
    td4.appendChild(deleteButton);
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td4);

    tbody.appendChild(tr);

    if(defaultText.nextElementSibling){
        defaultText.style.display = "none";
    }
}

  // removal functionality
  tbody.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
       if(confirm('Are you sure?')){
           var td = e.target.parentElement.parentElement;
           tbody.removeChild(td);
       }
       if(tbody.children.length == 1){
        defaultText.style.display = "block";
    }
    }
  });