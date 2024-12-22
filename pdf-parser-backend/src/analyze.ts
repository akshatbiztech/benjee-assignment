import pdfparse from "pdf-parse";
import fs from "fs";
import PDFParser from "pdf2json";

let pdfParser = new PDFParser();

export const analyze = (filePath: string) => {
const pdffile = fs.readFileSync(filePath)

pdfParser.loadPDF(filePath)

pdfParser.on("pdfParser_dataReady", (pdfData) => {
  fs.writeFileSync("./src/pdf/1.json", JSON.stringify(pdfData));
});

const data_pages = pdfparse(pdffile).then(function (data) {
    console.log(data.text);
  });
return data_pages
};
