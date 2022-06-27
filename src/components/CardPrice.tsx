import React from 'react' 
import styled from 'styled-components';

// METHOD: STYLED COMPONENTS 
// ...INLINE STYLES 

const Container = styled.div`
/* border:2px solid gray; */
    box-sizing: border-box;
    display:block;
    background-color: white; 
    /* background-color: blue;  */
    max-width: 12rem;   
    /* max-height: 20rem; */
    border-radius: 5px ; 
    margin:3rem 0;
    transition: .4s;

    p { 
      /* border:1px solid red; */
      color:gray;
      /* visibility: hidden; */
      padding: .1rem .3rem;
      font-size:.8rem;
      text-align:justify;
      /* margin-top: -2rem; */
    }
    /* overflow: hidden; */

    &:hover  { 
      box-shadow:0px 5px 10px 4px lightgray;   
      p {
        /* margin-top: 0rem;
        visibility: visible ; */
      }
    }
    
`;
const SpanPrice = styled.span` 
    font-size: 1.5rem;
    font-weight:400;
    color:black; 
`;

export default function CardPrice({...imageUrl} ) {
   
  return (
    <Container>
        <img 
        style = { { 
          width:'100%',   
          objectFit:'scale-down',
          boxSizing:'border-box',
          borderBottom:'1px solid lightgray' }  } 
        src={imageUrl.imageUrl} 
        alt="red shoes" />

        <div 
        style={{
        // border:'1px solid pink',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        color:'black',
         }}>
            <SpanPrice>$8.799</SpanPrice>
            <span style={{color:'#00a650',fontSize:'.8rem',fontWeight:'600'}}>
              Envío gratis
            </span>
            <p >
              Descripcion Lorem ipsum lroemasdomsadomsad asdsd asdsadd sdad
              scripcion Lorem ipsum lroemasdomsadomsad asdsd 
            </p>
        </div>
    </Container>
  )
}
