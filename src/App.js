import logo from './logo.svg';
import './App.css';
import Recipe_Header from './components/Recipe_Header';
import Recipe_Ingredients from './components/Recipe_Ingredients';
import Recipe_Instructions from './components/Recipe_Instructions';

function App() {
  return (
    
      <div className="container1">
        <Recipe_Header />
        <Recipe_Ingredients />
        <Recipe_Instructions />
      </div>
  );
}

export default App;
