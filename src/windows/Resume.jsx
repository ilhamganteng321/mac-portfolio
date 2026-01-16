import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {Download} from "lucide-react";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
                <h2>resume.pdf</h2>

                <a
                    href="/files/resume (2).pdf"
                    download
                    className="cursor-pointer"
                    title="Download resume">
                    <Download className="icon"/>
                </a>
            </div>
            <Document file="files/resume (2).pdf">
                <Page
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}/>
                <Page
                    pageNumber={2}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}/>
                <Page
                    pageNumber={3}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}/>
            </Document>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;