let shoppingListItems = ["milk", "eggs", "bread", "apples", "bananas"];

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";

    shoppingListItems.forEach((item) => {
        // console.log(item);
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

updateItems();
// We created the function above, now we are CALLING it?

function addItem() {
    // Grab
    let newItem = document.getElementById("new-item-text").value;
    shoppingListItems.push(newItem)
    updateItems();
}

function clearItem() {
    // delete
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
}





