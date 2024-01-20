
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Navbar from './components/Navbar'
import Read from './Page/Read'
import About from './Page/About'
import Footer from './Page/Footer'
function App() {
  return (
    <>
      <div className="container-fluid bg-dark text-light p-2">
         <div className="container">
         <Navbar/>
         </div>
      </div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/read/:id' element={<Read/>}/>
          <Route path='/a' element={<About/>}/>
       </Routes>
         <Footer/>
      </>
    
    
  )
}

export default App
