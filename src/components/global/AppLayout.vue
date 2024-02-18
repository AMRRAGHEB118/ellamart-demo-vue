<template>
    <div class="app-layout">
        <v-layout>
            <CartDrawer></CartDrawer>
            <AppNav></AppNav>
            <v-main>
            <slot></slot>
            </v-main>
            <AppFooter></AppFooter>
        </v-layout>
    </div>
</template>

<script lang="ts">
import AppNav from './AppNav.vue';
import AppFooter from './AppFooter.vue';
import CartDrawer from '../CartDrawer.vue';
export default {
    components: {
    AppNav,
    AppFooter,
    CartDrawer
}
}
</script>
<style lang="scss">
    
</style>
