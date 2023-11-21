import { Toaster } from "react-hot-toast"

export default function AdminLayout({ children }: {
    children: React.ReactNode
  }){
    return (<div>
        <div><h1>this is admin header</h1></div>
        <div>{children}</div>
        <div><h1>this is admin footer</h1></div>
        <Toaster toastOptions={{
            style:{
                background: "rgb(51 65 85)",
                color:"#fff",
            },
        }}/>
    </div>)
}