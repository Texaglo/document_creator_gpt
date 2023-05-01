import React, { useState } from 'react';
import { Button } from '@mui/material';
import dynamic from 'next/dynamic';

const DocumentationPDF = dynamic(() => import('../components/DocumentationPdf'), { ssr: false });
const Modal = dynamic(() => import('react-modal'), { ssr: false });

const IndexPage: React.FC = () => {
  const [documentation, setDocumentation] = useState<string | null>(null);

  const handleGenerateDocumentation = async () => {
    // Replace this example content with the actual generated documentation
    const generatedDocumentation = `
      # Example Documentation

      This is an example of generated documentation.
    `;

    setDocumentation(generatedDocumentation);
  };

  return (
    <div>
      <h1>Documentation Generator</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateDocumentation}
      >
        Generate Documentation
      </Button>

      {documentation ? (
        <DocumentationPDF documentation={documentation} />
      ) : null}
    </div>
  );
};

export default IndexPage;
