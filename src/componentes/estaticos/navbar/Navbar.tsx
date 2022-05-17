import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link, useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import UserLogin from '../../../models/UserLogin';
import './Navbar.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/action';
import { Button } from '@material-ui/core';
import { Home } from "@material-ui/icons";
import {Avatar,  Divider,  Drawer,  List,  ListItemButton,  ListItemIcon,  ListItemText,  useTheme,} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from '../../contexts/DrawerContext';
import Produto from '../../../models/Produto';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      marginRight: 20,
    },
    title2: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

function Navbar() {
  
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { toggleDrawerOpen } = useDrawerContext();


  function Logout() {
    dispatch(addToken(''));
    handleMenuClose();
    navigate('/login')
  }


   function Perfil(){
      handleMenuClose();
      navigate('/perfil')
    }


 
  function Login(){
    handleMenuClose();
    navigate('/login')

  }

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  const user = useSelector<TokenState, TokenState["usuarios"]>(
    (state) => state.usuarios
  );
  
  console.log({"email": user})
  console.log({"token": token})


  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={Login}>Login</MenuItem>
      <MenuItem onClick={Perfil}>Perfil</MenuItem>
      <MenuItem onClick={Logout}>Deslogar</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem> 
        <IconButton aria-label="0 notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Mensagens</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="0 notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificações</p>
      </MenuItem>
      */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );
  const [listaProduto,setListaProduto]=useState<Produto[]>([])
  var listarProduto;
  var navbarComponent;
  navbarComponent=
  listarProduto=
  <div className={classes.grow}>
  <AppBar position="static">
    <Toolbar className="back">
      <IconButton
       onClick={toggleDrawerOpen}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
      >
              
        <MenuIcon />
      </IconButton>
      <Link to='/home' className='text-decorator-none-navbar'>
        <Typography className={classes.title} variant="h6" noWrap >
          R3connect
        </Typography>
      </Link>

      <Link to='/sobre' className='text-decorator-none-navbar'>
        <Typography className={classes.title2} variant="h6" noWrap>
          <div className='margem-paginas'>
            Sobre
          </div>
        </Typography>
      </Link>
       {/*<div className={classes.search}>
        <div className={classes.searchIcon}>
         <Link to={`/listarProduto/nome/${produto.nome}`}> 
          <Button>
          <SearchIcon />
          </Button>
          </Link>
        </div>
      
        <InputBase value={produto.nome}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
       
      </div>
       */}
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
  {renderMobileMenu}
  {renderMenu}
</div>
 

  if (token !== "" && user == "admin.admin@email.com") {
    
    navbarComponent =
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className="back">
          <IconButton
          onClick={toggleDrawerOpen}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link to='/home' className='text-decorator-none-navbar'>
            <Typography className={classes.title} variant="h6" noWrap >
              R3connect
            </Typography>
          </Link>
          
          <Link to='/sobre' className='text-decorator-none-navbar'>
            <Typography className={classes.title2} variant="h6" noWrap>
              <div className='margem-paginas'>
                Sobre
              </div>
            </Typography>
          </Link>
          <Link to='/cadastrarCategoria' className='text-decorator-none-navbar'>
            <Typography className={classes.title2} variant="h6" noWrap>
              <div className='margem-paginas'>
                Cadastrar Categoria
              </div>
            </Typography>
          </Link>
          <Link to='/listarCategoria' className='text-decorator-none-navbar'>
            <Typography className={classes.title2} variant="h6" noWrap>
              <div className='margem-paginas'>
                Lista Categoria
              </div>
            </Typography>
          </Link>
          <Link to='/listarProduto' className='text-decorator-none-navbar'>
            <Typography className={classes.title2} variant="h6" noWrap>
              <div className='margem-paginas'>
                Lista produto
              </div>
            </Typography>
          </Link>
          {listarProduto=listaProduto.map(produto=>(
          <div className={classes.search}>
            <div className={classes.searchIcon}>
           
            <Link to={`/listarProduto/nome/${produto.nome}`}>
          <Button>
              <SearchIcon />
          </Button>

            </Link>
            </div>
             <InputBase value={produto.nome}
              placeholder="Search…" 
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>))}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 0 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 0 new notification" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>


  } else if (token !==""  && user !== "admin.admin@email.com"){
    navbarComponent = 
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className="back">
          <IconButton
          onClick={toggleDrawerOpen}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />

          </IconButton>
          <Link to='/home' className='text-decorator-none-navbar'>
            <Typography className={classes.title} variant="h6" noWrap >
              R3connect
            </Typography>
          </Link>
          
          <Link to='/sobre' className='text-decorator-none-navbar'>
            <Typography className={classes.title2} variant="h6" noWrap>
              <div className='margem-paginas'>
                Sobre
              </div>
            </Typography>
          </Link>
          <Link to='/listarProduto' className='text-decorator-none-navbar'>
            <Typography className={classes.title2} variant="h6" noWrap>
              <div className='margem-paginas'>
                Produtos
              </div>
            </Typography>
          </Link>
          {listarProduto=listaProduto.map(produto=>(
          <div className={classes.search}>
            <div className={classes.searchIcon}>
           
            <Link to={`/listarProduto/nome/${produto.nome}`}>
          <Button>
              <SearchIcon />
          </Button>

            </Link>
            </div>
             <InputBase value={produto.nome}
              placeholder="Search…" 
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>))}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 0 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 0 new notification" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>

  }
  
  
  return (
      <>
        {navbarComponent}   
      </>
  );
  
}

export const MenuLateral: React.FC = ({ children }) => {
  const theme = useTheme();
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant='temporary' onClose={toggleDrawerOpen}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection={"column"}
        >
          <Box
            width={"100%"}
            height={theme.spacing(20)}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="A"
              src="/static/images/avatar/2.jpg"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                   <Home></Home>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box>
        {children}
      </Box>
    </>
  );
  
};

export default Navbar;