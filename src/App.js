import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Company</Link>
        <Link to="/">Contact</Link>
      </div>
      <Routes>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Company">
            <Company />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
      </Routes>
    </Router>
  )
}

export default App