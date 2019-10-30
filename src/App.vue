<template>
  <el-container style="height: 100vh">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu default-active="/home" router>
          <el-menu-item-group>
            <template slot="title">
              <i class="el-icon-message"></i>
              分组一
            </template>
            <el-menu-item index="/trending">GitHub Trending</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">导航二</template>
            <el-menu-item index="/subhome">选项2-1</el-menu-item>
            <el-menu-item index="/subabout">选项2-2</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name: "app"
  // created() {
  //   this.$router.push("/home");
  // }
};
</script>