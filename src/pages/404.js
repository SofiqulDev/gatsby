import React from "react"
import { Link } from 'gatsby'

export default function Home() {
    return (
            <>
                <h1 className="text-cemter">404</h1>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/about">About</Link>
            </>
    )
}
