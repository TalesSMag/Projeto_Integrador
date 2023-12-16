const cors = require("cors");

require("dotenv").config();

const db = require("./db");

const express = require("express");

const app = express();

app.use(cors());

app.use(express.json());

app.delete("/agendamentos/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const dataAtual = new Date().toISOString().split("T")[0]
    await db.deleteAgend(id);
    response.sendStatus(204);
})

app.patch("/agendamentos/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const agend = request.body;
    const dataAtual = new Date().toISOString().split("T")[0]
    await db.updateAgend(id, agend);
    response.sendStatus(200);
})

app.post("/agendamentos", async (request, response) => {
    const agend = request.body;
    const dataAtual = new Date().toISOString().split("T")[0]
    await db.insertAgend(agend);
    response.sendStatus(201);
})

app.get("/agendamentos/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const dataAtual = new Date().toISOString().split("T")[0]
    const results = await db.selectAgend(id);
    response.json(results);
})

app.get("/agendamentos", async (request, response) => {
    const results = await db.selectAgendamentos();
    const dataAtual = new Date().toISOString().split("T")[0]
    response.json(results);
})

app.get("/", (request, response, next) => {
    response.json({
        message: "Oi Jean!"
    })
})

app.listen(process.env.PORT, () => {
    console.log("Jean Conceição Server Rodando!");
});

