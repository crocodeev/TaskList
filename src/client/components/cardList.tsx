import React from 'react'
import CardTask from './cardTask'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { limits } from '../variables/variables'

const CardList: React.FunctionComponent<unknown> = () => {

    const cards = useSelector((state: RootState) => state.tasks.cards)
    const currentPage = useSelector((state: RootState) => state.page.page)

    const offset =  (currentPage - 1) * limits

    const toShow = cards.slice(offset, offset + limits)

    return(
        <>
        {toShow.map(card => <CardTask key={card.id} card={card}/>)}
        </>
    )
}

export default CardList