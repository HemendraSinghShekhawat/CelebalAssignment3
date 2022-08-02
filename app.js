const addButton = document.querySelector(".add-btn");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos");
var deleteButton = document.getElementsByClassName("delete");
var editButton = document.getElementsByClassName("edit");
var saveButton = document.getElementsByClassName("save");




const createNewTodo = (newTodo)=>{
    const li = document.createElement("li");
    const p = document.createElement("p");
    const inp = document.createElement("input");
    const edtBtn = document.createElement("button");
    const dltBtn = document.createElement("button");
    const svBtn = document.createElement("button");

    p.classList.add("title");
    li.classList.add("list");
    inp.classList.add("inputInTodo");
    edtBtn.classList.add("edit");
    dltBtn.classList.add("delete");
    svBtn.classList.add("save");

    inp.style.display = "none";
    svBtn.style.display = "none";


    p.innerHTML = newTodo;
    edtBtn.innerHTML = "Edit";
    dltBtn.innerHTML = "Delete";
    svBtn.innerHTML = "Save";

    p.addEventListener('click', function(){
        this.classList.toggle("completed");
        edtBtn.classList.toggle("completed");
        svBtn.classList.toggle("completed");
        dltBtn.classList.toggle("completed");
    });

    inp.addEventListener("keypress", function(){
        if(event.key === "Enter"){
            event.preventDefault();
            svBtn.click();
        }
    });


    edtBtn.addEventListener('click', function(){
        this.style.display = "none";
        p.style.display = "none";
        inp.style.display = "block";
        svBtn.style.display = "block";

        const todoListEditingNow = p.innerText;
        this.parentElement.querySelector("input").value = todoListEditingNow;
    });

    svBtn.addEventListener('click', function(){
        this.style.display = "none"
        p.style.display = "block";
        edtBtn.style.display = "block";
        inp.style.display = "none";

        const todoListEditingNow = p.innerText;
        var currentTodoEdit = this.parentElement.querySelector("input").value;
        if((currentTodoEdit !== undefined || currentTodoEdit !== "" ) && currentTodoEdit !== todoListEditingNow){
            if(currentTodoEdit === ""){
                alert("Edit to a valid todo!");
                p.style.display = "none";
                inp.style.display = "block";
                edtBtn.style.display = "none";
                this.style.display = "block";
            }
        console.log(currentTodoEdit);
        p.innerText = currentTodoEdit;
        }
        else{
            console.log(todoListEditingNow);
        }
    });

    dltBtn.addEventListener('click', function(){
        this.parentElement.style.display  = "none";
    })

    li.append(p);
    li.append(inp);
    li.append(edtBtn);
    li.append(svBtn);
    li.append(dltBtn);
    return li;
}



const handleInput = (keypress) => {
    // console.log(keypress);
    if(keypress.key === "Enter" && keypress.target.value !==""){
        console.log("I am doing Great and at this pace i will conquer everything");
        let p = keypress.target.value;
        input.value = "";
        todos.append(createNewTodo(p));
    }
    else if(keypress.target.value == "" && keypress.key === "Enter"){
        console.log("Enter a proper todo");
        alert("Enter a proper todo");
        return;
    }
    else{
        return;
    }
}

const handleClick = () =>{
    if(input.value !== ""){
        console.log("I did hard work today");
        let p = input.value;
        input.value = "";
        todos.append(createNewTodo(p));
    }
    else{
        console.log("Enter a proper todo");
        alert("Enter a proper todo");
        return;
    }
}
var i;
for(i=0; i<saveButton.length; i++){
    saveButton[0].on
}

addButton.addEventListener('click', handleClick);
input.addEventListener('keypress', handleInput);




