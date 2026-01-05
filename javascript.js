const ul = document.querySelector("ul");

const input = document.querySelector("#item");

    
const btn = document.querySelector("button");
btn.addEventListener("click", function (e){
    e.preventDefault();


    const li = document.createElement("li")
    li.style.marginBottom = "10px";

    const span = document.createElement("span");

    span.textContent = input.value;


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => li.remove());
    deleteBtn.style.fontWeight = "bold";
    deleteBtn.style.marginLeft = "20px";


    li.appendChild(span);
    li.appendChild(deleteBtn);
  

    ul.appendChild(li);

    input.value = "";
    
    input.focus();
    
})
