import express from 'express';

import { connectToDatabase } from '@/database';

import itemsRouter from '@/routes/items';
import cartRouter from '@/routes/cart';
import authRouter from '@/routes/auth';

const app = express();

connectToDatabase();

// Global Authentication Middleware
// app.use()

app.use('/items', itemsRouter);
app.use('/cart', cartRouter);
app.use('/auth', authRouter);

export default app;