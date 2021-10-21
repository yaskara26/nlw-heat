import 'dotenv/config';
import { Server } from "socket.io";

import express from "express";
import http from "http";
import routes from './routes';
import cors from "cors";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {
  console.log(`Usuario conectado no socket ${socket.id}`)
});

app.use(express.json());
app.use(routes)

export { serverHttp, io };