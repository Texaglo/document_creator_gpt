import { useState } from "react";
import FileReader from "react-file-reader";
import { Document, Page } from "react-pdf";
import createDocumentationRequest from "../lib/createDocumentationRequest";

interface DocumentationFormProps {
  onDocumentationGenerated: (result: string) => void;
}

const DocumentationForm: React.FC<DocumentationFormProps> = ({ onDocumentationGenerated }) => {
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [pdfDocument, setPdfDocument] = useState<string | null>(null);



  const createDocumentation = async () => {
    setLoading(true);
    // Call the OpenAI API using the provided API key and the generated prompts.
    // You can implement the createDocumentationRequest function based on the prompts you provided earlier.
    const result = await createDocumentationRequest(title);
    onDocumentationGenerated(result);
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter documentation title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button disabled={loading} onClick={createDocumentation}>
        {loading ? "Generating Documentation..." : "Create Documentation"}
      </button>
    </div>
  );
};

export default DocumentationForm;

