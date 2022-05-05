const {allIds, fetchOrderById} = require("../api/ecommerce-helpers");
const {fetchAllOrders, bucketOrdersByUsers, getLast2WeeksOrders, bucketOrdersByDate} =
		  require("./ecommerce.js");
const {isBefore} = require("date-fns");

const ORDER_ID = "70ef599e5eca171b2bce84d1"
let MOCK_ORDERS = []
beforeAll(async () => MOCK_ORDERS = await fetchAllOrders())
test("Ecommerce - fetchOrderById", async () => {
	let orders = await fetchOrderById(ORDER_ID);
	expect(orders).toBeTruthy();
});
test("Ecommerce - fetchAllOrders", async () => {
	const allOrders = await fetchAllOrders()
	expect(allIds.length === allOrders.length).toBeTruthy()
})
test("Ecommerce - bucketOrdersByUsers", async () => {
	const orderByUser = await bucketOrdersByUsers()
	const singleOrder = await fetchOrderById(ORDER_ID)
	expect(orderByUser[singleOrder.userId].length).toBeTruthy()
})
test("Ecommerce - getLast2WeeksOrders", async () => {
	const lastToWeeksOrder = await getLast2WeeksOrders()
	const twoWeeksAgo = new Date()
	twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
	expect(lastToWeeksOrder.filter((order) => isBefore(order.timestamp, twoWeeksAgo)).length).toBeFalsy()
})
test("Ecommerce - bucketOrdersByDate", async () => {
	const ordersByDate = await bucketOrdersByDate(MOCK_ORDERS)
	const twoWeeksAgo = new Date()
	twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
	const newOrder = MOCK_ORDERS.find((order) => !isBefore(order.timestamp, twoWeeksAgo))
	const oldOrder = MOCK_ORDERS.find((order) => isBefore(order.timestamp, twoWeeksAgo))
	if (newOrder) {
		expect(ordersByDate[new Date(newOrder.timestamp).toDateString()]?.length).toBeTruthy()
	}
	expect(ordersByDate[new Date(oldOrder.timestamp).toDateString()]?.length).toBeFalsy()
})
