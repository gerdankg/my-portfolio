
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./cmp/Home";
import About from "./cmp/About";
import SinglePost from "./cmp/SinglePost";
import Post from "./cmp/Post";
import Project from "./cmp/Project";
import NavBar from './cmp/Navbar'


function App() {
  return (
 
  <BrowserRouter>
  <NavBar/>
    <Switch>
    <Route component={Home}  exact path='/'/>
      <Route component={About} path='/about'/>
          <Route component={SinglePost}   path='/post/:slug'/>
            <Route component={Post} path='/post'/>
                   <Route component={Project} path='/project'/>
            
    </Switch>

  </BrowserRouter>

  );
}

export default App;
