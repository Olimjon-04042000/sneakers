import { styled } from "styled-components"
import Navbar from "./comonents/Navbar"
import Products from "./comonents/Products"

 const Container=styled.div`
  width:100%;
  max-width:1110px;
  margin: 28px auto;
 `

function App() {

  
  return (
    <Container>
      <Navbar />
      <Products/>
    </Container>
  )
}

export default App
