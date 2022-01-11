import { useState } from "react";
import {

  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR

} from "../Redux/actionTypes"
export const Todos = () => {
  const [text, setText] = useState("");
  const { loading, todos, error } = useSelector((state) => ({
    Loading: state. loading,
    todos: state. todos,
    error: state.error,
    
    }));
    const dispatch = useDispatch();
    

  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setText(e.target.value)}
      />

<button
onClick={() => {
dispatch(addTodoLoading());
fetch("http://localhost:3001/todos", {
method: "POST",
body: JSON.stringify({ status: false, title: text ),
})
.then((d) => d.json())
.then((res)
//success
dispatch(addTodoSuccess(res));
I
.catch((err) => {
// error
dispatch(addTodoError();
});
}}
></button>
    </div>
  );
};
