<template>
    <div class="nav-drawer">
        <v-navigation-drawer v-model="drawer" location="right"></v-navigation-drawer>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            drawer: false
        }
    },
    mounted() {
        this.Emitter.on("openCart", () => {
            this.drawer = !this.drawer
        })
    }
}
</script>
<style lang="scss">
    
</style>