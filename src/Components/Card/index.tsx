import {
  CardContainer,
  CardContent,
  CardImage,
  CardTitle,
  List,
  ListItem,
  Circle,
} from './styles';

import React from 'react';

const Card: React.FC = () => {
  return (
    <CardContainer>
      <CardImage
        src="/images/card-img.png"
        alt="Monstera plant"
      />
      <CardContent>
        <CardTitle>
          Como Conseguir<br />
          <strong> mi planta</strong>
        </CardTitle>
        <List>
          <ListItem>
            <Circle />
            <span>Escoja sus plantas</span>
          </ListItem>
          <ListItem>
            <Circle />
            <span>Haga su pedido</span>
          </ListItem>
          <ListItem>
            <Circle />
            <span>Reciba en su casa</span>
          </ListItem>
        </List>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
