<template>
    <div class="layout">
      <div class="menu">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> 

        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
<<<<<<< HEAD
            <el-menu-item index="">
=======
            <el-menu-item index="/blog">
>>>>>>> d6801fe (create and delete)
                <i class="el-icon-menu"></i>
                <span slot="title">博客内容</span>
            </el-menu-item>

            <el-menu-item index="">
                <i class="el-icon-document"></i>
                <span slot="title">视频上传</span>
            </el-menu-item>

            <el-menu-item index="">
                <i class="el-icon-location"></i>
                <span slot="title">导航三</span>
            </el-menu-item>

            <el-menu-item index="/userlist">
                <i class="el-icon-setting"></i>
                <span slot="title">用户列表</span>
            </el-menu-item>
        </el-menu>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
</template>


<script>
 export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.layout{
  display: flex;
}
.menu{
  width: 200px;
}
.container{
  width: 90%;
}

</style>