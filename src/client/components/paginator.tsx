import Pagination from 'react-bootstrap/Pagination'
import React, { ElementType } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store/store'
import { limits } from '../variables/variables'
import { fetchTasks } from '../store/thunks/api'
import { selectPage } from '../store/slices/paginator'

const CardsPaginator: React.FunctionComponent<unknown> = () => {

    const dispatch = useDispatch()
    const cardsCount = parseInt(useSelector((state: RootState) => state.tasks.cardsCount).toString())
    const cardsAvailable = useSelector((state: RootState) => state.tasks.cards)
    const currentPage = useSelector((state: RootState) => state.page.page)

    const handleClick = (pageNumber: number) => {

        const offset =  (pageNumber - 1) * limits
        
        console.log(pageNumber);
        

        dispatch(fetchTasks({ limits: limits, offset: offset}))
        dispatch(selectPage(pageNumber))
      
            
    }

    const pageCount = Math.ceil(cardsCount/3)

    const items: React.JSX.Element[] = [];

    for (let number = 1; number <= pageCount; number++) {
        items.push(
          <Pagination.Item
           key={number}
           active={number === currentPage}
           onClick={(event) => handleClick(number)}>
            {number}
          </Pagination.Item>,
        )
    }

    return(
        <Pagination>{items}</Pagination>  
    )
}

export default CardsPaginator
