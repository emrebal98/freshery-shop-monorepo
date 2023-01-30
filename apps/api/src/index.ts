import logger from 'logger';
import { env } from './env/server';
import createServer from './server';

const PORT = env.API_PORT || 3333;
const server = createServer();

server.listen(PORT, () => {
  logger.info(`🚀 Server ready at: http://localhost:${PORT}`);
});
