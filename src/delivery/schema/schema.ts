// schema.ts
import { GraphQLFieldConfigMap, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { createUserMutation, deleteUserMutation, updateUserUseMutation } from '../mutation/user';
import { getUserByIDQuery } from '../query/user';

class AppGraphQLSchema {
  private schema: GraphQLSchema;

  constructor() {
    this.schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
          getUserByID: getUserByIDQuery
        })
      }),



      mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
          createUser: createUserMutation,
          updateUser: updateUserUseMutation,
          deleteUser: deleteUserMutation
        })
      }),
    });
  }

  public getSchema() {
    return this.schema;
  }
}

export { AppGraphQLSchema };
