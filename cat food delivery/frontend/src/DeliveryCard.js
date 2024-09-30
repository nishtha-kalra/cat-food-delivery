import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  position: relative;
`;

const Header = styled.h2`
  font-size: 1.5em;
  color: #2c3e50;
`;

const Message = styled.p`
  font-size: 1em;
  color: #34495e;
`;

const TotalPrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 20px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  border: 2px solid #2ecc71;
  background-color: ${props => (props.primary ? '#2ecc71' : 'white')};
  color: ${props => (props.primary ? 'white' : '#2ecc71')};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => (props.primary ? '#27ae60' : '#ecf0f1')};
  }
`;

const FreeGiftTag = styled.div`
  background-color: #f39c12;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 0.8em;
  font-weight: bold;
`;

const CardContent = styled.div`
  text-align: center;
`;

function DeliveryCard({ user }) {
  const { title, message, totalPrice, freeGift } = user;

  return (
    <Card>
      {freeGift && <FreeGiftTag>FREE GIFT</FreeGiftTag>}
      <CardContent>
        <Header>{title}</Header>
        <Message>{message}</Message>
        <TotalPrice>Total price: £{totalPrice}</TotalPrice>
        <ButtonGroup>
          <Button primary>SEE DETAILS</Button>
          <Button>EDIT DELIVERY</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default DeliveryCard;