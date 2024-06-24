//build a basic toggle switch component

import { useState } from "react"

const Fifth = () => {
    const[check,setcheck]=useState(false);
  return (
    <div>
        {
            check && (
                <p>Hey ji</p>
            )
        }
        {
            check==true?<button onClick={()=>setcheck(!check)}>Hide Me</button>:<button onClick={()=>setcheck(!check)}>Show Me</button>
        }
      
    </div>
  )
}

export default Fifth
