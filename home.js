for (i=1; i<11; i++) {    
    let link = document.createElement("a");
    link.href = "gall1.html";
    link.style = "padding-right: 100px;";
    let br = document.createElement("br")
    let node = document.createTextNode("Gallery " + i);
    link.appendChild(node);
    let element = document.createElement("div");
    element.appendChild(link);
    element.style = "padding: 20px";
    let div = document.getElementById("find");
    div.appendChild(element);
}