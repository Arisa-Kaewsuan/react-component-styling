// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function Alert({ msg, alert }) {
  const errorAlertStyle = css`
    background-color: #f8d7da;
    color: #842029;
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `;
  
  const warningAlertStyle = css`
    background-color: #fff3cd;
    color: #664d03;
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `;

  const infoAlertStyle = css`
    background-color:rgb(192, 226, 227);
    color: #664d03;
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `;

  const successAlertStyle = css`
  background-color:rgb(176, 237, 200); /* Same as error for now */
  color: #842029;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const getAlertStyle = () => {
    if (alert === "error") {
      return errorAlertStyle;
    } else if (alert === "warning") {
      return warningAlertStyle;
    } else if (alert === "info") {
      return infoAlertStyle;
    } else if (alert === "success") {
      return successAlertStyle;
    } else if (alert === "danger") {
      return dangerAlertStyle;
    }
  };

  return (
    <div css={getAlertStyle()}>{msg}</div>
  );
}

export default Alert;
