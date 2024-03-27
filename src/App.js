import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import ProductList from './Components/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationForm />} />
        <Route path='/productList' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
