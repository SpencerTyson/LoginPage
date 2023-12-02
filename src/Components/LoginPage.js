
import React from 'react'
import { Col, Container, Row } from 'styled-bootstrap-grid'
import styled from 'styled-components'

const LoginPage = () => {
  return (
    <>
       <Page>
       <PageImg src='images123.jpeg'/>
       <Container>
             <Row>
         <Col>
            <Wrapper>
                
               <LeftSide>
                        <Img src='images123.jpeg'/>
                        <Text fontWeight='600'>
                            Not a member yet ? 
                             <Line>
                              Sign up and enjoye our services 
                             </Line>  
                            
                        </Text>
                </LeftSide>
        
               <RightSide>
                          Ammar
            </RightSide>
            </Wrapper>
         </Col>
         
       
      </Row>
       </Container>
       </Page>
    </>
  )
}

  

const Line = styled.div`

`

const Text = styled.div`
 color:white;
 position:absolute;
 font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : '400')};
	font-size: ${({ fontSize}) => (fontSize ? `${fontSize}rem` : '400')};
	line-height: ${({ lineheight}) => (lineheight ? `${lineheight}rem` : '1.5')};	
	letter-spacing: 0.02em;
    border:1px solid red;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const PageImg = styled.img`
position:absolute;
width:100%;
height:100%
`
const Img = styled.img`
width:38.95%;
height:79.55%;
position:absolute;
`

const Page = styled.div`


`
const Wrapper = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

`
const LeftSide = styled.div`
   width:40%;
   height:80vh;
   border:1px solid red;
   background-color:white;
   display:flex;
   justify-content:flex-end;
  flex-direction:column;
  align-items:center
`
const RightSide = styled.div`
   width:40%;
   height:80vh;
   border:1px solid red;
   background-color:white;
`
export default LoginPage