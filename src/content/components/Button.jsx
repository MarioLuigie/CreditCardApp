/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/react'
import { useContext } from "react"
import { Context } from "../../store/Context"
import PropTypes from "prop-types"

const styles = css`
    position: absolute;
    top: 0;
    right: -65px;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    /* background-color: red; */

    .button {
        height: 65px;
        aspect-ratio: 1;
        padding: 20px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: #ffffffd5;
        cursor: pointer;
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #163c68;
    }
`

export default function Button () {

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
                {!isSidebarOpen 
                    ? <FontAwesomeIcon icon={faChevronRight} /> 
                    : <FontAwesomeIcon icon={faChevronLeft} />
                }
            </button>
        </div>
    )
}

Button.propTypes = {
    position : PropTypes.string,
}