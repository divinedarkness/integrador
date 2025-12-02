import { StyledButton } from "./style";
import { MagnifyingGlass } from "@phosphor-icons/react"

export function Button({ handleClick, children }) {
    return <StyledButton onClick={handleClick}> <MagnifyingGlass size={32} />

        procurar</StyledButton>
};