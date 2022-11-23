import { PaymentMethodInput } from '../PaymentMethodInput';
import { PaymentMethodOptionsContainer } from './styles';
import { CreditCard, Bank, Money } from 'phosphor-react';

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  }
}

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          icon={icon}
          label={label}
          id={key}
          value={key}
        />
      ))}
    </PaymentMethodOptionsContainer>
  );
}
