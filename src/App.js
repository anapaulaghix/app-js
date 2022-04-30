import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Doar from './components/pages/Doar'
import Receber from './components/pages/Receber'


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Doar" element={<Doar />} />
          <Route path="/Receber" element={<Receber />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
