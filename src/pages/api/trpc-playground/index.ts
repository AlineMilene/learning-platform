// pages/api/trpc-playground.ts
import { NextApiHandler } from 'next'
import { nextHandler } from 'trpc-playground/handlers/next'
import { appRouter } from '../../../server/router'

const setupHandler = nextHandler({
  router: appRouter,
  // tRPC api path, pages/api/trpc/[trpc].ts in this case
  trpcApiEndpoint: '/api/trpc',
  playgroundEndpoint: '/api/trpc-playground',
})

const handler: NextApiHandler = async (req, res) => {
  const playgroundHandler = await setupHandler
  await playgroundHandler(req, res)
}

export default handler