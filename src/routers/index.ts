import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/main/dashboard/index.vue";
import Customer from "@/pages/main/customer/index.vue";
import Order from "@/pages/main/order/index.vue";
import SaleReports from "@/pages/main/sale-reports/index.vue";
import ManageStock from "@/pages/main/manage-stock/index.vue";
import Setting from "@/pages/main/setting/index.vue";
import Logout from "@/pages/main/logout/index.vue";
import Profile from "@/pages/sub/profile/index.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
    },
    {
        path: '/salereports',
        name: 'Sale Reports',
        component: SaleReports,
    },
    {
        path: '/managestock',
        name: 'Manage Stock',
        component: ManageStock,
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer,
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;