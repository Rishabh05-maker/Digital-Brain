import React from 'react'
import './ScreenMode.css'
import { SiDarkreader } from "react-icons/si";

function ScreenMode  () {
    var element = document.body;
   element.classList.toggle("dark-mode")
  return (
    <div>
      <button onClick={ScreenMode}><SiDarkreader /></button>
    </div>
  )
}

export default ScreenMode
