<script>
    import Nav from "../components/nav.svelte"; 
</script>
<!-- <Nav></Nav> -->
<slot></slot>
<style>
    /* Injects Tailwind's base styles & any base styles registered by plugins. */
@tailwind base;

/* Injects Tailwind's component classes & any component classes registered by plugins. */
@tailwind components;

/* Injects Tailwind's utility classes & any utility classes registered by plugins. */
@tailwind utilities;

</style>

