import { PDFDocument, StandardFonts } from "pdf-lib";
import Template2 from "../assets/Templates/Template-Editable.pdf";

export const TemplateCertificatePDFGenerator = async (body) => {
  const formUrl = Template2;
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
  const bodyField = form.getTextField("BodyText");
  const customFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  bodyField.setText(body);
  bodyField.updateAppearances(customFont);

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Certificate.pdf`;
  link.click();
};
