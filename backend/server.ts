require('dotenv').config();
import express, { Request, Response } from 'express';
import {
  userRoutes,
  projectRoutes,
  dataFlowRoutes,
  nodeRoutes,
  edgeRoutes,
  pineconeIndexRoutes,
  cohereBlockRoutes,
} from './routes/api/_index';
const app = express();
import { connectDB } from './db';
const port = process.env.PORT || 5000;
import bodyParser from 'body-parser';


var cors = require('cors');
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  })
);
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server running on port ${port}`));

// Logging request
app.use((req, res, next) => {
  console.log(
    req.method,
    '-->',
    req.originalUrl,
    '\t \t at',
    Date.now().toString()
  );
  next();
});
// Using Routes
app.use('/users', userRoutes());
app.use('/projects', projectRoutes());
app.use('/dataFlows', dataFlowRoutes());
app.use('/nodes', nodeRoutes());
app.use('/edges', edgeRoutes());
app.use('/pineconeIndexRoutes', pineconeIndexRoutes());
app.use('/cohereBlockRoutes', cohereBlockRoutes());

// Default display
app.get('/', (req: Request, res: Response) =>
  res.sendFile(__dirname + '/index.html')
);

// Connecting the database
connectDB();
exports.app = app;
