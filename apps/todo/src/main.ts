import express from 'express';
import mainRoute from './mainRoute';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Add JSON parsing middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'hello ajitesh' });
});

app.use('/api/v1', mainRoute);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
