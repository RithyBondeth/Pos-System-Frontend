<script setup>
defineProps({
    outlined: {
        type: Boolean,
        default: true,
    },
    icon: {
        type: String,
        required: true,
    },

});
</script>

<template>
<span :class="outlined ? 'material-symbols-outlined cursor-pointer' : 'material-symbols cursor-pointer'">
    {{ icon }}
</span>
</template>