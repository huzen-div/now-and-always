<template>
    <div class="lds-ripple-main" v-if="isldsLoading">
        <span class="lds-loader"></span>
    </div>
    <Topbar />
    <Navbar />
    <router-view />
    <Footer />
</template>

<script>
import Navbar from './Navbar.vue';
import Topbar from './Topbar.vue';
import Footer from './Footer.vue';
export default {
    name: 'AppLoyout',
    data() {
        return {
        };
    },
    props: {},
    methods: {
    },
    components: {
        Navbar,
        Topbar,
        Footer
    },
    mounted() {
    },
    computed: {
        userId() {
            return this.$store.state.user.userId;
        },
        userName() {
            return this.$store.state.user.userName;
        },
        isldsLoading() { return this.$store.state.main.isldsLoading }
    }
}
</script>

<style scoped>
.lds-ripple-main {
    background: #00379A;
    position: fixed;
    display: grid;
    width: 100%;
    height: 100%;
    top: 0px;
    z-index: 9999;
    align-content: center;
    justify-content: center;
}

.lds-loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
}

.lds-loader::after,
.lds-loader::before {
    content: '';
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    animation: rotation 2s ease-in-out infinite;
}

.lds-loader::after {
    border-color: #74aa93;
    animation-delay: 1s;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>