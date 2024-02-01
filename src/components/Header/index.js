import styled from 'styled-components';
import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';

const StyledHeader = styled.header``

function Header(){
    return(
        <StyledHeader>
            <Logo/>
            <OptionsHeader/>
            <Icons/>
        </StyledHeader>
    )
}

export default Header