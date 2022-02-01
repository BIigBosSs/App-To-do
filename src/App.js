import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App" id="main-content">
      <h1 id="main-title">My Reminders</h1>
      <TodoInput /> 
      <TodoList /> 
    </div>
  );
}

export default App;
