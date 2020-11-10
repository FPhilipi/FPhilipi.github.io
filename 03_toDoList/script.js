let elementOl = document.getElementById("lista-tarefas");

let button = document.getElementById("criar-tarefa");

let activity = document.getElementById("texto-tarefa");

button.addEventListener("click", function () {
  let elementLi = document.createElement('li');
  elementLi.innerHTML = activity.value;
  elementOl.appendChild(elementLi);
  activity.value = "";

  elementLi.addEventListener("click", function (event) {
    for (let index = 0; index < elementOl.children.length; index += 1) {
      elementOl.childNodes[index].classList.remove("backGroundColor");
      event.target.classList.add("backGroundColor");
      console.log(event.target)
    };
  });


  elementLi.addEventListener("dblclick", function (target) {
    event.target.classList.add("completed");
    if (elementLi.classList.contains("completed")) {
      elementLi.addEventListener('dblclick', function () {
        elementLi.classList.remove('completed');
      });
    };
  });

  let removeButton = document.querySelector("#remover-finalizados");
  removeButton.addEventListener("click", function () {
    let getAllCompletedTasks = document.querySelectorAll(".completed");
    for (i in getAllCompletedTasks) {
      if (getAllCompletedTasks[i] != undefined) {
        getAllCompletedTasks[i].parentElement.removeChild(getAllCompletedTasks[i]);
      };
    };
  });

  let clearAllButton = document.querySelector("#apaga-tudo");
  clearAllButton.addEventListener("click", function () {
    for (let index = 0; index < elementOl.children.length; index += 1) {
      console.log(elementOl.children.length);
      document.getElementById("lista-tarefas").removeChild(elementOl.childNodes[index]);
    }
  });
});        
