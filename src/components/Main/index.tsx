import * as S from './styled';

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, NextJs e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustrator
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com códigos."
    />
  </S.Wrapper>
);

export default Main;
