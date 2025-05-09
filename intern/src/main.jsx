import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Admin from './components/Admin/Admin'
import Login from './components/Admin/Login/Login'
import Work from './components/Work/Work'
import Message from './components/Message/Message'
import Carousel from './components/Carousel/Carousel'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
// import About from './components/About/About'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
      <Route path="about" element={<About />} />
      <Route path="message" element={<Message />} />
      <Route path="login" element={<Login />} />
      <Route path="work" element={<Work />} />
      <Route path="carousel" element={<Carousel />} />

      <Route element={<ProtectedRoutes />}>
      <Route path="admin" element={<Admin />} />
      </Route>
      
      {/* <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />
      <Route path="user/:userid" element={<User />}>
      </Route>
      <Route path="githubsearch" element={<Githubsearch />} /> */}
    </Route>
 )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)





{/* <AnimatePresence mode="wait">
<motion.div
    key={currentImage}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="mb-4 w-full max-w-2xl overflow-hidden rounded-lg shadow-lg"
>
    <img
        src={images[currentImage]}
        alt={`Gallery image ${currentImage + 1}`}
        className="w-full h-full"
    />
</motion.div>
</AnimatePresence>


<img
className='absolute rounded-xl w-full h-full shadow-md shadow-amber-400'
src={images[currentImage]}
alt="certificates" /> */}