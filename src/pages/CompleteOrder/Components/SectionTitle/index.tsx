import { MapPin } from 'phosphor-react';
import { RegularText } from '../../../../components/Typography';
import { SectionTitleContainer } from './styles';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color='subtitle'>{title}</RegularText>
        <RegularText color='subtitle'>{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  );
}
