import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PUERTO || process.env.PORT || 8000;   

app.listen(PORT, () => {
    console.log(`Servidor funcionando :D en el puerto ${PORT}`);
});

// En ESM se exporta así por defecto
export default app; 
