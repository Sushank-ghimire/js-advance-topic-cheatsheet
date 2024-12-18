const fetchFunction = () => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then((res) => res.json())
    .then((data) => {
      let todos = [...data];
      return todos.slice(0, 10);
    })
    .catch((error) => console.log(error.message));
};
fetchFunction().then((todos) => {
  console.log(todos);
});
