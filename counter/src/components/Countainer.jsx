import React from 'react'

function Countainer({children}) {
  return (
    <div>

    <div className="card">
      <div className="card-body">
      {children}
      </div>
    </div>
  
    </div>
  )
}

export default Countainer
