import { Box, Typography } from "@mui/material";
import "../App.css";
import * as XLSX from "https://unpkg.com/xlsx/xlsx.mjs";

function concatenation() {
  const fileInput = document.getElementById("fileInput");
  const files = fileInput.files;

  if (files.length < 2) {
    alert("Selecione pelo menos dois arquivos Excel para concatenar.");
    return;
  }

  const workbooks = [];
  const sheetNames = [];

  const processFile = (file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        workbooks.push(workbook);
        workbook.SheetNames.forEach((sheetName) => {
          if (!sheetNames.includes(sheetName)) {
            sheetNames.push(sheetName);
          }
        });

        if (workbooks.length === files.length) {
          const concatenatedWorkbook = XLSX.utils.book_new();

          for (const sheetName of sheetNames) {
            const sheets = workbooks.map((wb) => wb.Sheets[sheetName]);
            const newSheet = XLSX.utils.aoa_to_sheet([]);

            sheets.forEach((sheet) => {
              const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
              XLSX.utils.sheet_add_aoa(newSheet, data, { origin: -1 });
            });

            XLSX.utils.book_append_sheet(
              concatenatedWorkbook,
              newSheet,
              sheetName
            );
          }

          XLSX.writeFile(concatenatedWorkbook, "concatenated.xlsx");
        }
      } catch (error) {
        console.error(error);
        alert("Ocorreu um erro ao concatenar os arquivos.");
      }
    };
    reader.readAsArrayBuffer(file);
  };

  for (const file of files) {
    processFile(file);
  }
}

function Consolidation() {
  return (
    <Box
      sx={{
        marginLeft: "1rem",
      }}
    >
      <h2
        style={{
          color: "#870382",
        }}
      >
        Nesta etapa realizaremos a consolidação das cartas mensais em excel.
      </h2>
      <Typography
        sx={{
          fontFamily: "Lato",
          fontSize: "20px",
          marginBottom: "2rem",
        }}
      >
        {` 1) Clique no botão "Choose File" e selecione os arquivos que deseja
        consolidar.`}
        <br></br>
        <br></br>
        {`2) Após realizar a escolha dos arquivos clique no botão "Concatenar",
        consolidaremos os arquivos e disponibilizaremos como download em excel.`}
        <br></br>
        <br></br>
      </Typography>
      <input type="file" id="fileInput" multiple />
      <button id="concatenateButton" onClick={() => concatenation()}>
        Concatenar
      </button>
    </Box>
  );
}

export default Consolidation;
