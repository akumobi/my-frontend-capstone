import React from 'react'
import style2 from "../components/topnavbar.module.css"

export default function SearchBar({holder, title, handle}) {
  return (
    <div>
        <input type="text" name="search" required className={`${style2.searchBar} ${style2.wInput}`} placeholder={holder} defaultValue={title} onChange={handle}/>
        <input type="submit" name="search" value="search" className={`${style2.searchButton} ${style2.wButton}`}/>
    </div>
  )
}
