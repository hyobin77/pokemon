import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to="/">홈</Link> | <Link to ="/about">소개</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/ > } />
      </Routes>
    </>
    
  )
}

const Home = () => <h2>홈 페이지</h2>
const About = () => <h2>소개 페이지</h2>
export default App
