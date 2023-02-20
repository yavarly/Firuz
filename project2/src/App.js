import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Service from './components/Service';
import Users from './components/Users';
import Form from './components/Form';
import Test from './components/Test';
import '../src/components/App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/form" element={<Form/>} />
        <Route path="/test" element={<Test/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
