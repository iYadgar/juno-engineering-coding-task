////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import {allIds, fetchOrderById} from "../api/index.js";
import {isBefore}               from "date-fns";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

const getUniqueArrayFromObjectsArray = (array, key) => Array.from(new Set(array.map((value) => value[key])))

export const fetchAllOrders = async () => {
	const ids = allIds;
	// .....
	//   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
	const ordersPromises = ids.map((id) => fetchOrderById(id))
	return Promise.all(ordersPromises)
};

export const bucketOrdersByUsers = async (orders = []) => {
	//   2. TODO: using the function from section 1 you should now bucket the orders by user.
	// each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
	const allOrders = orders.length ? orders : await fetchAllOrders()
	const uniqueUserIds = getUniqueArrayFromObjectsArray(allOrders, 'userId')
	return uniqueUserIds.reduce((acc, userId) => {
		acc[userId] = allOrders.filter((order) => order.userId === userId)
		return acc
	}, {});
};

export const getLast2WeeksOrders = async (orders = []) => {
	//   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.c
	const allOrders = orders.length ? orders : await fetchAllOrders()
	const twoWeeksAgo = new Date()
	twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
	return allOrders.filter((order) => !isBefore(order.timestamp, twoWeeksAgo))
};

export const bucketOrdersByDate = async () => {
	//   4. TODO: using the function from section 3 bucket the orders by date.
	// each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
	const lastTwoWeeksOrders = await getLast2WeeksOrders()
	const uniqueTimestamps = getUniqueArrayFromObjectsArray(lastTwoWeeksOrders, 'timestamp')
	return uniqueTimestamps
		.reduce((acc, timestamp) => {
					acc[new Date(timestamp).toDateString()] = lastTwoWeeksOrders.filter((order) => order.timestamp === timestamp)
					return acc
				}
			, {});
};


// fetchAllOrders()
// 	.then((data) => {
// 		console.log(data);
// 		console.log(`****** fetchAllOrders  ******`);
// 	});
// bucketOrdersByUsers()
// 	.then((data) => {
// 		console.log(data);
// 		console.log(`****** bucketOrdersByUsers  ******`);
// 	});
// getLast2WeeksOrders()
// 	.then((data) => {
// 		console.log(data);
// 		console.log(`****** getLast2WeeksOrders  ******`);
// 	});
bucketOrdersByDate()
	.then((data) => {
		console.log(data);
		console.log(`****** bucketOrdersByDate  ******`);
	});

//////////////////////////////////////
