import ThemeContext from "./ThemeContext"

//Component consuming Context via Consumer component
const Header = () => {
    return(
        <ThemeContext.Consumer>
            {(value) => <h1 style={{color:value}}>Hello React Context</h1>}
        </ThemeContext.Consumer>
       
    )
}


export default Header