import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { AppGraphQLSchema } from './delivery/schema/schema';

class Cmd {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.setupGraphQL();
  }

  private async setupGraphQL() {
    const appGraphQLSchema = new AppGraphQLSchema().getSchema();

    const server = new ApolloServer({
      schema: appGraphQLSchema,
      plugins: [
        {
          async requestDidStart() {
            return {
              async didEncounterErrors() {

              },
            };
          },
        },
      ],
    });
    await server.start()
    server.applyMiddleware({ app: this.app as any, path: '/graphql' });
  }

  public getApp() {
    return this.app;
  }
}

export{Cmd}