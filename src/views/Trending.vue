<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-table v-loading="loading" :data="repoList" style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="Repo" width="180"></el-table-column>
      <el-table-column prop="stars" label="Stars" width="80"></el-table-column>
      <el-table-column prop="language" label="Language" width="100"></el-table-column>
      <el-table-column prop="forks" label="Forks" width="80"></el-table-column>
      <el-table-column prop="url" label="URL">
        <template slot-scope="scope">
          <el-link type="primary" v-bind:href="scope.row.url" target="_blank">{{ scope.row.url }}</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Trending",
  data() {
    return {
      msg: "GitHub Trending",
      loading: true,
      repoList: []
    };
  },
  methods: {
    async fetch() {
      try {
        const res = await this.$http.get("repositories");
        this.loading = false;
        this.repoList = res.data;
      } catch (err) {
        this.loading = false;
        this.$message.error("failed to fetch GitHub Trending");
      }
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
