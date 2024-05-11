import Home from "./components/Home";
import Tour from "./components/Tour";
import {Route, Routes} from "react-router-dom"
import NotFound from "./components/NotFound";


function App() {
  return (
    <> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tour/:tourId" element={<Tour/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  </>
  );
}

export default App;
