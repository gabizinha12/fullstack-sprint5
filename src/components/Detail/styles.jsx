import styled from 'styled-components';

export const Container = styled.section`
    display:flex;
    flex-direction: column;
    height:600px;  
    margin-bottom:60px;  
`

export const Breadcrumbs = styled.section`
    padding: 10px 0;
    display:Flex;
    color : ${({theme}) => theme.text};
    & p:nth-child(1)::after{
        content: "/ ";
        padding-right: 5px;
    }
    & * {
        color : ${({theme}) => theme.text};       
    }
`

export const Details = styled.section`
    display:flex;
    height:100%;
`

export const ProductPhoto = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: ato;
    flex:1;   
`

export const ProductInfo = styled.div`
    display:flex;
    flex-direction: column;
    height:100%; 
    flex:1; 
    margin-left:30px;
    color : ${({theme}) => theme.text};       
`

export const Photo = styled.img`    
    height: 37rem;
`

export const Title = styled.div`
    display:flex;
    justify-content:flex-start ;
    align-items:center;
    flex:1;    
`

export const TitleH3 = styled.h3`
    text-transform: initial;
    font-size: 20px;
`

export const Size = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items:flex-start;
    flex-direction: column;
    flex:1;
`
export const TitleH5 = styled.h5`
    text-transform: initial;
    font-size: 13px;
    margin-bottom: 10px;
`

export const Price = styled.div`
    display:flex;
    justify-content: center ;
    align-items:center;
    flex-direction: column;
    flex:2;     
    padding: 0 30px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);     
    background-color:white;
`

export const Buttons = styled.div`
    display:flex;
    justify-content: center ;
    align-items:center;
`

export const Button = styled.button`
    margin-right:5px;
    background-color: white;
    border:1px solid gray;
    padding: 8px 12px;
    cursor:pointer;
    &:hover{
        background-color:black;
        color:white;
    }    
    &:active{
        background-color:black;
        color:white;
    }
`

export const PriceTitle = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width: 100%;  
    margin-bottom:30px;
`

export const PriceTitleText = styled.h5`
    color:red;  
    font-size: 24px;
`

export const PriceButtons = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 100%;        
    margin: 0 10px;     
`

export const PriceButton = styled.button`
    width: 100%;
    padding: 10px 0px;
    color:white;
    font-weight: 700;
    border:none;
    cursor:pointer;
    &:nth-child(1){
        background-color:green;
        margin-bottom:10px;
    } 
    &:nth-child(2){
        background-color:red;
    }     
`