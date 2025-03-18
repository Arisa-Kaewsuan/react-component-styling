// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from "react";

function Button({style, msg}) {
    const primaryStyle = css`
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        display: flex;
        `;

    const secondaryStyle = css`
        background-color: #07a4e8;
        color: white;
        margin-top: 10px;
        padding: 10px 20px;
        border: none;
        display: flex;
        `;

    return (
        <>
            <button css={style === "primary" ? primaryStyle:secondaryStyle}>{msg}</button>
        </>
    );
}

export default Button;
