import Image from 'next/image'
import Footer from './components/footer'
import Landing1 from './components/landing1'
import Landing2 from './components/landing2'
import Landing3 from './components/landing3'

export default function Home() {
  return (<div>
    <Landing1/>
    <Landing2/>
    <Landing3/>
    <Footer/>
  </div>
  )
}
