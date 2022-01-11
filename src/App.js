import "./styles.css";

//useSelector is a hook from react redux
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./Redux/actions.js";
export default function App() {
  // We can select specific keys from an object using useselector

  // useSelector help us in selective rendering

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter value is {counter}</h1>
      <button
        onClick={() => {
          dispatch(addTodo(1));
        }}
      >
        Click here to add
      </button>

      <button
        onClick={() => {
          dispatch(addTodo(-1));
        }}
      >
        Click here to substract
      </button>
    </div>
  );
}
