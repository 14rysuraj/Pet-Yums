import './App.css'
import DogFoods from './Pages/DogFoods/DogFoods'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog-foods" element={<DogFoods/>}/>
          
        </Routes>
</Router>
    </>
  )
}

export default App
