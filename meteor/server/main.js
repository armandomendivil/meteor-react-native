
const Todo = new Meteor.Collection('todo');

Meteor.publish('todo', function () {
    return Todo.find();
});

Meteor.methods({
    getTodo(id) {
        return Todo.findOne(id);
    },
    getTodos() {
        return Todo.find().fetch();
    },
    addTodo(message) {
        return Todo.insert({message: message});
    },
    removeTodo(id) {
        return Todo.remove({_id: id});
    },
    editTodo(id, finished) {
        return Todo.update({_id: id}, {$set: {finished: finished}});
    }
});

Todo.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
