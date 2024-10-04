import './App.css'
import Header from './components/header/header'
import Accessible from './components/section-accessible/accessible'
import Download from './components/section-download/download'
import SectionHome from './components/section-home/home'
import Services from './components/section-services/services'

export default function App() {
  return (
    <>
      <Header />
      
      <SectionHome />

      <Services />

      <Accessible />

      <Download />
    </>
  )
}