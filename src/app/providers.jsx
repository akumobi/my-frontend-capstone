"use client"
import { createContext, useState } from "react"

const SidebarContext = createContext()
const SidebarProvider = ({children}) => {
    const [cart, setCart] = useState(0)
    const [cartOpen, setCartOpen] =  useState(false)
  return (
    <SidebarContext.Provider value={{cart, setCart,cartOpen, setCartOpen}}>
        {children}
    </SidebarContext.Provider>
  )
}
export  {SidebarProvider, SidebarContext}