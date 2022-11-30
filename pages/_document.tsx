import { ServerStyleSheets } from '@mui/styles';
import { DocumentContext, DocumentInitialProps } from 'next/document';
import React from 'react';
import { StyleSheetManager } from 'styled-components';

export default class Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const styledComponentSheet = new StyleSheetManager(null);
    const materialUiSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }
}
