import ThemeContext from "../ThemeContext"
import React from "react"

//Component consuming Context via React's useContext Hook

const Main = () => {
    const color = React.useContext(ThemeContext)
    return(
            <p style={{color}}>Practicing React context :)</p>
   
       
    )
}


export default Main