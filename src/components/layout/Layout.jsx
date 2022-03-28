import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='py-10 h-screen bg-zinc-900'>
            {children}
        </div>
    )
}

export default Layout