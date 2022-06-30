import { FilterSearch,
    ListFilterSearch, CheckBoxFilterSearch,
 } from "./styles";

const FilterContent = () => {
    const checklist = ['Até R$40', 'R$40 A R$60', 'R$100 A R$200', 'R$200 A R$500', 'Acima de R$500'];
    return (<div>
        <FilterSearch>
            <h4 className="titleSearch">Refine sua busca</h4>
            <p className="subtitleSearch">Por preço</p>
            <div>
                <ListFilterSearch>
                    <CheckBoxFilterSearch>
                        {checklist.map((item, index) => (
                            <div style={{ display: 'flex', gap: '13.72px' }}>
                                <input type='radio' name="opcao" className="checkbox-round" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </CheckBoxFilterSearch>
                </ListFilterSearch>
            </div>
        </FilterSearch>
    </div>)
}

export default FilterContent;