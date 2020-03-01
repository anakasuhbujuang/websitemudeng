
import Masuk from './views/Masuk.vue'
import Daftar from './views/Daftar.vue'
import PilihPet from './views/PilihPet.vue'
import coba from './views/coba.vue'
import coba2 from './views/coba2.vue'
import coba3 from './views/coba3.vue'
import PraTestMAI from './views/PraTestMAI.vue'
import TestMAI from './views/TestMAI/TestMAI.vue'
import CobaTestMAI from './views/CobaTestMAI.vue'
import HasilTestMAI from './views/HasilTestMAI.vue'
import Dashboard from './views/Dashboard.vue'
import ProsesBelajar from './views/ProsesBelajar.vue'
import Informasi from './views/Informasi.vue'
import Pengaturan from './views/Pengaturan.vue'
import PaginationReal from './views/pagination/PaginationReal.vue'
import PageReviewEval from './views/ReviewEval/PageReviewEval.vue'
// import drawing from './views/drawing/drawing.vue'

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
                path: '/coba',
                name: 'coba',
                component: coba
        
            },
            {
                path: '/coba2',
                name: 'coba2',
                component: coba2

            },
            {
                path: '/coba3',
                name: 'coba3',
                component: coba3

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
                path: '/CobaTestMAI',
                name: 'CobaTestMAI',
                component: CobaTestMAI
        
            },
            {
                path: '/HasilTestMAI',
                name: 'HasilTestMAI',
                component: HasilTestMAI
        
            },
            {
                path: '/Dashboard',
                name: 'Dashboard',
                component: Dashboard
        
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
           
            {
                path: '/PaginationReal',
                name: 'PaginationReal',
                component: PaginationReal
        
            },
            {
                path: '/ReviewEvaluasiBelajar',
                name: 'PageReviewEval',
                component: PageReviewEval
        
            },
            // {
            //     path: '/drawing',
            //     name: 'drawing',
            //     component: drawing
        
            // },
            
]

//Vue.use(Router)

// export default new Router({
//     node: 'history',
//     base: process.env.BASE_URL,
//     router: [
//        { 
//         path: '/',
//         name: 'masuk',
//         component: Masuk
//     },
//     {
//         path: '/daftar',
//         name: 'daftar',
//         component: Daftar

//     }
//     ]

// export default ({
//     node: 'history',
//     base: process.env.BASE_URL,
//     router: [
//        { 
//         path: '/',
//         name: "Masuk",
//         component: Masuk
//     },
//     {
//         path: '/daftar',
//         name: "Daftar",
//         component: Daftar

//     }
//     ]

//  })