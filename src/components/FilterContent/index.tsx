import React from 'react'
import { FilterSearch, ListFilterSearch, CheckBoxFilterSearch } from './styles'

interface IFilterContent{
  filterPage?: (filter: string) => void
}

function FilterContent (props: IFilterContent) {
  const checklist = [
    { name: 'Até R$40', check: false, req: '0-40' },
    { name: 'R$40 A R$60', check: false, req: '40-60' },
    { name: 'R$100 A R$200', check: false, req: '100-200' },
    { name: 'R$200 A R$500', check: false, req: '200-500' },
    { name: 'Acima de R$500', check: false, req: '500-500' }
  ]
  return (
    <div>
      <FilterSearch>
        <h4 className="titleSearch">Refine sua busca</h4>
        <p className="subtitleSearch">Por preço</p>
        <div>
          <ListFilterSearch>
            <CheckBoxFilterSearch>
              {checklist.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '13.72px' }}>
                  <input
                    type="radio"
                    name="opcao"
                    className="checkbox-round"
                    onClick={() => props.filterPage!(item.req)} />
                  <p>{item.name}</p>
                </div>
              ))}
            </CheckBoxFilterSearch>
          </ListFilterSearch>
        </div>
      </FilterSearch>
    </div>
  )
}

export default FilterContent
