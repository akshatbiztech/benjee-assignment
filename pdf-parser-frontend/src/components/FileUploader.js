import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert(error.response?.data?.error || "Failed to upload file.");
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3001/api/analyze");
      setAnalysisResult(response.data);
      alert("Analysis result: " + response.data.message);
    } catch (error) {
      console.error("Error analyzing file:", error);
      alert(error.response?.data?.error || "Failed to analyze file.");
    }
  };

  return (
    <div className="">
      <h1>Upload PDF</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
      <button type="button" onClick={handleAnalyze}>
        Analyze
      </button>
      {analysisResult && (
        <div>
          <h2>Analysis Result:</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
