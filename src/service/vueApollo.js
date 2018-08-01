import Vue from 'vue'

import 'isomorphic-fetch'

import {ApolloClient,createNetworkInterface} from 'apollo-client'

import {SubscriptionClient,addGraphQLSubscriptions} from 'subscriptions-transport-ws'

import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const fixIp = 'localhost:3020';

const networkInterface = createNetworkInterface({
  uri: 'http://' + fixIp + '/graphql',
})

const wsClient = new SubscriptionClient('ws://' + fixIp + '/subscriptions', {
  reconnect: true,
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient,
)

const apolloClient = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  connectToDevTools: true,
})

let loading = 0

const apolloProvider = new VueApollo({
  clients: {
    a: apolloClient,
  },
  defaultClient: apolloClient,
  defaultOptions: {
    // $loadingKey: 'loading',
  },
  watchLoading(state, mod) {
    loading += mod
    console.log('Global loading', loading, mod)
  },
  errorHandler(error) {
    console.log('Global error handler')
    console.error(error)
  },
})

export default apolloProvider
