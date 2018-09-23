import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import config from '../config';

export default props => (
  <Container>
    <Head>
      <title>ZenArt</title>
      <meta property="og:title" content="ZenArt" />
      <meta property="og:description" content="Showcase digital Zen artwork & collectables" />
      <meta name="keywords" content="zen,art,mindfulness" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.site_url} />
      <meta property="og:image" content={`${config.site_url}/static/img/ogp.png`} />
      <meta property="og:site_name" content="ZenArt" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:title" content="ZenArt" />
      <meta name="twitter:description" content="Showcase digital Zen artwork & collectables" />
      <meta name="twitter:image" content={`${config.site_url}/static/img/ogp.png`} />
      <link rel="canonical" href={config.site_url} />
      <link rel="shortcut icon" href={`${config.site_url}/static/img/favicon.png`} />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css" />
    </Head>

    <Header networkName={props.networkName} />
    {props.children}
    <Divider hidden clearing />
    <Footer />
  </Container>
);
