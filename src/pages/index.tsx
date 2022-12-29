import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import GlobalStyle from '../globalStyles';
import { Hero } from '../components/Hero';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
