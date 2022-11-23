import { CurrencyDollar, MapPin, Clock } from 'phosphor-react';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedPageContainer, OrderDetailContainer } from './styles';
import confirmedOrderIllustration from '../../assets/confirmed-order.svg';
import { useTheme } from 'styled-components';

export function OrderConfirmedPage() {
  const { colors } = useTheme();
  return (
    <OrderConfirmedPageContainer className='container'>
      <div>
        <TitleText size='l'>Uhu! pedido confirmado</TitleText>
        <RegularText size='s' color='subtitle'>
          Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>
      <section>
        <OrderDetailContainer>
          <InfoWithIcon
            icon={<MapPin weight='fill' />}
            iconBg={colors['brand-purple']}
            text={<RegularText size='s' color='subtitle'>Entrega Em <strong>Rua José Clemente,46</strong> <br />
              Malvinas ,campina grande - PB</RegularText>}
            title=''
          />
          <InfoWithIcon
            icon={<Clock weight='fill' />}
            iconBg={colors['brand-yellow']}
            text={<RegularText size='s' color='subtitle'>Previsão de entrega <br />
              <strong>20 min - 30 min</strong></RegularText>}
            title=''
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight='fill' />}
            iconBg={colors['brand-yellow-dark']}
            text={<RegularText size='s' color='subtitle'>Pagamento da entrega <br />
              <strong>Cartão de crédito</strong></RegularText>} title=''
          />
        </OrderDetailContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedPageContainer >
  );
}


