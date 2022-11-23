import { QuantityInputContainer, IconWrapperContainer } from './styles';
import { Minus, Plus } from 'phosphor-react';

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapperContainer>
        <Minus size={14} weight='fill' />
      </IconWrapperContainer>
      <input type='number' readOnly value={1} />
      <IconWrapperContainer>
        <Plus size={14} weight='fill' />
      </IconWrapperContainer>
    </QuantityInputContainer>
  );
}
