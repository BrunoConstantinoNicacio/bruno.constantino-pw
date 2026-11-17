
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Rota inicial para testar o servidor
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});


app.post('/api/login', (req, res) => {
    const { login, senha } = req.body;

    const sql = 'SELECT * FROM USUARIOS WHERE login = ?';

    db.query(sql, [login], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                mensagem: 'Erro no servidor'
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                mensagem: 'Usuário não encontrado'
            });
        }

        const usuario = results[0];

        if (senha !== usuario.senha) {
            return res.status(401).json({
                mensagem: 'Senha incorreta'
            });
        }

        res.json({
            mensagem: 'Login realizado com sucesso!'
        });
    });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
