import { Box, Typography } from "@mui/material";
import "./styleHome.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import AppFooter from "../AppFooter";
import { Grid } from "@mui/material";

function Home() {
  return (
    <>
      <Grid
        sx={{
          display: { xs: "grid", sm: "grid", md: "none", lg: "none" },
          ml: 2,
        }}
      >
        <h2
          style={{
            color: "#870382",
          }}
        >
          Chassi Scanning Testando
        </h2>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "20px",
          }}
        >
          Essa aplicação tem como objetivo facilitar a utilização das cartas da
          Anfavea (Associação Nacional dos Fabricantes de Veículos Automotores)
          para as montadoras associadas, resultando em maior acuracidade das
          informações e economia de tempo para as análises das montadoras,
          podendo beneficiar também todas as auditorias/consultorias que possuem
          em sua carteira de clientes as montadoras associadas e que utilizam as
          cartas da Anfavea como evidência externa para realização de testes de
          detalhe..
          <br></br>
          <br></br>
          Essa aplicação possui 3 steps (Tratamento, Consolidação e Análise):
          <br></br>
        </Typography>
        <br></br>
        <Card
          sx={{ maxWidth: 345, flexDirection: "column", marginBottom: "2rem" }}
        >
          <CardActionArea sx={{ gap: 30 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://getprivacy.com.br/wp-content/uploads/tratamento-de-dados.jpg"
              alt="tratamento de dados"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link to="/tratamento">Tratamento de Dados</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Essa etapa permite ao usuário realizar o input da carta da
                Anfavea mensal e realizar a conversão para excel, dessa forma
                será obtido a data de emplacamento, chassi e dados de
                emplacamento separados por colunas.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, marginBottom: "2rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://getprivacy.com.br/wp-content/uploads/00_5-pontos-da-lgpd-que-ainda-precisam-ser-regulamentados-pela-anpd.jpg"
              alt="consolidação de dados"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link to="/consolidacao">Consolidação</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Uma vez obtido em etapa anterior as cartas da Anfavea em Excel,
                agora o usuário pode realizar a consolidação desses arquivos,
                dessa forma obterá o total de chassis emplacados durante o
                período em escopo.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, marginBottom: "4rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://getprivacy.com.br/wp-content/uploads/mapeamento-de-dados-lgpd.jpg"
              alt="análise dos dados"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link to="/analise">Análise</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Essa etapa permite ao usuário realizar a verificação dos chassis
                que estão nas cartas de Anfavea com o possível relatório de
                Cutoff. Será devolvido ao usuário um excel com os chassis em
                comum entre os dois relatórios, assim como a exibição gráfica
                contendo a representatividade dos chassis em comum entre os dois
                relatórios.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Box
        sx={{
          marginLeft: "1rem",
          flexDirection: "row",
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
      >
        <h2
          style={{
            color: "#870382",
          }}
        >
          Objetivo
        </h2>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "20px",
          }}
        >
          Essa aplicação tem como objetivo facilitar a utilização das cartas da
          Anfavea (Associação Nacional dos Fabricantes de Veículos Automotores)
          para as montadoras associadas, resultando em maior acuracidade das
          informações e economia de tempo para as análises das montadoras,
          podendo beneficiar também todas as auditorias/consultorias que possuem
          em sua carteira de clientes as montadoras associadas e que utilizam as
          cartas da Anfavea como evidência externa para realização de testes de
          detalhe.
          <br></br>
          <br></br>
          Essa aplicação possui 3 steps (Tratamento, Consolidação e Análise):
          <br></br>
        </Typography>
        <br></br>
        <Box
          flexDirection={"row"}
          gap={3}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "5rem",
          }}
        >
          <Card sx={{ maxWidth: 345, flexDirection: "row" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://getprivacy.com.br/wp-content/uploads/tratamento-de-dados.jpg"
                alt="tratamento de dados"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to="/tratamento">Tratamento de Dados</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Essa etapa permite ao usuário realizar o input da carta da
                  Anfavea mensal e realizar a conversão para excel, dessa forma
                  será obtido a data de emplacamento, chassi e dados de
                  emplacamento separados por colunas.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://getprivacy.com.br/wp-content/uploads/00_5-pontos-da-lgpd-que-ainda-precisam-ser-regulamentados-pela-anpd.jpg"
                alt="consolidação de dados"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to="/consolidacao">Consolidação</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uma vez obtido em etapa anterior as cartas da Anfavea em
                  Excel, agora o usuário pode realizar a consolidação desses
                  arquivos, dessa forma obterá o total de chassis emplacados
                  durante o período em escopo.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://getprivacy.com.br/wp-content/uploads/mapeamento-de-dados-lgpd.jpg"
                alt="análise dos dados"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to="/analise">Análise</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Essa etapa permite ao usuário realizar a verificação dos
                  chassis que estão nas cartas de Anfavea com o possível
                  relatório de Cutoff. Será devolvido ao usuário um excel com os
                  chassis em comum entre os dois relatórios, assim como a
                  exibição gráfica contendo a representatividade dos chassis em
                  comum entre os dois relatórios.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <footer>
          <AppFooter />
        </footer>
      </Box>
    </>
  );
}

export default Home;
