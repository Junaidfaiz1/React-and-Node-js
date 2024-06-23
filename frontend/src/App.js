import { Route,  BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route index element={<Nav />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
