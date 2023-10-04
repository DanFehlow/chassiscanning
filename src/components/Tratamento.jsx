import { Box, Typography } from "@mui/material";
import "../App.css";
// import * as XLSX from "xlsx/xlsx.mjs";
import * as XLSX from "https://unpkg.com/xlsx/xlsx.mjs";
import CallSplitIcon from "@mui/icons-material/CallSplit";

function processarArquivo() {
  const arquivoInput = document.getElementById("arquivo_txt");

  const arquivo = arquivoInput.files[0];
  if (!arquivo) {
    alert("Nenhum arquivo selecionado.");
    return;
  }

  const leitor = new FileReader();

  leitor.onload = function (event) {
    const conteudo = event.target.result.split("\n");

    // Criar uma matriz para os dados do Excel
    const dadosExcel = [["Data", "Chassi", "Emplacamento"]];

    // Processar cada linha do arquivo
    for (const linha of conteudo) {
      if (linha.length >= 25) {
        const dataStr = linha.slice(0, 8);
        const data = new Date(
          dataStr.substring(0, 4),
          dataStr.substring(4, 6) - 1,
          dataStr.substring(6, 8)
        );
        const dataFormatada = data.toLocaleDateString("pt-BR");

        const dados2 = linha.slice(8, 25);
        const dados3 = linha.slice(29, 70);

        dadosExcel.push([dataFormatada, dados2, dados3]);
      }
    }

    // Criar um workbook do Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(dadosExcel);

    // Adicionar a planilha ao workbook
    XLSX.utils.book_append_sheet(wb, ws, "Dados");

    // Criar um arquivo Excel
    const nomeArquivo = "carta_anfavea.xlsx";
    XLSX.writeFile(wb, nomeArquivo);

    alert(
      `Arquivo Excel "${nomeArquivo}" gerado com sucesso. O Download ja foi iniciado..`
    );
  };

  leitor.readAsText(arquivo);
}

function Treatment() {
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
        Nesta etapa realizaremos o tratamento dos dados.
      </h2>
      <Typography
        sx={{
          fontFamily: "Lato",
          fontSize: "20px",
          marginBottom: "2rem",
        }}
      >
        {` 1) Clique no botão "Choose File" e selecione o arquivo que deseja
        converter.`}
        <br></br>
        <br></br>
        {`2) Após realizar a escolha do arquivo clique no botão "Converter",
        converteremos o seu arquivo e disponibilizaremos como download em excel.`}
        <br></br>
        <br></br>

        <CallSplitIcon
          sx={{
            color: "#870382",
          }}
        />
        {`Obs: A conversão realizada será responsável por separar os dados em colunas (Data, Chassi e Emplacamento)`}
      </Typography>
      <Box>
        <input type="file" id="arquivo_txt" accept=".txt" />
        <button
          onClick={() => {
            processarArquivo();
          }}
        >
          Converter
        </button>
      </Box>
    </Box>
  );
}

export default Treatment;
