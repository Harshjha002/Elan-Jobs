import React, { ReactNode } from 'react'

const Clerklayout = ({children} : {children : ReactNode}) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {children}
    </div>
  )
}

export default Clerklayout
