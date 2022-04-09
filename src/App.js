import logo from './logo.svg';
import './App.css';
import Recipe_Header from './components/Recipe_Header';
import Recipe_Ingredients from './components/Recipe_Ingredients';
import Recipe_Servings from './components/Recipe_Servings';
import Recipe_Instructions from './components/Recipe_Instructions';

function App() {
  return (
    
      <div className="container1">
        <Recipe_Header />
        <div className="containersec">
          <Recipe_Ingredients />
          <Recipe_Servings /> 
        </div>
        <div className="container3">
          <Recipe_Instructions />
        </div>
      </div>
  );
}

export default App;
