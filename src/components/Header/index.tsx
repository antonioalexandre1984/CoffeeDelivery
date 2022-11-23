import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles';
import logoIgnite from '../../assets/logoIgnite.png';
import { MapPin, ShoppingCart } from 'phosphor-react';


export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logoIgnite} />
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight='fill' />
            São Paulo, SP
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight='fill' />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
