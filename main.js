const form = document.querySelector('form');
const ul = document.querySelector('ul');
const btnClr = document.querySelector('.btnClr');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

// const removeTask = (e) => {
//     e.target.parentNode.remove();
// }

const removeTasks = () => {
    ul.textContent = '';
}

// const boxChecked = (e) => {
//     const element = e.target;
//     if (element.type === "checkbox") {
//         element.parentNode.style.textDecoration = "line-through";
//     } 
// }

const boxChecked = (e) => {
    const element = e.target;
    if (element.type === "checkbox") {
        element.parentNode.classList.toggle('active')
    } 
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = "task";
    task.innerHTML = titleTask + "<input class='checkboxes' type='checkbox'></input>";
    ul.appendChild(task);
    input.value = "";
    // task.querySelector('button').addEventListener('click', removeTask);
    ul.addEventListener('click', boxChecked);
    btnClr.addEventListener('click', removeTasks)
}

form.addEventListener('submit', addTask)