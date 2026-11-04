
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    // Lire le texte saisi
    const taskText = taskInput.value;

    // Vérifier que le champ n'est pas vide
    if (taskText.trim() === "") {
        return;
    }

    // Créer un élément li
    const li = document.createElement("li");

    // Ajouter le texte dans le li
    li.textContent = taskText;

    // Créer le bouton Supprimer
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    // Supprimer la tâche
    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
    });

    // Ajouter le bouton dans le li
    li.appendChild(deleteBtn);

    // Barrer ou débarrer la tâche
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    // Ajouter le li dans la liste
    taskList.appendChild(li);

    // Vider le champ
    taskInput.value = "";
});
