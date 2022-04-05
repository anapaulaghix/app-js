import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Company">
            <Company />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Container>
      </Routes>
      <p>Footer</p>
    </Router>
  )
}

export default App
