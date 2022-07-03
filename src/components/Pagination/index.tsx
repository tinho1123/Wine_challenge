import React from 'react'
import { Paginate } from './styles'

interface IPagination{
  limit?: number;
  total?: number;
  offset?: number;
  setOffset?: (count: number) => void;
  switchPage?: (offset: number) => void
}

const MAX_ITEMS = 3
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const Pagination = (props: IPagination) => {
  const current = props.offset ? (props.offset / props.limit!) + 1 : 1
  // const pages = Math.ceil(props.total / props.limit)
  const first = Math.max(current - MAX_LEFT, 1)

  return (
    <Paginate>
      {Array.from({ length: MAX_ITEMS })
        .map((_item, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => {
                props.setOffset!((page - 1) * props.limit!)
                props.switchPage!(page)
              }}
              className={page === current ? 'pagination__item--active' : 'pagination__item'}
            >
              {page}
            </button>
          </li>
        ))}
    </Paginate>
  )
}

export default Pagination
