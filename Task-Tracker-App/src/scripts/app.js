document.getElementById("addTask").addEventListener("click", () => {
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;

    const li = document.createElement("li");
    li.innerHTML = `<strong>${taskTitle}</strong>: ${taskDescription}`;
    document.getElementById("taskList").appendChild(li);
});
