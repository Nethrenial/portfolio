<script lang="ts" setup>

import type { ComponentPublicInstance } from 'vue'

export interface ThemeOptionProps {
    option: "modern&creative" | "minimalist" | "traditional",
    text: string,
    mousePosition: { x: number, y: number }
}

const props = defineProps<ThemeOptionProps>()




const optionCard = ref<ComponentPublicInstance | null>(null)

watch(() => props.mousePosition, (newVal) => {
    const mouseX = newVal.x
    const mouseY = newVal.y
    if (optionCard.value && optionCard.value.$el) {
        const cardRect = optionCard.value.$el.getBoundingClientRect()
        if (mouseX > cardRect.left - 200 && mouseX < cardRect.right + 200 && mouseY > cardRect.top - 200 && mouseY < cardRect.bottom + 200) {
            optionCard.value.$el.classList.add('bg-[rgba(var(--light),0.06)]')
        } else {
            optionCard.value.$el.classList.remove('bg-[rgba(var(--light),0.06)]')
        }
    }
})


</script>

<template>
    <NuxtLink :to="{
    path: `/${props.option === 'modern&creative' ? 'modern' : (props.option === 'minimalist' ? 'minimalist' : (props.option === 'traditional' ? 'traditional' : 'modern'))}/home`,

}" ref="optionCard" rel="prefetch"
        class="flex flex-col gap-8 items-center justify-center py-8 cursor-pointer transition-all duration-400 ease-in-out bg-[rgba(var(--light),0.02)] hover:bg-[rgba(var(--light),0.15)] hover:bg rounded-xl text-white">
        <Icon name="mdi:lightbulb-on-outline" v-if="props.option === 'modern&creative'"
            class="text-7xl text-white z-50" />
        <Icon name="material-symbols:square-outline-rounded" v-if="props.option === 'minimalist'"
            class="text-7xl text-white z-50" />
        <Icon name="fluent-emoji-high-contrast:crown" v-if="props.option === 'traditional'"
            class="text-7xl text-white z-50" />
        <p v-html="props.text" class="text-center text-md lg:text-xl text-white z-50">
        </p>
    </NuxtLink>
</template>


<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;
</style>