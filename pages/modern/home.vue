<script setup lang="ts">
import { init } from '@/game'

const isGameScreenVisible = ref(false)
const gameScene = ref<HTMLDivElement | null>()

function startGameWorld() {
    isGameScreenVisible.value = true
    if (gameScene.value) init(gameScene.value)
}

</script>



<template>
    <div id="game-screen">
        <div v-show="!isGameScreenVisible"
            class="w-screen h-screen bg-[var(--color-dark-background)] flex-center flex-col gap-4">
            <h1 class="text-[var(--color-light)] text-4xl">Start the journy</h1>
            <button @click="startGameWorld" class="bg-red-600 text-white px-4 py-2 rounded-md"
                type="button">Launch</button>
        </div>
        <div ref="gameScene" id="game-scene" class="h-screen w-screen absolute overflow-hidden"
            v-show="isGameScreenVisible">

        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "@/assets/scss/mixins" as mixins;
@use "@/assets/scss/variables" as variables;

#game-scene {
    background-image: url(~/assets/images/backgrounds/starry-night.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>