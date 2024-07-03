const express = require("express");
const ManagerUsers = require("./ManagerUsers");

const app = express();

const manager = new ManagerUsers();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.get("/usuarios", async (req, res) => {
  try {
    const users = await manager.consultarUsuarios();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/usuarios", async (req, res) => {
  try {
    const { name, sobrenome, idade, curso } = req.body;
    const newUser = await manager.criarUsuario({
      name,
      sobrenome,
      idade,
      curso,
    });
    return res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    const { name, sobrenome, idade, curso } = req.body;
    const { id } = req.params;
    const userUpdated = await manager.updateAllUser(
      { name, sobrenome, idade, curso },
      id
    );
    return res.status(200).json({ user: userUpdated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.patch("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdated = await manager.updateUser(req.body, id);
    return res.status(200).json({ user: userUpdated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const done = await manager.deleteUser(id);
    if (done) {
      return res.sendStatus(204);
    }
    return res.status(404).json({ error: "Usuario nao encontrado/deletado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});



module.exports = app;
