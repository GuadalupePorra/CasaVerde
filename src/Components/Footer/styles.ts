'use client';
import styled from 'styled-components';

export const FooterSection = styled.div`
    margin-top: 4rem;
    height: 6rem;
    background-color: ${({theme})=> theme.colors.primary};
    color: white;

    p{
        padding: 2rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`
