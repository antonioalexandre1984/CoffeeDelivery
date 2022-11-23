import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import { ShoppingCart } from 'phosphor-react';
import {
  CoffeeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCardWrapper
} from './styles';
import { formatMoney } from '../../../../utils/formatMoney';

interface CoffeeCardProps {
  coffee: Coffee;
}

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  photo: string;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const formattedPrice = formatMoney(coffee.price);
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>{formattedPrice}</TitleText>
        </div>
        <AddCardWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AddCardWrapper>
      </CardFooter>
    </CoffeeCardContainer >
  );
}
