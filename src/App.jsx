import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Click from './Component/Page-1/Click-To-Call'
import Customize_Call_Button from './Component/Page-1/Customize_Call_Button';

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Customize_Call_Button />} />
          <Route path="Click-To-Call" element={<Click />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
