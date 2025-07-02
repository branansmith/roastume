import HomePage from './components/HomePage';
import ResumeRoastPage from './components/ResumeRoastPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/results" element={<ResumeRoastPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;