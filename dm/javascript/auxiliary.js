function toggleGroup() {
    let buttons = document.getElementById("btnGroup");

    if (buttons.style.display == "block") {
        buttons.style.display = "none";
        document.getElementById("parentButton").innerHTML = "Show options";
    } else if (buttons.style.display != "block") {
        document.getElementById("parentButton").innerHTML = "Hide options";
        buttons.style.display = "block";
    }
}