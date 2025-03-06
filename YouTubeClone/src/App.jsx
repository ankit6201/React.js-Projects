
import {Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
function App() {

  return (
    <>
     <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/video/:categoryId/:videoId' element = {<Video/>}></Route>
      </Routes>
     </div>
    </> 
  )
}

export default App
 