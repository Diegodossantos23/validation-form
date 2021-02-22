import styled from 'styled-components'

export const FormContainer = styled.form`
    height: 700px;
    width: 350px;

    border-radius: 10px;
    background-color: #7a63cf;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align:center;
    align-items:center;

    margin: 150px 100px;

    h2{
        color:#fff;
    }

    input{
        height: 30px;
        width: 270PX;
    }

    button{
        height: 50px;
        width: 120px;
        
        border-radius: 10px;
        border:none;
        background-color: #8cb82e;
        color: #fff;
    }

    button:hover{
        cursor: pointer;
        background-color: #a5d147;
        color:#f2f2f2;
      
    }

    

`
