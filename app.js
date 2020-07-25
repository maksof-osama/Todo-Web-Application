
var li=document.getElementById("li")
function add_item(){
var items=document.getElementById("items")
if(items.value=="")
{
Swal.fire("Please enter todo items. <br> Can not add empty list")
}
else{

var create_li=document.createElement("li")
var li_Text=document.createTextNode(items.value)
create_li.appendChild(li_Text)

var edit_btn=document.createElement("img")
edit_btn.src='Images/edit.png'
edit_btn.alt="EDIT"
edit_btn.setAttribute("onclick","edit_li(this)")
create_li.appendChild(edit_btn)

var del_btn=document.createElement("img")
del_btn.src='Images/dust.png'
del_btn.alt="DELETE"
del_btn.className="delclass"
del_btn.setAttribute("onclick","delete_li(this)")
create_li.appendChild(del_btn)

li.appendChild(create_li)

items.value=""
}
}

function del_all_item(){
    alert('Are you sure you want to delete All Items')
    li.innerHTML="";

}

function delete_li(rm){
rm.parentNode.remove()
}

function edit_li(e){ 
var val= e.parentNode.firstChild.nodeValue
edit_Val= prompt("Enter Edit Value", val)
e.parentNode.firstChild.nodeValue= edit_Val
console.log( e.parentNode)
}


