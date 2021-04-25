import React from 'react'

function Header() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top" style={{boxShadow:"0px 0px 10px 5px rgba(41,41,41,.55)"}}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"><strong style={{color:"wheat"}}>OpenNews</strong></span>
                </div>
            </nav>
        </>
    )
}

export default Header
