// example routing
// const LazyComponent = Loadable(lazy(() => import('../views/example')))

// ==============================|| MAIN ROUTING ||============================== //

import MinimalLayout from "layout/MinimalLayout"
import { lazy } from "react"
import Loadable from "ui-components/common/Loadable"

const LazyComponent = Loadable(lazy(() => import('../views/licensePlateReader')))
const LazyComponentLangSel = Loadable(lazy(() => import('../views/langSelection')));
const LazyComponentScanSucc = Loadable(lazy(() => import('../views/scanSucc')));
const LazyComponentAccessDenied = Loadable(lazy(() => import('../views/accessDenied')));
const LazyComponentScanError = Loadable(lazy(() => import('../views/scanError')));
const LazyComponentQueries = Loadable(lazy(() => import('../views/queries')));
const LazyComponentEndProcedure = Loadable(lazy(() => import('../views/endProcedure')));

const MainRoutes = {
    path: '/',
    element: (
        <MinimalLayout />
    ),
    children: [
        {
            path: '/scan-license',
            element: <LazyComponent/>
        },
        {
            path: '/lang-selection', // il percorso per accedere alla pagina
            element: <LazyComponentLangSel/>
        },
        {
            path: '/scan-success',
            element: <LazyComponentScanSucc/>
        },
        {
            path: '/access-denied',
            element: <LazyComponentAccessDenied/>
        },
        {
            path: '/scan-error',
            element: <LazyComponentScanError/>
        },
        {
            path: '/queries',
            element: <LazyComponentQueries/>
        },
        {
            path: '/end-procedure',
            element: <LazyComponentEndProcedure/>
        }
    ]
}

export default MainRoutes

