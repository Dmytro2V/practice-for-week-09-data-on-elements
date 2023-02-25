// Your code here
// 1 Create an event listener for the 
// #add button to add items to the list.
window.addEventListener("DOMContentLoaded", event => {
    const addButtonEl = document.getElementById("add");
    const nameInputEl = document.getElementsByTagName("input")[0];
    const typeEl = document.getElementById("type");
    const ulEl = document.getElementById("shopping-list");
    addButtonEl.addEventListener("click", event => {
        event.preventDefault(); // because any button in a form will submit smth :)
        // 2 Display the items in the 
        // #shopping-list <ul> element.
        newLi = document.createElement("li");
        newLi.innerText = nameInputEl.value;
        ulEl.appendChild(newLi);

        // 3. Set the data-type attribute of each
        //  <li> element with the value of the type field.

        newLi.setAttribute("data-type", typeEl.value);
        console.log(typeEl.value);
        //4 For each type, style the <li> a different background color 
        // in index.css. Recall that CSS supports attribute selectors 
        // using square brackets.

    })



})