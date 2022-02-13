import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import ProductsList from './component/ProductsList/ProductsList';
import SavedList from './component/Saved/SavedList';
import TopBar from './component/TopBar/TopBar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path="/" element={<ProductsList/>} />
      <Route path="/home" element={<ProductsList/>} />
      <Route path="/saved" element={<SavedList/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blogs" element={<Blogs/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
