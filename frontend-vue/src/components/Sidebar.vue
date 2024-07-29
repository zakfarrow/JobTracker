<template>
    <div class="fixed h-screen w-64 flex flex-col bg-slate-50">
        <span class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight">Profile Overview</span>
        <ul>
            <SidebarButton label="Edit Profile"/>
            <SidebarButton label="Settings"/>
            <SidebarButton label="Account"/>
        </ul>
    </div>
</template>

<script>
import SidebarButton from '@/components/SidebarButton.vue';

export default {
    name: 'Sidebar',
    components: {
        SidebarButton,
    },
}
</script>