import React, { useEffect, useRef } from "react"
import "./HeaderSearch.scss";
const places = require('places.js');


export const HeaderSearch = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    places({
      container: inputRef.current
    });
  }, [])

  return (
    <header className="app-header">
      <input ref={inputRef} placeholder="Search address here.."/>
    </header>
  )
}
