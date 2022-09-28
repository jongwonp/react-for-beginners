import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ''){
      return;
    }
    setTodos(currentArray => [toDo, ...currentArray])
    setTodo('');
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
         onChange={onChange}
         value={toDo}
         placeholder="Write your to do..." />
         <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}><input type="checkbox"></input>{item} <button>X</button> </li>)} 
      </ul>
    </div>
  );
}

export default App;

// 리스트에서 삭제하는 기능, 완료한 내용 취소선 긋는 기능 추가하기