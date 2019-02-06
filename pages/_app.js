import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import getPageContext from "../src/getPageContext";
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider } from "@material-ui/core";

export default class MuleTrailheadApp extends App {
    constructor() {
      super();
      this.pageContext = getPageContext();
    }

    componentDidMount() {
      const JssStyle  = document.querySelector('#jss-server-side');
      if(JssStyle && JssStyle.parentNode) {
        JssStyle.parentNode.removeChild(JssStyle);
      }
    }

    renderHead() {
        return (
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            />
          </Head>
        );
      }

    render() {
        const { Component, pageProps } = this.props;
        return (
          <Container>
            {this.renderHead()}
            <JssProvider 
              registry={this.pageContext.sheetRegistry}
              generateClassName={this.pageContext.generateClassName}>
                <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
                  <CssBaseline />
                  <Component pageContext={this.pageContext} {...pageProps} />
                </MuiThemeProvider>
              </JssProvider>
          </Container>
        );
      }
}