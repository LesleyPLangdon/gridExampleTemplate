function addToOrder(item) {
    const orderDisplay = document.getElementById('orderDisplay');
    const listItem = document.createElement("p");
    listItem.textContent = item;
    orderDisplay.appendChild(listItem);
}
