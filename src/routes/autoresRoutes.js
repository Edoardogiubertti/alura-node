import express from "express"
import LivroController from "../controllers/autoresController.js"

const router = express.Router();

router
    .get("/autores", LivroController.listarAutores)
    .get("/autores/:id", LivroController.listarAutoresPorId)
    .post("/autores", LivroController.cadastrarAutor)
    .put("/autores/:id", LivroController.atualizarAutor)
    .delete("/autores/:id", LivroController.excluirAutor)

export default router;