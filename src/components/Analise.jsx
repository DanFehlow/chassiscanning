import { useState } from "react";
import * as XLSX from "https://unpkg.com/xlsx/xlsx.mjs";
import Chart from "chart.js/auto";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function Verify() {
  const [file1Data, setFile1Data] = useState(null);
  const [file2Data, setFile2Data] = useState(null);
  const [commonData, setCommonData] = useState([]);
  const [chart, setChart] = useState(null);

  const handleFile = (fileNumber, event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        if (fileNumber === 1) {
          setFile1Data(XLSX.read(data, { type: "binary" }));
        } else {
          setFile2Data(XLSX.read(data, { type: "binary" }));
        }
      };

      reader.readAsBinaryString(file);
    }
  };

  const compareData = () => {
    if (file1Data && file2Data) {
      const sheet1 = file1Data.Sheets[file1Data.SheetNames[0]];
      const sheet2 = file2Data.Sheets[file2Data.SheetNames[0]];

      const columnB1 = XLSX.utils.sheet_to_json(sheet1, { header: 1 });
      const columnB2 = XLSX.utils.sheet_to_json(sheet2, { header: 1 });

      const valuesB1 = columnB1.map((row) => row[1]); // Assume que a coluna B é a coluna 1 (índice 1)
      const valuesB2 = columnB2.map((row) => row[1]); // Assume que a coluna B é a coluna 1 (índice 1)

      const commonData = valuesB1.filter((value) => valuesB2.includes(value));

      setCommonData(commonData);

      // Criar um gráfico de pizza
      const totalData1 = valuesB1.length;
      const totalData2 = valuesB2.length;
      const commonCount = commonData.length;

      const ctx = document.getElementById("myChart");
      setChart(
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Dados em Comum", "Cartas Anfavea", "Composição"],
            datasets: [
              {
                data: [
                  commonCount,
                  totalData1 - commonCount,
                  totalData2 - commonCount,
                ],
                backgroundColor: ["green", "red", "blue"],
              },
            ],
          },
        })
      );
    } else {
      alert("Por favor, carregue os dois arquivos Excel primeiro.");
    }
  };

  const downloadCommonData = () => {
    if (commonData.length > 0) {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([
        ["Dados em Comum na Coluna B"],
        ...commonData.map((value) => [value]),
      ]);
      XLSX.utils.book_append_sheet(wb, ws, "CommonData");
      XLSX.writeFile(wb, "dados_comuns.xlsx");
    } else {
      alert("Nenhum dado comum para download.");
    }
  };

  return (
    // <>
    // <Grid
    //   sx={{
    //     display: { xs: "grid", sm: "none", md: "none", lg: "none" },
    //   }}
    // ></Grid>

    <Box
      sx={{
        ml: "1rem",
      }}
    >
      <h2
        style={{
          color: "#870382",
        }}
      >
        Nesta etapa realizaremos a análise.
      </h2>
      <Typography
        sx={{
          fontFamily: "Lato",
          fontSize: "20px",
          marginBottom: "2rem",
        }}
      >
        {` 1) Clique no botão "Choose File" e selecione o arquivo consolidado das cartas da Anfavea em excel.`}
        <br></br>
        <br></br>
        <input
          type="file"
          id="file1"
          accept=".xlsx"
          onChange={(e) => handleFile(1, e)}
        />
        <br></br>
        <br></br>
        {` 2) Clique no botão "Choose File" e agora selecione a composição que deseja realizar a verificação (exemplo: composição de cutoff).`}
        <br></br>
        <br></br>
        <input
          type="file"
          id="file2"
          accept=".xlsx"
          onChange={(e) => handleFile(2, e)}
        />
        <br></br>
        <br></br>
        <InfoIcon sx={{ color: "orange" }} />
        {` Obs: Esta aplicação está parametrizada para realizar a verificação de chassis comuns entre os dois arquivos. Essa verificação é realizada comparando a coluna "B" de ambos os arquivos.`}
        <br></br>
      </Typography>

      <button onClick={compareData}>Analisar</button>
      <button
        id="downloadButton"
        onClick={downloadCommonData}
        disabled={!commonData.length}
      >
        Download em Excel
      </button>

      <div
        id="chartContainer"
        style={{ width: "400px", height: "400px", marginTop: "1.5rem" }}
      >
        <canvas id="myChart"></canvas>
      </div>
    </Box>
    // </>
  );
}

export default Verify;
