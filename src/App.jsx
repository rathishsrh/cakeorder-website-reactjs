import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import { Layout } from "./Layout"
import { Body } from "./components/Body"
export let App=()=>{

    let myRouter=createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element:<Body/>
                },
              ]}
            ]
        
    )

    
  return (<RouterProvider router={myRouter}/>)

}
