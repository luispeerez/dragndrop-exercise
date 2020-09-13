function onDragStart(event) {
  console.log(event);
  console.log(event.constructor);

  event.dataTransfer.setData("text/plain", event.target.id);

  event.currentTarget.style.setProperty("background-color", "yellow");
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggedEl = document.getElementById(id);
  event.target.appendChild(draggedEl);
  event.dataTransfer.clearData();
}

window.addEventListener("load", function () {
  var draggableEl = document.querySelector(".example-draggable");
  var dropzoneEl = document.querySelector(".example-dropzone");

  draggableEl.addEventListener("dragstart", onDragStart);
  dropzoneEl.addEventListener("dragover", onDragOver);
  dropzoneEl.addEventListener("drop", onDrop);
});
