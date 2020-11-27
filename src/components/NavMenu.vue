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
        @click="handleClick(item)"
      >
        <i :class="item.icon" style="margin-right: 10px"></i>
        <span>{{ item.title }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch, isReactive, isRef, computed } from "vue";
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
      active: 0,
      menuList
    });
    const menuOptions = computed(() =>
      state.menuList.map(item => {
        switch (item.key) {
          case 0:
            return { ...item, path: "/home" };
          case 1:
            return { ...item, path: "/category" };
          case 2:
            return { ...item, path: "/tag" };
          case 3:
            return { ...item, path: "/timeline" };
        }
      })
    );
    const handleClick = obj => {
      console.log(obj);
      state.active = obj.key;
      router.push(obj.path);
    };
    watch(
      () => route.path,
      newVal => {
        const target = menuOptions.value.find(item => item.path === newVal);
        console.log(target, newVal);
        if (target) {
          state.active = target.key;
        }
      }
    );

    return { ...toRefs(state), menuOptions, handleClick };
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
