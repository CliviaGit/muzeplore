function createFind(name, href) {
    let link = document.createElement("a");
    link.href = href;
    link.style = "padding-right: 100px;";
    let node = document.createTextNode(name);
    link.appendChild(node);
    let element = document.createElement("div");
    element.appendChild(link);
    element.style = "padding: 20px";
    const div = document.getElementById("find");
    div.appendChild(element);
}

function update(its) {
    for (let i = 0; i < its; i++) {
        x = Math.random() * 100;
        rx = Math.round(x)
        createFind("Gallery " + rx, "gall1.html");
    }
}