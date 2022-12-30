import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import GlobalStyle from '../globalStyles';
import { Hero } from '../components/Hero';
import Skills from '../components/Skills';
import { Helmet } from 'react-helmet';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Josh Chen</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Helmet>
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
};

export default IndexPage;
