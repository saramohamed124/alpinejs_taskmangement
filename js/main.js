// Local Storage
// function addNewTask() {
//     showModal = false;
//     if (userInput.trim().length > 0 && userDescription.trim().length > 0) {
//         todos.push({ id: 0, name: userInput, description: userDescription, completed: false });
//         localStorage.setItem('todos', JSON.stringify(todos));
//         userInput = '';
//         userDescription = '';
//     }
// }
// // Edit button
// // Enable Edit on Title & Description
// let contentEdit= document.getElementById("contentEdit")
// // let taskTitle = document.getElementById("taskTitle");
// // let taskDescription = document.getElementById("taskDescription");
// let editBtn = document.getElementById("editBtn");
// // console.log(taskTitle);
// // console.log(taskDescription);
// console.log(editBtn);
//     this.editBtn.addEventListener("click", function() {
//         console.log(this);
//         // console.log(taskDescription);
//         console.log(editBtn);

//        this.getElementById("taskTitle").setAttribute("contenteditable", "true");
//        this.getElementById("taskDescription").setAttribute("contenteditable", "true");
//     });

function todoList(){
    // {message:'Task Management',btn_msg:'Create New Task',todos:[],id:0,userInput:'',userDescription:'', showModal: false}
    return{
        todos:[],
        todoName:"",
        todoDescription:"",
        showModal:false,
        filterCompleted: false, 
        toggleFilterCompleted() {
            this.filterCompleted = !this.filterCompleted;
        },

        // Initialize the to-do list from local storage
        init() {
            const storedTodos = localStorage.getItem('todos');
            if (storedTodos) {
                this.todos = JSON.parse(storedTodos);
            }
        },

        add() {
            if (this.todoName.trim() !== '' && this.todoDescription.trim() !== '') {
                this.todos.push({
                    name: this.todoName,
                    description: this.todoDescription,
                    completed: false
                });
                this.saveToLocalStorage(); // Save to local storage
                this.clearInputs(); // Clear input fields
            }
        },

        remove(index) {
            this.todos.splice(index, 1);
            this.saveToLocalStorage(); // Save to local storage
        },

        saveToLocalStorage() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },

        toggleCompleted(index){
            this.todos[index].completed=!this.todos[index].completed
            this.saveToLocalStorage(); // Save to local storage
        },
        filteredTodos() {
            if (this.filterCompleted) {
                return this.todos.filter(todo => todo.completed);
            } else {
                return this.todos;
            }
        },
        editTodos(todo){
            todo.setAttribute("contenteditable","true");
        }
    }
   
}