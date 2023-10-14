import { useDispatch } from "react-redux"
import { FilterWrapper, FilterLabel, FilterInput } from "./Filter.styled"
import { actionFilter } from "Redux/FilterSlice";

export const Filter = ({filter, onSearchContact}) => {
   const dispatch = useDispatch(); 
    return (<FilterWrapper>
  <h2>Contacts</h2>
        <FilterLabel> Find Contacts By Name</FilterLabel>
            <FilterInput type="text"  onChange={evt => dispatch(actionFilter(evt.target.value))}/>

    </FilterWrapper>)

}
