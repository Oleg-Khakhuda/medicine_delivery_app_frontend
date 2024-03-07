import './App.css';
import { ShopsPage } from './pages/ShopsPage/ShopsPage';
import { CartPage } from './pages/CartPage/CartPage';
import { ProductListByShop } from './components/ProductListByShop/ProductListByShop';
import { Navigation } from './components/Navigation/Navigation';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <main>
      <Routes>
        <Route path="/medicine_delivery_app_frontend" element={<ShopsPage />}>
          <Route path="/:shopId" element={<ProductListByShop />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
