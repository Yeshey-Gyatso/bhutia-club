"use client"
import { Toaster } from "react-hot-toast"
import { RecoilRoot } from "recoil"
import Navbar from "../components/navbar"

export default function HomeLayout({ children }: {
    children: React.ReactNode
  }){
    return (<div>
        <RecoilRoot>
        <div>{children}</div>
        </RecoilRoot>
        
        
        <Toaster toastOptions={{
            style:{
                background: "rgb(51 65 85)",
                color:"#fff",
            },
        }}/>
    </div>)
}