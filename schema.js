import { makeExecutableSchema } from 'graphql-tools';

import Banners from './service';
// import { PubSub, withFilter } from 'graphql-subscriptions';

// const pubsub = new PubSub();

const typeDefs = [`
  type Banner {
    type: String
    content: String
  }

  type Query {
    BannerData(type: String!): [Banner]
  }

  schema {
    query: Query
  }
`];

const resolvers = {
  Query: {
    BannerData(root, { type }, context) {
      return Banners.getBannerData(type);
    }
  }
};

const jsSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default jsSchema;
