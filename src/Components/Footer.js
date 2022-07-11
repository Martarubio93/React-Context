import ThemeContext from "../ThemeContext"

const Footer = () => {
    return (
        <ThemeContext.Consumer>
            {(value) => <small style={{color:value}}>Developed by Marta Rubio</small>}
        </ThemeContext.Consumer>
   
    )
}
export default Footer