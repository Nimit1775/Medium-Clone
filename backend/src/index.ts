import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

app.post(' /api/v1/user/signup', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())

  return c.text('signup route')
})

app.post(' /api/v1/user/signin', (c) => {
  return c.text('signin route')
})

app.post(' /api/v1/blog', (c) => {
  return c.text(' post blog route')
})
app.put(' /api/v1/blog', (c) => {
  return c.text(' put blog route')
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text(' get blog route')
})
app.get('/' , (c)=> {
  return c.text('Welcome to Hono')
})


export default app
