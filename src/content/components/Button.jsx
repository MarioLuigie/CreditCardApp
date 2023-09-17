/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from "prop-types"

const styles = (addStyles) => css`
    width: 100%;

    .button {
        width: ${addStyles ? addStyles.fontWidth : "auto"};
        background-color: ${addStyles ? addStyles.backgroundColor : "transparent"};
        padding: 10px;
        font-size: ${addStyles ? addStyles.fontSize : "25px"};
        color: ${addStyles ? addStyles.fontColor : "#696969"};
        border-radius: 5px;
        cursor: pointer;
        box-shadow: ${addStyles ? addStyles.boxShadow : "none"};
        transition: all 0.1s ease-in-out;

        &:hover {
            background-color: ${addStyles ? addStyles.hoverBackgroundColor : "transparent"};
            color: ${addStyles ? addStyles.hoverColor : "#202020"}
        }

        &:active {
            transform: scale(0.95);
        }
    }
`

export default function Button ({
    label,
    icon,
    isIcon,
    onHandle,
    addStyles,
}) {

    return (
        <div css={styles(addStyles)}>
            <button 
                className='button'
                onClick={onHandle}
            >
                {isIcon ? icon : label}
            </button>
        </div>
    )
}

Button.propTypes = {
    label : PropTypes.string.isRequired,
    icon : PropTypes.object,
    isIcon : PropTypes.bool.isRequired,
    onHandle : PropTypes.func.isRequired,
    addStyles : PropTypes.object,
}