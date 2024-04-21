import './App.css'
import BrazilJJ from './CLASSES/BrazilJJ'
import Fit from './CLASSES/Fit'
import KLB from './CLASSES/KLB'
import Yoga from './CLASSES/Yoga'
import MuayThai from './CLASSES/MuayThai'
import About from './component/About'
import Class from './component/Class'
import Footer from './component/Footer'
import Gallery from './component/Gallery'
import Home from './component/Home'
import NavBar from './component/NavBar'
import NewsLetter from './component/NewsLetter'
import SocialMedia from './component/SocialMedia'
import Store from './component/Store'
import Team from './component/Team'
import Testimonal from './component/Testimonal'
import { Routes, Route } from 'react-router-dom'
import Schedule from './data/Schedule'
import AboutUs from './component/AboutUS'
import Membership from './component/MemberShip'
import Merch from './appareal/Merch'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abt' element={<About />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/membership' element={<Membership />}/>
        <Route path='/class' element={<Class />} />
        <Route path='/store' element={<Store />} />
        <Route path='/shop' element={<Merch />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/testimonal' element={<Testimonal />} />
        <Route path='/newsletter' element={<NewsLetter />} />
        <Route path='/socialmedia' element={<SocialMedia />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/muaythai' element={<MuayThai />} />
        <Route path='/fit' element={<Fit />} />
        <Route path='/brazilianjj' element={<BrazilJJ />} />
        <Route path='/klb' element={<KLB />} />
        <Route path='/yoga' element={<Yoga />} />
      </Routes>
    </>
  )
}

export default App