import app from './src/app.js'; // Importação padrão (default)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
