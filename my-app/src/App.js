import './App.css';
import User from './components/User'
import Followers from './components/Followers'

function App() {
  return (
    <div className="App">
      <h1>GitHub User-card</h1>
    <User/>
    <Followers/>
    </div>
  );
}

export default App;
