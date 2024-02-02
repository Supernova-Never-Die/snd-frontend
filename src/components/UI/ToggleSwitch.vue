// ToggleSwitch.vue
<template>
    <div class="toggle-switch">
        <input type="checkbox" id="supply-borrow" @change="toggleMode">
        <label for="supply-borrow">{{ mode }}</label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mode: 'Supply', // Default mode
        };
    },
    methods: {
        toggleMode() {
            this.mode = this.mode === 'Supply' ? 'Borrow' : 'Supply';
            // Emit an event for the parent to listen to
            this.$emit('modeChanged', this.mode);
        }
    }
};
</script>

<style>
/* Add your CSS magic here */
</style>
