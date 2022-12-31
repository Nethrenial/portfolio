<script lang="ts" setup>
import { ThemeOptionProps } from '@/components/Util/ThemeOption.vue';


definePageMeta({
    layout: 'landing',
})



/**
 * Theme options to view the portfolio
 */
const themeOptions: (Partial<ThemeOptionProps> & { option: string, text: string })[] = [
    {
        option: 'modern&creative'
        , text: `I'm a visionary<br> <span class="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem]">Modern & Creative</span>`
    },
    {
        option: 'minimalist',
        text: `I value simplicity<br> <span class="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem]">Minimalist</span>`
    },
    {
        option: 'traditional',
        text: `I appreciate classic elegance<br> <span class="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem]">Traditional</span>`
    }
]


//  handle light source animation
const lightEl = ref<HTMLElement | null>(null)
const mousePosition = ref({ x: 0, y: 0 })


onMounted(() => {
    const light = lightEl.value
    document.body.addEventListener('mousemove', (e) => {
        if (light) {
            light.style.top = `${e.clientY - 10}px`
            light.style.left = `${e.clientX - 10}px`
            mousePosition.value = {
                x: e.clientX,
                y: e.clientY
            }
        }
    })

})

</script>



<template>
    <div
        class="introduction min-h-screen flex flex-col justify-center text-white px-4 md:px-6 lg:px-8 py-6 md:py-12 lg:py-16">
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold ff-righteous z-50">Hi, I'm Nethsara!</h1>
        <p class="mt-8 md:text-xl lg:text-2xl z-50">So, you want to know about me ?
            <br>
            But let me ask you one thing, Which of these phrases define you?
        </p>
        <div
            class="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch md:gap-x-8 lg:gap-x-16 gap-y-4 md:gap-y-8">
            <UtilThemeOption v-for="{ option, text } in themeOptions" :option="option" :text="text" key="option"
                :mouse-position="mousePosition" />
        </div>
        <footer class="mt-16 ff-righteous text-xl md:text-2xl lg:text-3xl text-center md:text-left z-50">
            Find your way through my work, your way
        </footer>
        <div class="light absolute w-[1px] h-[1px] bg-transparent" ref="lightEl"></div>
    </div>
</template>


<style lang="scss" scoped>
@use "@/assets/scss/variables" as vars;
@use "@/assets/scss/mixins" as mixins;

.introduction {
    @include mixins.xl-container;
}

.light {
    box-shadow: 0 0 200px 200px rgba(200, 100, 255, 0.5);
}
</style>
