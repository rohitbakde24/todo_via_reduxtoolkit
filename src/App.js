import logo from './logo.svg';
import './App.css';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

function App() {
  return (
    <>
    <div className="App">
    <header className="App-header">
    <TodoEditor/>
    <TodoList />
    </header>
    </div>
    </>
  );
}

export default App;
