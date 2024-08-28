import { Hono } from 'hono'
import {sign , verify} from 'hono/jwt' 
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

const app = new Hono<{
  Bindings : {
    DATABASE_URL: string , 
    JWT_SECRET : string ,  
  }
}>() ; 

app.route("/api/v1/user" , userRouter) ; 
app.route("api/v1/blog" , blogRouter) ;




app.post('/api/v1/blog', (c) => {
  return c.text(' post blog route')
})
app.put('/api/v1/blog', (c) => {
  return c.text(' put blog route')
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text(' get blog route')
})
app.get('/' , (c)=> {
  return c.text('Welcome to Hono')
})


export default app
