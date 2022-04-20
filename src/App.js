import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Container from './components/layout/Container'


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Quem Somos</Link>
      </div>
      <Container customClass='min-height'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App
