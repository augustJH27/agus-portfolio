import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #fff;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const SuccessIcon = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: var(--gray-1);
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Message = styled.p`
  margin-bottom: 20px;
  color: #666;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: var(--gray-1);
  color: var(--white);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  width: 100%;

  &:hover {
    background-color: var(--deep-dark);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 20px;
  }
`;

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <SuccessIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="50"
            height="50"
          >
            <path
              d="M7.29417 12.9577L10.5048 16.1681L17.6729 9"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#000000"
              strokeWidth="2"
            />
          </svg>
        </SuccessIcon>
        <Title>Congratulations!</Title>
        <Message>Your inquiry has been submitted successfully.</Message>
        <Button onClick={onClose}>OK</Button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SuccessModal;
