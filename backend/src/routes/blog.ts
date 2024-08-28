import { Hono } from "hono";

export const blogRouter = new Hono()  ; 

blogRouter.post('/', (c) => {
    return c.text(' post blog route')
  })
  blogRouter.put('/', (c) => {
    return c.text(' put blog route')
  })
  blogRouter.get('/', (c) => {
    return c.text(' get blog route')
  })
  blogRouter.get('/bulk', (c) => {
    return c.text(' get blog route')
  })