import React from 'react'

import {useSelector} from 'react-redux'
function Displaycounter() {
  const counterr = useSelector(store=>store.counter)
  return (
<>
<strong> Counter Value : {counterr}</strong>
</>
  )
}


export default Displaycounter
