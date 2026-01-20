import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Sponsors from './pages/Sponsors'
import Home from './pages/Home'
import Events from './pages/Events'
import Jobs from './pages/Jobs'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App