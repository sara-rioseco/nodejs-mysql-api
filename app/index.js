import express from 'express'
import { limiter } from './middleware/index.js';
import { auth as db }  from './db/auth.js';
import { router } from "./routes/index.js";
import pkg from '../package.json' with { type: "json" };

let app
export default app = express()

app.disable('x-powered-by')
app.set('pkg', pkg)
app.use(express.json());
app.use(limiter);
app.use("/", router);
app.get('/', (req, res) => res.json({name: pkg.name, version: pkg.version, author: pkg.author}))
app.all('*', (req, res, nextAll) => nextAll(404))

await db()