const foodButton = document.querySelectorAll(".food-button");
// Step to make food
// [timeout,Current step to make food]
const foodProcess = {
	iceCream: [
		[1000, "Order Placed"],
		[1000, "Order Recieved"],
		[7000, "Chopping Fruits"],
		[3000, "Adding Fruits to Milk"],
		[3000, "Coating with Chocolate"],
		[1000, "The Ice Cream is ready to be picked up"],
	],
	burger: [
		[1000, "Order Placed"],
		[1000, "Order Recieved"],
		[10000, "Mixing Ingredients"],
		[5000, "Applying Sauce to Buns"],
		[13000, "Your Burger is in the Microwave"],
		[1000, "The Burger is ready to be picked up"],
	],
	pizza: [
		[1000, "Order Placed"],
		[1000, "Order Recieved"],
		[15000, "Mixing Ingredients"],
		[12000, "Adding dryfruits to icecream"],
		[1000, "The Pizza is ready to be picked up"],
	],
};
// Will also be used as id for order
let orderNumber = Math.floor(Math.random() * 5001 + 5000);

foodButton.forEach((button) => {
	button.addEventListener("click", (e) => {
		let orderName = e.target.innerHTML;
		switch (orderName) {
			case "Pizza":
				placeOrder(orderName, String(orderNumber).trim(), foodProcess.pizza);
				break;

			case "Burger":
				placeOrder(orderName, String(orderNumber).trim(), foodProcess.burger);
				break;

			case "Ice Cream":
				placeOrder(orderName, String(orderNumber).trim(), foodProcess.iceCream);
				break;
			case "Samosa":
				placeOrder(orderName, String(orderName).trim(),foodProcess.samosa);
				break;

			default:
				break;
		}
		// Increasing order number
		orderNumber += Math.floor(Math.random() * 41 + 10);
	});
});

function placeOrder(orderName, id, foodSteps) {
	// Adding new order div on click to the front
	document.getElementById("orders-container").innerHTML =
		`<div class="order">
    <h2>${orderName}</h2>
    <p>Order Number:${id}</p>
    <div class="status-container" id="${id}" >
    </div>
</div>` + document.getElementById("orders-container").innerHTML;
	// Promise function
	let currOrder = (work, timeout) =>
		new Promise((resolve) => {
			work();
			setTimeout(() => resolve(), timeout);
		});
	// calling promise function
	currOrder(currWork(id, foodSteps[0][1]), foodSteps[0][0])
		.then(() => currOrder(currWork(id, foodSteps[1][1]), foodSteps[1][0]))
		.then(() => currOrder(currWork(id, foodSteps[2][1]), foodSteps[2][0]))
		.then(() => currOrder(currWork(id, foodSteps[3][1]), foodSteps[3][0]))
		.then(() => currOrder(currWork(id, foodSteps[4][1]), foodSteps[4][0]))
		// .then(()=>currOrder(currWork(id,foodSteps[5][1]),foodSteps[5][0]))
		.then(() =>
			currOrder(() => {
				document.getElementById(id).innerHTML =
					`<div class="order-status completed-order">${foodSteps[5][1]}</div>` +
					document.getElementById(id).innerHTML;
			}, foodSteps[5][0])
		);
}
// Return a function
function currWork(id, currFoodStep) {
	return function () {
		const prevStep = document.getElementById(id);
		document.getElementById(id).innerHTML =
			`<div class="order-status">${currFoodStep}</div>` +
			document.getElementById(id).innerHTML;
	};
}