import { PDFDocument } from "pdf-lib";

export const PDFController = async (name) => {
  const formUrl = "https://pdf-lib.js.org/assets/dod_character.pdf";
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
  const nameField = form.getTextField("CharacterName 2");

  nameField.setText(name);
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
		link.href = url;
		link.download = 'filled_form.pdf';
		link.click();
};
