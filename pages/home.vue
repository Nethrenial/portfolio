<script setup lang="ts">
const { query } = useRoute()
const theme = query.theme ?? "modern&creative"


useHead({
    title: 'Nethsara | Home',
    htmlAttrs: {
        lang: 'en'
    }
})


</script>


<template>
    <div>
        I'm using {{ theme }}
    </div>
</template>