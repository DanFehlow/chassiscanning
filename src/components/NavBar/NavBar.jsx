import * as React from "react";
import { Link } from "react-router-dom";
import "./styleNav.css";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 20,
    marginTop: theme.spacing(1),
    minWidth: 30,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    // boxShadow:
    //   "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    // "& .MuiMenu-list": {
    //   padding: "4px 0",
    // },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid
        sx={{
          display: { xs: "grid", sm: "none", md: "none", lg: "none" },
        }}
      >
        <header>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<MenuIcon />}
            sx={{ ml: "80%", minWidth: "0.5rem" }}
          ></Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <Link to="/">Home</Link>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <Link className="" to="/tratamento">
                Tratamento
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <Link className="" to="/consolidacao">
                Consolidação
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <Link className="" to="/analise">
                Análise
              </Link>
            </MenuItem>
          </StyledMenu>
        </header>
      </Grid>

      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        <header>
          <Link className="logo" to="/">
            Chassi Scanning
          </Link>
          <Link className="links" to="/tratamento">
            Tratamento
          </Link>
          <Link className="links" to="/consolidacao">
            Consolidação
          </Link>
          <Link className="links" to="/analise">
            Análise
          </Link>
        </header>
      </Box>
    </>
  );
}

export default NavBar;
