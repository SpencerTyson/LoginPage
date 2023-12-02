
import React from 'react'
import { Col, Container, Row } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { MdArrowForward } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { Spacer } from '../shared'
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
import Form from './Form';


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
                        <Text fontWeight='600' Color='white'>
                            Not a member yet ? 
                             <Line>
                              Sign up and enjoy our services 
                             </Line>  
                           <Spacer height={1.5}/>
                            <Button>
                                       Sign Up  <MdArrowForward/>
                            </Button>
                            <Spacer height={4} />
                            <Icons>
                                     <Twitter/>
                                     <Instagram/>
                                     <Facebook/>
                                     
                            </Icons>
                            <Spacer height={2}/>
                        </Text>
                      
                </LeftSide>
        
               <RightSide>
                        <Cancel>
                             <Cross/>  
                        </Cancel>
                        <Text fontWeight='1000' fontSize='2' Width='39' Height='15' justifyContent='flex-end'>
                                    Log In 
                        </Text>
                        <Spacer height={5.5} />
                        <Form/>
               </RightSide>
            </Wrapper>
         </Col> 
      </Row>
       </Container>
       </Page>
    </>
  )
}


const Cancel = styled.div`
width:100%;
height:15%;

display:flex;
flex-direction:row-reverse;
align-items:center;
`

const Cross = styled(LiaSkullCrossbonesSolid)`
font-size:2.5rem;
margin-right:1rem;
`


const Twitter = styled(CiTwitter)`
   font-size:2.5rem;
`
const Instagram = styled(FaInstagram)`
   font-size:2rem;
`

const Facebook = styled(BsFacebook)`
   font-size:2rem;
`
 const Icons = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
 `

const Button = styled.div`
text-decoration:underline;
${"" /* line-height:1rem; */}
`  

const Line = styled.div`

`

const Text = styled.div`
 
    color: ${({Color}) => (Color ? Color : 'black')};
    position:absolute;
    font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : '400')};
	 font-size: ${({ fontSize}) => (fontSize ? `${fontSize}rem` : '400')};
	 line-height: ${({ lineheight}) => (lineheight ? `${lineheight}rem` : '1.5')};	
	 letter-spacing: 0.02em;   
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:${({justifyContent}) =>(justifyContent ? `${justifyContent}` : `justifyContent`)};
    width:${({Width})=>(Width ? `${Width}%` : 'auto' )};
    height:${({Height})=>(Height ? `${Height}%` : 'auto' )};
    border: ${({ Border }) => (Border ? `${Border}` : '')};
`

const PageImg = styled.img`
position:absolute;
width:100%;
height:100%;
`
const Img = styled.img`
width:38.95%;
height:79.95%;
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
   background-color:white;
   display:flex;
   justify-content:flex-end;
  flex-direction:column;
  align-items:center;
  box-shadow: 5px 4px 50px 10px #000000;
`
const RightSide = styled.div`
   width:40%;
   height:80vh;
   box-shadow: 5px 4px 50px 10px #000000;
   background-color:white;
`
export default LoginPage