import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(null);

  const nextPage = () => {
    if (totalPages && page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div id="window-header" className="flex items-center gap-3">
        <WindowControls target="resume" />
        <h2 className="flex-1">resume.pdf</h2>

        <a
          href="/files/resume (2).pdf"
          download
          title="Download resume"
        >
          <Download className="icon" />
        </a>

        <ChevronLeft
          className={`icon ${page === 1 ? "opacity-40 pointer-events-none" : ""}`}
          onClick={previousPage}
        />

        <ChevronRight
          className={`icon ${
            totalPages && page === totalPages
              ? "opacity-40 pointer-events-none"
              : ""
          }`}
          onClick={nextPage}
        />
      </div>

      <Document
        file="/files/resume (2).pdf"
        onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
      >
        <Page
          pageNumber={page}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
