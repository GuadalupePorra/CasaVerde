'use client';
import styled from 'styled-components';

export const NewsletterSection = styled.section`
    margin-top: 4rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const NewsletterContent = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  margin: 4rem 0 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};

  strong {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bolder;

  }
`;

export const Description = styled.div`
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  margin-top: 1rem;
`;

export const SubscriptionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EmailInput = styled.input`
  padding: 1rem;
  flex: 1;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const SubscribeButton = styled.button`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    background-color: ${({theme})=> theme.colors.background};
    color: black;
    width: 100%;
  }
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: 1rem;
  font-size: 1rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

export const PlantImg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  max-width: 600px;
  flex: 1;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;
