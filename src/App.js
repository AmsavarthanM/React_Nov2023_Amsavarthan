
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './home';
import Register from './component/register';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignInSide from './component/login';
import './App.css'
function App() {
  return (
    <div className="App" style={{ backgroundColor:'rgba(194, 237, 229, 0.824)'}}>
      <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/log' element={<SignInSide/>}/>
           <Route path='/reg' element={<Register/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;