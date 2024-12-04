let order = "";
let finalOrder = "";

function addToOrder(item) {
    const orderDisplay = document.getElementById('orderDisplay');
    order += item;
    orderDisplay.innerHTML = order

    // const listItem = document.createElement("p");
    // listItem.textContent = item;
    // orderDisplay.appendChild(listItem);
}
function submitOrder() {
     finalOrder += order;
     order = "";
    
    document.getElementById('finalOrder').innerHTML = finalOrder;
     
    const orderDisplay = document.getElementById('orderDisplay');

    orderDisplay.innerHTML = "Thank you for your order";

}