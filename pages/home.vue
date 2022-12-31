<script setup lang="ts">
const { query } = useRoute()
const theme = query.theme ?? "modern&creative"

</script>


<template>
    <div>
        I'm using {{ theme }}
    </div>
</template>