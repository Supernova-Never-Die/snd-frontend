// Notifications.vue
<template>
    <div class="notifications">
        <div v-for="message in messages" :key="message" class="notification">
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationsComponent',
    props: ['messages'],
    // messages prop should be an array of strings
};
</script>

<style>
/* Make these notifications smooth and snappy */
</style>
