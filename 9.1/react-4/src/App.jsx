import './App.css'
import LandingPage  from './components/LandingPage' 
import  About from './components/About'
import  Contact from './components/Contact'
import {BrowserRouter, Routes , Route , Link, Outlet} from 'react-router-dom'
function App() {

  return (
   <div className="">
    <h1>React Router Example</h1>
    
    <BrowserRouter>  
    <Routes>
      <Route path = '/' element = {<Layout/> }>
        <Route path = '/' element = {<LandingPage/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '*' element = {<ErrorPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}



function ErrorPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}


function Layout(){
  return (
    <div>
      <div className="">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
        <h1>Welcome to the Layout</h1>
      <p>This is a shared layout for all pages.</p>
      <Outlet/>
      <div className="">
        Footer|Layout
      </div>
    </div>
  );
}

export default App
