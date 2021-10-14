import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return <>
        <Link to="/">Home</Link>          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page1">Page 1</Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page2">Page 2</Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page3">Page 3</Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page4">Page 4</Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
}

export default Header;