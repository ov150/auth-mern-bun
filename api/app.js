import { Hono } from 'hono'
import { expenseRoutes } from "./routes/expense";

const app = new Hono()
app.route('/api/expense', expenseRoutes);

export default app;



