import { createRouter, createWebHistory } from 'vue-router'
import AppLoyout from './../components/layout/AppLoyout.vue'

import PackagePage from './../pages/home/package.vue'

const routesMain = [
    {
        path: '/', name: 'AppLoyout', component: AppLoyout,
        children: [
            {
                path: '',
                name: 'Main',
                component: PackagePage
            },
			// {
            //     path: 'package',
            //     name: 'PackagePage',
            //     component: PackagePage
			// },
        ]
    },
    // {
    //     path: '/login', name: 'LoginPage', component: LoginPage
    // },
]
const routes = [...routesMain];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "side-menu--active",
})


// if (parseInt(process.env.VUE_APP_PROD_MODE)) {
//     router.beforeEach((to, from, next) => {
//         checkAuthPage();
//         async function checkAuthPage() {
//             const publicPages = ['/login'];
//             const authRequired = !publicPages.includes(to.path);
//             const storageUser = localStorage.getItem('user');
//             if (authRequired && !storageUser) {
//                 next('/login');
//             }
//             else if (storageUser) {
//                 // axios.defaults.headers.common['Authorization'] = globalConst.authHeader();
//                 AuthService.validateAdminToken().then(result => {
//                     if (result.status) {//ถ้า token มี guid
//                         authRequired ? next() : next('');//ถ้าเข้าหน้าที่ไม่ใช่หน้า login ให้ไปหน้านั้นได้เลย, ถ้าเป็นหน้า login ให้ไปหน้าหลัก
//                     }
//                     else {
//                         store.dispatch("auth/logout");
//                         next('/login');
//                     }
//                 },
//                     error => {
//                         console.log(error);
//                     }
//                 );
//             }
//             else {
//                 next();
//             }
//         }
//     });
// }

export default router