let task_input = document.getElementById("taskInput");
let list = document.getElementById("taskList")


//add item function
function addItems(){
 let li = document.createElement("li");
 let listItem = document.createTextNode(task_input.value)
 li.appendChild(listItem)
 list.appendChild(li)
 task_input.value = ""
list.className = "list";

let editbtn = document.createElement("button")
let editBTNnode = document.createTextNode("edit")
editbtn.setAttribute("onclick", "edit(this)")
editbtn.appendChild(editBTNnode)
li.appendChild(editbtn)

let deletebtn = document.createElement("button")
let delBTNnode = document.createTextNode("delete")
deletebtn.appendChild(delBTNnode)
deletebtn.setAttribute("onclick", "deleteItem(this)")
li.appendChild(deletebtn)

}


//edit function 
function edit(e_btn){
    let edited_val= e_btn.parentNode.firstChild
    let editText = prompt("Update task", "enter text" , edited_val)
    e_btn.parentNode.firstChild.nodeValue = editText
}

//delete item function
function deleteItem(d_button){
    d_button.parentNode.remove()
}

// Delete All function
function deleteAll(){
list.innerHTML = ""
}