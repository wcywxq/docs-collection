<!--
 * @Author: magic
 * @Date: 2020-11-23 23:09:03
 * @LastEditTime: 2020-11-23 23:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/components/NavMenu.vue
-->
<template>
  <div class="nav-menu">
    <el-row type="flex">
      <el-col
        v-for="item in menuOptions"
        :key="item.title"
        :class="{
          'nav-menu-item': true,
          'nav-menu-item__active': active === item.key
        }"
        @click="onChange(item.key)"
      >
        <i :class="item.icon" style="margin-right: 10px"></i>
        <span>{{ item.title }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch, isReactive, isRef } from "vue";
import { useRoute, useRouter } from "vue-router";

const menuList = [
  { icon: "el-icon-s-home", title: "回到主页", key: 0 },
  { icon: "el-icon-folder-opened", title: "分类", key: 1 },
  { icon: "el-icon-collection-tag", title: "标签", key: 2 },
  { icon: "el-icon-time", title: "归档", key: 3 }
];

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      menuOptions: [],
      active: 0
    });

    state.menuOptions = menuList;

    const onChange = val => {
      state.active = val;
      switch (val) {
        case 0:
          router.push("/home");
          break;
        case 1:
          router.push("/category");
          break;
        case 2:
          router.push("/tag");
          break;
        case 3:
          router.push("/timeline");
          break;
      }
    };

    watch(
      () => route.path,
      newVal => {
        switch (newVal) {
          case "/home":
            state.active = 0;
            break;
          case "/category":
            state.active = 1;
            break;
          case "/tag":
            state.active = 2;
            break;
          case "/timeline":
            state.active = 3;
            break;
        }
      }
    );

    return { ...toRefs(state), onChange };
  }
};
</script>
<style lang="scss" scoped>
.nav-menu {
  &-item {
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &__active {
      position: relative;
      color: #1bc3fb;
      background-color: rgba(27, 195, 251, 0.1);
      transition: all 0.3s ease;
      &:after {
        content: "";
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        background-color: #1bc3fb;
        animation: showActiveLink 1s forwards;
      }
    }

    &:hover {
      color: #1bc3fb;
      background-color: rgba(27, 195, 251, 0.1);
    }
  }
}
@keyframes showActiveLink {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
