<template>
    <li>
        <button>{{ label }}</button>
    </li>
</template>

<script>
export default {
    name: 'SidebarButton',
    props: [
        'label',
    ],
    components: {
        
    },
}
</script>