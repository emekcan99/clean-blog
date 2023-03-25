import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage";
import AddPost from "./components/addPost";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from "./components/navi";
import Profile from "./components/profile";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navi></Navi>
        <Routes>
          <Route path="/" exact element={<Homepage></Homepage>}></Route>
          <Route path="/add-post" exact element={<AddPost></AddPost>}></Route>
          <Route path='/profile' exact element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
