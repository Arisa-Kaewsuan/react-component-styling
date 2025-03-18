/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CiFaceFrown, CiWarning, CiCircleInfo } from "react-icons/ci";
import { FiCheckCircle } from "react-icons/fi";


// Start coding here
function Alert({type}) {
    const typeClasses = {
        error: css `
            background: #F9C9C7;
        `,
        warning: css `
            background: #F7DBC4;
        `,
        info: css `
            background: #F6ECC7;
        `,

        success: css `
            background: #CFF8CA;
        `};

    const messages = {
        error: "This is error alert box",
        warning: "This is a warning!",
        info: "Here is some information!",
        success: "Operation successful!",
    };

    const icon = {
        error: <CiFaceFrown color="red"/>,
        warning: <CiWarning color="#D9824C"/>,
        info: <CiCircleInfo color="#D5A144"/>,
        success: <FiCheckCircle color="green"/>,
    };

    const mainType = css`
        display: flex;
        align-items: center;
        padding: 16px;
        margin: 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        width: 85%;
        height: 1/4;
        color: #444542;
        ${typeClasses[type]};
    `;

    return (
        <div 
        css={mainType}>
           {icon[type]}{messages[type]}
        </div>
    );
}

export default Alert;