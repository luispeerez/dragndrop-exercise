function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.currentTarget.style.setProperty("background-color", "yellow");
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggedEl = document.getElementById(id);
  event.currentTarget.appendChild(draggedEl);
  event.dataTransfer.clearData();
}

window.addEventListener("load", function () {
  var draggableElemnts = document.querySelectorAll(".example-draggable");
  var dropzoneEl = document.querySelector(".example-dropzone");

  draggableElemnts.forEach(function (el) {
    console.log("el", el);
    el.addEventListener("dragstart", onDragStart);
  });

  dropzoneEl.addEventListener("dragover", onDragOver);
  dropzoneEl.addEventListener("drop", onDrop);
});
