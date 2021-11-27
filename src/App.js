import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Post from './components/Post';
import Project from './components/Project';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route element={<Home/>} path='/' />
    <Route element={<About/>} path='/about' />
    <Route element={<SinglePost/>} path='/post/:slug' />
    <Route element={<Post/>} path='/post' />
    <Route element={<Project/>} path='/project' />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
