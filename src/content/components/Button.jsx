/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from "react"
import { Context } from "../../store/Context"
import PropTypes from "prop-types"

const styles = css`
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: flex-end;

    .button {
        padding: 20px;
        cursor: pointer;
    }
`

export default function Button ({
    label,
}) {

    const { isSidebarOpen, setIsSidebarOpen } = useContext(Context)

    const handleClickMoveSidebar = () => {
        console.log("sidebar", isSidebarOpen);
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div css={styles}>
            <button 
                className='button'
                onClick={handleClickMoveSidebar}
            >
                {label}
            </button>
        </div>
    )
}

Button.propTypes = {
    label : PropTypes.string.isRequired,
}