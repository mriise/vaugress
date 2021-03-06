import { Meteor } from 'meteor/meteor';
import {groupQuery, groups} from "../groups";

// Meteor.publish('groups.all', function () {
//     return groups.find();
// });
Meteor.publish('groups.names', function () {
    return groups.find({}, {fields: {'name':1, '_id':1, 'series':1 }});
});

Meteor.publish('groups.byID', function (ID) {
    return groups.find(groupQuery(ID).find);
});