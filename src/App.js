
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './Navbar';
import Create from './Create';
import Contact from './components/Contact';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/create" element={<Create />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
