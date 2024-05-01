import './App.css';
import { useNavigate, Route, Routes, Switch} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Signup from './Dashboard/Signup';
import Login from './Dashboard/login';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        
      </Routes>

      
    </div>
  );
}

export default App;
