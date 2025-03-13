import './App.css';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';


function App() {
  
  const rootRouter = createBrowserRouter (
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="services" element={<Services/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={rootRouter}/>
  );
}

export default App;
