const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert('please Enter Task');
    }
    else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";
    checkBtn.addEventListener('click', function () {
        checkBtn.parentElement.style.textDecoration = "line-through";
    });
    deleteBtn.addEventListener('click', function () {
        deleteBtn.parentElement.remove();
    })
});