import { Mongo } from "meteor/mongo";
import { UserProducts } from "/lib/collections";

Meteor.publish('userProductsByUser', function(userId) {
	return UserProducts.find({"userId": userId});
});