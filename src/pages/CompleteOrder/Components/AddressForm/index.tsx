import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { AddressFormContainer } from './styles';

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}
export function AddressForm() {

  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />

      <Input
        placeholder='Rua'
        className='street'
        {...register('street')}
      />
      <Input
        placeholder='Número'
        className='number'
        {...register('number')}
      />
      <Input
        placeholder='Complemento'
        className='complement'
        {...register('complement')}
      />
      <Input
        placeholder='Bairro'
        className='district'
        {...register('district')}
      />
      <Input
        placeholder='Cidade'
        className='city'
        {...register('city')}
      />
      <Input
        placeholder='UF'
        {...register('uf')}
      />
    </AddressFormContainer>
  );
}
