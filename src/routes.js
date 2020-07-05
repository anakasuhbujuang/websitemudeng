
import Masuk from './views/Masuk.vue'
import Daftar from './views/Daftar.vue'
import PilihPet from './views/PilihPet.vue'
import PraTestMAI from './views/PraTestMAI.vue'
import TestMAI from './views/TestMAI/TestMAI.vue'
import Dashboard from './views/Dashboard.vue'
import ProsesBelajar from './views/ProsesBelajar.vue'
import Informasi from './views/Informasi.vue'
import Pengaturan from './views/Pengaturan.vue'


export default [
            { 
                path: '/',
                name: 'Masuk',
                component: Masuk
            },
            {
                path: '/Daftar',
                name: 'Daftar',
                component: Daftar 
        
            },
            {
                path: '/PilihPet',
                name: 'PilihPet',
                component: PilihPet
        
            },
            {
                path: '/PraTestMAI',
                name: 'PraTestMAI',
                component: PraTestMAI
        
            },
            {
                path: '/TestMAI',
                name: 'TestMAI',
                component: TestMAI
            },
            {
                path: '/Dashboard',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: '/ProsesBelajar',
                name: 'ProsesBelajar',
                component: ProsesBelajar
            },
            {
                path: '/Informasi',
                name: 'Informasi',
                component: Informasi
        
            },
            {
                path: '/Pengaturan',
                name: 'Pengaturan',
                component: Pengaturan
            },
            
]


