import { Input } from '../../../../components/Input';
import { AddressFormContainer } from './styles';

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input
        placeholder='CEP'
        type='number'
        className='cep'
      />
      <Input
        placeholder='Rua'
        className='street'
      />
      <Input
        placeholder='Número'
        className='number'
      />
      <Input
        placeholder='Complemento'
        className='complement'
      />
      <Input
        placeholder='Bairro'
        className='neighborhood'
      />
      <Input
        placeholder='Cidade'
        className='city'
      />
      <Input
        placeholder='UF'
      />
    </AddressFormContainer>
  );
}
