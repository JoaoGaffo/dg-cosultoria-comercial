import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsappButton from './components/WhatsappButton.jsx'
import Home from './pages/index.jsx'
import Sobre from './pages/Sobre.jsx'
import Servicos from './pages/Servicos.jsx'
import Portfolio from './pages/Porfolio.jsx'
import Contato from './pages/Contato.jsx'
import MetodoDG from './pages/MetodoDG.jsx'
import Livro from './pages/Livro.jsx'
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/metodo-dg" element={<MetodoDG />} />
          <Route path="/livro" element={<Livro />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  )
}