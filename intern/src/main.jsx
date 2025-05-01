import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Admin from './components/Admin/Admin'
import Login from './components/Admin/Login/Login'
import Work from './components/Work/Work'
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
      <Route path="login" element={<Login />} />
      <Route path="work" element={<Work />} />

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
