import { Fragment, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; // 'react-pdf/dist/esm/entry.webpack';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export const PDF = props => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = (doc) => {
        setNumPages(doc.numPages);
    };

    const goToPrevPage = () => {
        setPageNumber(pageNumber - 1);
    };

    const goToNextPage = () => {
        setPageNumber(pageNumber + 1);
    };

    if (props.type === 'full') {
        return (
            <Document file={props.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(
                    new Array(numPages),
                    (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ),
                )}
            </Document>
        );
    }

    return (
        <Fragment>
            <p>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </p>
            <button
                type="button"
                className="btnnav"
                disabled={pageNumber <= 1}
                onClick={goToPrevPage}
            >
                <i className="fa fa-chevron-left" /> Previous
            </button>
            <button
                type="button"
                className="btnnav"
                disabled={pageNumber >= numPages}
                onClick={goToNextPage}
            >
                Next <i className="fa fa-chevron-right" />
            </button>

            <Document file={props.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </Fragment>
    );
};
