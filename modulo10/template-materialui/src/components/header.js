import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';  // Icone de menu (opcional)

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: '#282c34' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Ícone de menu (descomentado caso queira adicionar funcionalidade de menu) */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Título do cabeçalho */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>

          {/* Botão de ação no cabeçalho */}
          <Button
            color="inherit"
            sx={{ fontSize: '16px', fontWeight: 'bold' }}
            onClick={() => alert("Botão clicado!")}
          >
            Adicionar Tarefa
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
