import { nanoid } from "nanoid";
import { StyledList, StyledButton } from "./ContactList.styled";

export const ContactList = ({ items, onDelete }) => {

    return(
            <StyledList>
                {items.map(item => {
                    return (
                        <li key={nanoid()}>{item.name}: {item.number} <StyledButton type="button" onClick={() => onDelete(item.id)}>Delete</StyledButton></li>
                    )
                })}
            </StyledList>
    )
}