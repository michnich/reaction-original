Meteor.publish('userProductsByUser', function(userId) {
	check(userId, String);
	return userProducts.find({"userId": userId});
});