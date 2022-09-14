import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import { Home, About, Contact, Pricelist } from './Pages';
import { GlobalStyle } from './Styled';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pricelist' element={<Pricelist />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
