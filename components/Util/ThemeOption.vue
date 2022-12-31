<script lang="ts" setup>

export interface ThemeOptionProps {
    option: "modern&creative" | "minimalist" | "traditional",
    text: string
}

const props = defineProps<ThemeOptionProps>()

</script>

<template>
    <NuxtLink :to="{
    path: '/home',
    query: {
        theme: props.option
    }
}" class="theme-option flex flex-col gap-8 items-center justify-center py-8 cursor-pointer transition-all duration-100 ease-in-out bg-[rgba(var(--light),0.02)] hover:bg-[rgba(var(--light),0.1)] hover:bg rounded-xl text-white">
        <Icon name="mdi:lightbulb-on-outline" v-if="props.option === 'modern&creative'" class="text-7xl text-white" />
        <Icon name="material-symbols:square-outline-rounded" v-if="props.option === 'minimalist'"
            class="text-7xl text-white" />
        <Icon name="fluent-emoji-high-contrast:crown" v-if="props.option === 'traditional'"
            class="text-7xl text-white" />
        <p v-html="props.text" class="text-center text-xl text-white">
        </p>
    </NuxtLink>
</template>


<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.theme-option {}
</style>