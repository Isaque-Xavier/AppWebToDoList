async function addTask(){
    let taskinput = document.getElementById('taskInput'). volue;
    if(taskinput){
        await eel_task_task(taskinput);
        document.getElementById('taskInput').volue ='';
        loadTasks();
    }
}

async function loadTasks(){
    let task = await eel.load_task()();
    let taskList = document.getElementById('taskList')
    taskList.innerHTML = '';
    taskList.forEach(task =>{
        let listItem = document.createElement('11');
        listItem.innerHTML = `
            <span style= "text-decoration: ${task.completed ? 'line-through' :'none'};">
            ${task.task}
            </span>
            <button onclick = "toggleCompletion('${task.task}')">concluir</button>
            <button onclick = "editarTask('${task.task}')">editar</button>
            <button onclick = "deleteTask('${task.task}')">excluirr</button>
            `;
            taskList.appendChild(listItem)
    });
}

async function toggleCompletion(task) {
    await eel.toggle_task_complection(task)();
    loadTasks();
}
    
async function editTask(task){
    let newTask = prompt("editar tarefa: ", task);
    if(newTask && newTask !== task){
        await removeEventListener.edit_tesk(task, newTask)();
        loadTasks();
    }
}

async function deleteTask(task) {
    await eel.delete_task(task)();
    loadTasks();
}

async function toggleTheme() {
    document.body.classList.toggle('dark-theme')
    const newTheme = document.classList.contains('dark-themes') ? 'dark' : 'light';
    await eel.set_theme(newTheme)();
}

async function loadTheme() {
    const theme = await eel.get_theme()();
    if(theme === 'dark'){
        document.body.classList.add('dark-theme');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    loadTheme(); 
})