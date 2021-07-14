import styled from 'styled-components';

export const Container = styled.section`
    display:flex;
    background-color: gray;
    height:400px;  
    margin-bottom:20px;  
`

export const ProductPhoto = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    height: 100%;
    flex:1;   
`

export const ProductInfo = styled.div`
    display:flex;
    flex-direction: column;
    background-color: pink;
    height:100%; 
    flex:1;    
`

export const Photo = styled.img`
    width: 100px;
    height: 100px;
`

export const Title = styled.div`
    display:flex;
    justify-content: center ;
    align-items:center;
    flex:1;
    background-color: red;
`

export const Size = styled.div`
    display:flex;
    justify-content: center ;
    align-items:center;
    flex:4;
    background-color: blue;
`

export const Price = styled.div`
    display:flex;
    justify-content: center ;
    align-items:center;
    flex:4;
    background-color: green;
`