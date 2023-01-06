import './App.css';
import NavigationComponent from './components/navbar/NavigationComponent';
import About from './components/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <About></About>
    </div>
  );
}

export default App;
