import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styled';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  icon,
  minimal = false,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
