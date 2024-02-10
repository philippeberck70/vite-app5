import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './components/Home'
import Exercices from './components/Exercices'
import Contact from './components/Contact'
import NoPage from './components/NoPage'
import Exercice from "./components/Exercice"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exercices" element={<Exercices />} />
          <Route path="exercices/:id" element={<Exercice />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
