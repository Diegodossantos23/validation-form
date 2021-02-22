import React from 'react'
import Footer from '../../components/Footer'
import { FormPageContainer } from './styles'
import FormValidation from '../../components/FormValidation'
import Header from '../../components/Header'

const FormPage = () => {
    return(
        <FormPageContainer>
            <Header/>
            <FormValidation/>
            <Footer/>
        </FormPageContainer>
    )
}
export default FormPage