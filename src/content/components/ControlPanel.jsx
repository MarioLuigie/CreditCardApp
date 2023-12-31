/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from "prop-types"
import { useContext } from "react"
import { Context } from "../../store/Context"
import { creditCardsActions } from '../../constants/actions'

const styles = css`
    width: 100%;
    height: 78px;
    position: absolute;
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: center;
    background-color: #3a3a3a7f;
    backdrop-filter: blur(4px);
    padding: 10px;

    .button {
        font-size: 22px;
        color: #75e9af;
        background-color: transparent;
        cursor: pointer;

            &:hover {
                color: #24bb70;
            }

            &--alert {
                color: #d85555;

                &:hover {
                color: #c22626;
            }
        }
    }
`

export default function ControlPanel ({
    label,
    icons,
    isIcon,
    cardId,
    clickButton
}) {

    const { DELETE_CARD, UPDATE_CARD } = creditCardsActions
    // console.log(DELETE_CARD);

    const {
        isModalOpen,
        setIsModalOpen,
        handleOpenModal,
    } = useContext(Context)

    return (
        <div css={styles}>
            <button 
                className='button button--alert'
                onClick={clickButton(DELETE_CARD, {cardId : cardId})}
            >
                {isIcon ? icons.deleteIcon : label}
            </button>
            <button 
                className='button'
                onClick={handleOpenModal(true, cardId)}
            >
                {isIcon ? icons.editIcon : label}
            </button>
        </div>
    )
}

ControlPanel.propTypes = {
    label : PropTypes.string,
    icons : PropTypes.object,
    isIcon : PropTypes.bool.isRequired,
    cardId : PropTypes.string,
    clickButton : PropTypes.func.isRequired,
}