import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season </p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    // Verificar se o title existe
    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument();
    // Verificar se o subtitle existe
    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument();
    // verificar se a imagem existe
    expect(
      screen.getByRole('img', { name: /defy death/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});