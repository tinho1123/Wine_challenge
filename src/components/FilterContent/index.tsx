import React from 'react'
import { FilterSearch, ListFilterSearch, CheckBoxFilterSearch } from './styles'

function FilterContent () {
  const checklist = [
    { name: 'Até R$40', check: false },
    { name: 'R$40 A R$60', check: false },
    { name: 'R$100 A R$200', check: false },
    { name: 'R$200 A R$500', check: false },
    { name: 'Acima de R$500', check: false }
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
                  <input type="radio" name="opcao" className="checkbox-round" />
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
