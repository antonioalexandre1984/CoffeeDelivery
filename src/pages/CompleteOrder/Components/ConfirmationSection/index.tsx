import { Button } from '../../../../components/Button';
import { RegularText } from '../../../../components/Typography';
import { ConfirmationSectionContainer } from './styles';

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText color='subtitle'>Total de Itens</RegularText>
        <RegularText color='subtitle'>R$ 9.99</RegularText>
      </div>
      <div>
        <RegularText color='subtitle'>Entrega</RegularText>
        <RegularText color='subtitle'>R$ 3.55</RegularText>
      </div>
      <div>
        <RegularText color='subtitle'>Total</RegularText>
        <RegularText color='subtitle'>R$ 10.99</RegularText>
      </div>
      <Button text='confirmar pedido' type='submit' />
    </ConfirmationSectionContainer>
  );
}
