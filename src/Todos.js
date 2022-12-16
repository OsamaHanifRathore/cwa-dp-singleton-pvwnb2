const todos = [];
// let instance = null;

// class Todos {
//   constructor() {
//     if (instance !== null) {
//       throw new Error('You can only have one instance of Todos');
//     }
//     instance = this;
//   }
//   getInstance() {
//     return instance;
//   }
//   getTodos() {
//     return todos;
//   }
//   addTodo(todoText) {
//     todos.push(todoText);
//   }
// }

const TodosStore = {
  getInstance() {
    return instance;
  },
  getTodos() {
    return todos;
  },
  addTodo(todoText) {
    todos.push(todoText);
  },
};

// const todosInstance = new Todos();
Object.freeze(TodosStore);

export default TodosStore;
