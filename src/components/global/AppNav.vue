<template>
    <div class="app-nav">
        <v-app-bar>
            <v-app-bar-nav-icon @click="openCart()"></v-app-bar-nav-icon>
        </v-app-bar>
    </div>
</template>
<script lang="ts">
export default {
    methods: {
        openCart() {
            this.Emitter.emit("openCart")
        }
    }
}
</script>
<style lang="scss">
    
</style>