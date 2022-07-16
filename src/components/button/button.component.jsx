
import './button.styles.scss'
const BUTTON_TYPE = {
    ggl: 'google-sign-in',
    inv: 'inverted'
}

const Button = ({ children, bType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE[bType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;