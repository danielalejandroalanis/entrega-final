import { CartProvider } from './context/CartContext';

import MainLayout from './layouts/MainLayout';
import MainRouter from './routes/MainRouter';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <CartProvider>
      <MainLayout>
      <MainRouter />
    </MainLayout>
    </CartProvider>
  )
}

export default App
