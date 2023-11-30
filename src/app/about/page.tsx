"use client"
import { RecoilRoot } from 'recoil'
import { metadata } from '../layout'
import AboutPage from './aboutPage'


export default function Home() {
  return (
   <RecoilRoot>
    <AboutPage/>
    </RecoilRoot>
   
  
  )
}
