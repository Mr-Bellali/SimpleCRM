import express from 'express';
import entreprisesRoutes from './routes/entreprises.js';
import clientsRoutes from './routes/clients.js';
import boncommandesRoutes from './routes/boncomands.js'


const app = express();

app.use(express.json());

app.use('/entreprises', entreprisesRoutes);
app.use('/clients', clientsRoutes);
app.use('/boncommandes', boncommandesRoutes);

app.listen(5000, () => console.log(`server running on port 5000`));