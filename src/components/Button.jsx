/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


// Start coding here
function Button({type, msg}) {
    const primaryStyle = css `
        padding: 16px;
        margin: 16px;
        gap: 8px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        background: #074EE8;
        width: 171px;
        height: 50px;
    `

    const secondaryStyle = css `
        padding: 16px;
        margin: 16px;
        gap: 8px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        background: #07A4E8;
        width: 171px;
        height: 50px;
    `

    const buttonStyle = type === "primary" ? primaryStyle : secondaryStyle;

    return (
        <button css={buttonStyle}>{msg}</button>
    )
}

export default Button;