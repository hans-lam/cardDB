import './App.css';
import {BrowserRouter} from "react-router-dom";
import CardAppShell from './components/structure/CardAppShell';

function App() {
  return (
    <BrowserRouter>
      <CardAppShell />
    </BrowserRouter>
  );
}

export default App;
