// Edit button
// Enable Edit on Title & Description
let contentEdit= document.getElementById("contentEdit")
// let taskTitle = document.getElementById("taskTitle");
// let taskDescription = document.getElementById("taskDescription");
let editBtn = document.getElementById("editBtn");
// console.log(taskTitle);
// console.log(taskDescription);
console.log(editBtn);
    this.editBtn.addEventListener("click", function() {
        console.log(this);
        // console.log(taskDescription);
        console.log(editBtn);

       this.getElementById("taskTitle").setAttribute("contenteditable", "true");
       this.getElementById("taskDescription").setAttribute("contenteditable", "true");
    });