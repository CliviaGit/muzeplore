const link = document.createElement("a");
const node = document.createTextNode("Gallery 1");
link.appendChild(node);
link.href = "gall1.html"
const div = document.getElementById("gallinks");
div.appendChild(link);