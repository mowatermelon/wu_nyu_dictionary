<template>
  <div class="mdui-container-fluid">
      <div class="mdui-text-center">
        <div class="mdui-row"><div class="banner" v-html="content"></div></div>
      </div>
      <h1>有则</h1>
    <vfooter></vfooter>
	</div>
</template>

<script>
import Vfooter from '../components/footer'
import gql from 'graphql-tag';

export const SUB_QUERY = gql `subscription tags($type: String!) {
    bannerAdded(type: $type) {
      type
      content
    }
  }`;
export default {
  name: 'Rule',
  data() {
    return {
      type: "west",
      content:""
    };
  },
  apollo: {
    $client: "a",
    $loadingKey: "loading",
    BannerData() {
      console.log(this.type);
      return {
        // client: 'a',
        // GraphQL Query
        query: gql`
          query bannerList($type: String!) {
            BannerData(type: $type) {
              type
              content
            }
          }
        `,
        // Reactive variables
        variables() {
          return {
            type: this.type
          };
        },
        // manual: true,
        // Polling
        // pollInterval: 300, // ms
        // Hook example
        result(result) {
          if (!result.loading) {
            this.content = result.data.BannerData[0].content
          }
        },
        fetchPolicy: "cache-and-network",
        subscribeToMore: [
          {
            document: SUB_QUERY,
            variables() {
              return {
                type: this.type
              };
            },
          }
        ]
      };
    }
  },
  mounted() {
    // Programmatic subscription
    const observer = this.$apollo.subscribe({
      query: SUB_QUERY,
      variables: {
        type: this.type
      }
    });
    observer.subscribe({
      next(data) {
        console.log("this.$apollo.subscribe", data);
      }
    });
  },
  components: {
    Vfooter
  }
}
</script>

<style lang="scss" scoped>

</style>
