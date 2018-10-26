dragElement(document.getElementById(("shorts")));
dragElement(document.getElementById(("shorts2")));
dragElement(document.getElementById(("shorts3")));
dragElement(document.getElementById(("hat")));
dragElement(document.getElementById(("jeans")));
dragElement(document.getElementById(("shoes")));
dragElement(document.getElementById(("shoes2")));
dragElement(document.getElementById(("shoes3")));
dragElement(document.getElementById(("shirt")));
dragElement(document.getElementById(("shirt2")));
dragElement(document.getElementById(("shirt3")));


function dragElement(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(element.id + "clothes")) {
    document.getElementById(element.id + "clothes").onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
