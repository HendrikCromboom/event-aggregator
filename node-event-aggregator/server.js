import express from 'express';
import router from './routes/api/v1/index.js'

const app = express();

app.use("/api", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});