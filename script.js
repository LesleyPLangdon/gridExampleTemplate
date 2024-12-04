
function addToOrder(item) {
    const orderDisplay = document.getElementById('orderDisplay');

    const listItem = document.getElementById('orderSpace');
    listItem.textContent = item;
    orderDisplay.appendChild(listItem);
}
function submitOrder() {
    const orderDisplay = document.getElementById('orderDisplay');

    orderDisplay.innerHTML = "Thank you for your order";

}