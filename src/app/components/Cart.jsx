"use client"
import { useContext } from "react"
import { SidebarContext } from "../providers"

export default function Cart() {

    const {cartOpen} = useContext(SidebarContext)
  return (
    <>
    {
        cartOpen &&
        <aside className="absolute w-3/5  rounded-lg mt-10 h-[60vh] overflow-auto bg-gray-200 ml-[200px]">

    </aside>
    }
    </>
  )
}