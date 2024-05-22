import { Hono } from "hono";

export const expenseRoutes = new Hono();

expenseRoutes.get('/', (c)=>{
    return c.json({
        "message": "hello form home page"
    })
})

expenseRoutes.post("/", (c)=>{
    return c.json({
        "message": "hello from post home page"
    })
})