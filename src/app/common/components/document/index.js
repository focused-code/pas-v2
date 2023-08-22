import React, { memo } from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

import Html from 'react-pdf-html';
import ReactDOMServer from 'react-dom/server';



// Create styles
const styles = StyleSheet.create({
  page: {
    margin: 10,
    width: '80%'
  },
  section: {
    margin: 10,
    padding: 10,
  },

});



const htmlStylesheet = {
  body: {
    fontSize: '12px',
    width: "80%",
    fontFamily: 'Times-Roman'
  },
  p: {
    fontSize: '12px',
    fontWeight: 'normal'
  },
  strong: {
    fontFamily: 'Times-Bold',
  },
  b: {
    fontFamily: 'Times-Bold',
  },
  em: {
    fontFamily: 'Times-Italic',
  },
  i: {
    fontFamily: 'Times-Italic',
  },
  blockquote: {
    color: 'black',
    margin: 0,
    paddingLeft: 5,
    borderLeftWidth: 4,
    backgroundColor: '#f9f9f9',
    borderLeftStyle: 'solid',
    borderColor: '#eee',
    fontFamily: 'Times-Italic'
  }
}

// Create Document Component
const MyDocument = (props) => {
  const { title, html } = props;
  const element = `<html><body><h1>${title}</h1>${html}</body></html>`
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Html stylesheet={htmlStylesheet}>
          {element}
        </Html>
      </Page>
    </Document>
  );
};
export default memo(MyDocument);
