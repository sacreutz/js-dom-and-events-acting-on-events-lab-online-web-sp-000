function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  var input = document.querySelector('input[name="name"]')
  return input.value.toString();
}

function addNewElementAsLi(){
var li = document.createElement('li')
  var string = retrieveEmployeeInformation()
  li.innerHTML = string
  var element = document.getElementsByClassName('employee-list')[0]
  element.appendChild(li)
  
} 

 

function addNewLiOnClick(){
 
  addNewElementAsLi();
  document.querySelector('input[name="name"]').value='';
  
}

var submit = document.querySelector('input[name=""]')
  submit.addEventListener("click", () => addNewLiOnClick);
  
  var clear = document.querySelector("a[href='#']")
  
  
function clearEmployeeListOnLinkClick(){
  var list = document.getElementsByClassName('employee-list')
    var e = document.querySelector("ul"); 
  e.length = 0; 
  e.innerHTML = '';
  
}

clear.addEventListener("click", () => clearEmployeeListOnLinkClick);

