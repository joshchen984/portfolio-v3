import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import GlobalStyle from '../globalStyles';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

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
        <meta
          name="description"
          content="I’m a high school senior planning on majoring in CS. I enjoy software development and machine learning."
        />
      </Helmet>
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
