import React from "react"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <>
      <div>Welcome from Gatsby!</div>
      <Link to="/about">About</Link>
    </>
  )
}
