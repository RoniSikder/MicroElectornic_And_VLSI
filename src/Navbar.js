import React, { Children } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="main">
        <Link className='title' to="/">Home</Link>
        <div className="sub_content">
            <ul>
                <CustomLink to="/Page_One">Page one</CustomLink>
                <CustomLink to="/Page_Two">Page Two</CustomLink>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar


function CustomLink({to,children,...props}){
  const path = useResolvedPath(to)
  const isActive = useMatch({path:path.pathname,end:true})
  return(
    <li className={isActive?"active":""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}