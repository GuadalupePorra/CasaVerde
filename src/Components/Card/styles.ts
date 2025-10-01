'use client';
import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-content: center;
    margin: auto;
    border-radius: 12px;
    overflow: hidden;
    max-width: 995px;
    width: 100%;
    box-shadow: 7px 4px 11px rgb(0 0 0 / 28%);
    
    
    @media (max-width: 768px) {
        width: 30rem;
        flex-direction: column;
    }

    @media (max-width: 458px){
        width: 20rem;
    }
`;

export const CardContent = styled.div`
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 400;
    font-size: 22px;
    
   @media (max-width: 768px) {
    padding: 20px;
    font-size: 18px;
  }
`;

export const CardTitle = styled.h3`
    margin-bottom: 30px;
    font-family: ${({theme}) => theme.fonts.main};
    color: ${({theme})=> theme.colors.text};
    font-size: 22px;
    font-weight: 400;

    strong{
        font-family: ${({theme})=>theme.fonts.secondary};
        font-size: 42px;
        color: ${({theme})=> theme.colors.secondary};

        @media (max-width: 768px) {
            font-size: 32px;
        }
    }

    @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const CardImage=styled.img`
    flex: 1;

    @media (max-width: 768px) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    color: ${({theme})=> theme.colors.text};

    @media (max-width: 768px) {
    margin-bottom: 14px;
    font-size: 16px;
  }

`;

export const Circle = styled.span`
    display: inline-block;
    width: 52px;
    height: 52px;
    background-color: #ffc107;
    border-radius: 50%;
    margin-right: 15px;
    flex-shrink: 0;

    @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;