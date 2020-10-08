import Home, { HomeTemplateProps } from 'templates/Home';
import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSide SÓ FUNCIONAM EM PAGES

// getStaticProps => gera stático em build time
// getServerSideProps => gera via ssr a cada request
// getInitialProps => gera via ssr a cada request (deprecando)

export function getServerSideProps() {
  // faz a lógica

  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighLight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeGamesHighlight: highlightMock
    }
  };
}
