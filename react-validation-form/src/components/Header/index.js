import React from 'react'
import { HeaderContainer } from './styles'
import LogoSynvia from '../../assets/logo.png'

const Header = () => {
    return(
        <HeaderContainer>
            <img src={LogoSynvia}/>
        </HeaderContainer>
    )
}
export default Header