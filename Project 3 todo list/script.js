
const searchbar = document.getElementById("searchbar");
const lists = document.getElementById("lists");

function addtask() {
    if (searchbar.value === '') {
        alert("Please Enter a Task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = searchbar.value;
        lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    searchbar.value = '';
    saveData();
}

lists.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveData();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Removes the parent <li> element
    }
}, false);

function saveData (){
    localStorage.setItem("data",lists.innerHTML)
}
function showTask() {
    lists.innerHTML = localStorage.getItem("data");
};
showTask();