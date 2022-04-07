import './App.css';
import Navigation from './components/Navigation/Navigation';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
   <Router>
     <GlobalStyle/>
     {/* <Navigation/> */}
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/chat" element={<Chat/>} />
     </Routes>
   </Router>
  );
}

export default App;
