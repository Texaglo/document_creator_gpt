import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

interface DocumentationPDFProps {
  documentation: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const DocumentationPDF: React.FC<DocumentationPDFProps> = ({ documentation }) => {
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{documentation}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default DocumentationPDF;
