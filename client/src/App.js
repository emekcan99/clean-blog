import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage";
import AddPost from "./components/addPost";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from "./components/navi";
import Profile from "./components/profile";
import Post from './components/post';

function App() {

  const {_id} = useParams()
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navi></Navi>
        <Routes>
          <Route path="/" exact element={<Homepage></Homepage>}></Route>
          <Route path="/add-post" exact element={<AddPost></AddPost>}></Route>
          <Route path='/profile' exact element={<Profile></Profile>}></Route>
          <Route path={`/posts/${_id}`} exact element={<Post></Post>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
