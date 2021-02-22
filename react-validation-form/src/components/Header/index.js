import React from 'react'
import { HeaderContainer } from './styles'
import LogoSynvia from '../../assets/logo.png'

const Header = () => {
    return(
        <HeaderContainer>
            <img src={LogoSynvia} alt="logo"/>
        </HeaderContainer>
    )
}
export default Header