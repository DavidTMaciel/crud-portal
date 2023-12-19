import { Cmd } from './app';

const port = 3040;

async function startServer() {
  try {
    const cmd = new Cmd();
    cmd.getApp().listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log("Failed to start the server:", error);
  }
}

startServer();