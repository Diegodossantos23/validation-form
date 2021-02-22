import React from 'react'
import FormPage from './pages/FormPage';
import styled from 'styled-components'

const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding : 0;
  overflow-x: hidden;
`
const App = () => {
  return (
    <AppContainer>
        <FormPage/>
    </AppContainer>
  );
}

export default App;
