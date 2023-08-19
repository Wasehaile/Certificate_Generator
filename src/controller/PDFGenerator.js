import { PDFDocument, StandardFonts } from "pdf-lib";

export const PDFGenerator = async (users,chosenTemplate) => {
   const templateUrls = {
    Template1: require("../assets/Templates/Template-1.pdf"),
    Template2: require("../assets/Templates/Template-2.pdf"),
  };

  const templateUrl = templateUrls[chosenTemplate];

  for (const user of users) {
    if (user.name !== ""||user.date!=="") {
      const formPdfBytes = await fetch(templateUrl).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(formPdfBytes);
      const form = pdfDoc.getForm();
      const nameField = form.getTextField("FullName");
      const dateField = form.getTextField("Date");

      const customFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      nameField.setText(user.name);
      dateField.setText(user.date);
      nameField.updateAppearances(customFont);
      dateField.updateAppearances(customFont);

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${user.name}'s Certificate.pdf`;
      link.click();
    }
  }
};
