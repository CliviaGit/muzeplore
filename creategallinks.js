for (let i = 0; i < 6; i++) {
    let link = document.createElement("a");
    let node = document.createElement("Gallery" + i);
    link.appendChild(node);
    let div = document.getElementById("gallinks");
    div.appendChild(link);
}