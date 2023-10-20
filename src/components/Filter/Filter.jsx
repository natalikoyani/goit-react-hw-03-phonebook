import { StyledTitle, StyledFilter } from "./Filter.styled";

export const Filter = ({ items, onChange }) => {
    if (items.length === 0) {
        return (
            <>
            <StyledTitle>There are no contacts yet!</StyledTitle>
            </>)
    }
    
    return (
        <>
            <StyledTitle>Find contacts by name</StyledTitle>
            <StyledFilter type="string" name="filter" onChange={onChange} />
        </>
    )
}