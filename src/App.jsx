import AddTodo from "./components/AddTodo";
import { PostsList } from "./components/PostsList";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold text-green-700">
        Add Todos with Redux-Toolkit
      </h1>
      <AddTodo />
      <Todos />
      <PostsList/>
    </>
  );
}

export default App;
