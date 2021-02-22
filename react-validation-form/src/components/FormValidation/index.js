import React, {useState, useEffect} from 'react'
import { FormContainer } from './styles'
import axios from 'axios'
import { BASE_URL } from '../../constants/url';

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value });
    
    };
  
    return { form, onChange };
  };

const FormValidation = () => {
    const { form, onChange } = useForm(
        {
            firstname: "",
            lastname: "",
            profession:"",
            company:"",
            nacionality:"",
            phone: "",
            email: "",          
         })

const handleInputChange = (event) => {
            const { value, name } = event.target;
        
            onChange(value, name);
        
      };
    
      const onSubmitForm = (event) => {
        event.preventDefault();
        
        const saveDataInJSON = JSON.stringify(form)
        console.log( "Its JSON Now!", saveDataInJSON );
    
        
    };

    useEffect(()=> {
            axios.get(BASE_URL)
            
        .then((response) => {
            console.log("dados da requisiçao",response.data)
            response.data.map(onChange(response.data))
        })
        .catch(function(error){
            console.log(error)
        })  
    },[])
    
    return(
        < FormContainer onSubmit={onSubmitForm}>
            <h2>React Form</h2>
            <input
                value={form.firstname}
                name={"firstname"}
                onChange={handleInputChange}
                type={"text"}
                placeholder={"Nome"}
                pattern={"[A-Za-z]{3,}"}
                required
            />

            <input
                value={form.lastname}
                name={"lastname"}
                onChange={handleInputChange}
                type={"text"}
                placeholder={"Sobrenome"}
                pattern={"[A-Za-z]{3,}"}
                required
            />

            <input
                value={form.profession}
                name={"profession"}
                onChange={handleInputChange}
                type={"text"}
                placeholder={"Profissão"}
                pattern={"[A-Za-z]{3,}"}
                required
            />

            <input
                value={form.company}
                name={"company"}
                onChange={handleInputChange}
                type={"text"}
                placeholder={"Empresa"}
                pattern={"[A-Za-z]{3,}"}
                required
            />

            
            <input
                value={form.nacionality}
                name={"nacionality"}
                onChange={handleInputChange}
                type={"text"}
                placeholder={"Nacionalidade"}
                pattern={"[A-Za-z]{3,}"}
                required
                />

            <input
                value={form.phone}
                name={"phone"}
                onChange={handleInputChange}
                type={"number"}
                placeholder={"Telefone"}
                pattern={"^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$"}
                required
            />

            <input
                value={form.email}
                name={"email"}
                onChange={handleInputChange}
                type={"email"}
                placeholder={"E-mail"}
                required
            />
            <button >Enviar</button>
        </ FormContainer>
    )

}
export default FormValidation