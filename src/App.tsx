import './App.css';
import {  SubmittButton } from './styles';
function App() {
  return (
    <div className='App'>
        <h1>Hello World</h1>
        <SubmittButton $primary={true}>Primary</SubmittButton>
    </div>
  );
}

export default App;
