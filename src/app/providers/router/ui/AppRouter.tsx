import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "../config/routeConfig/routeConfig"

export const AppRouter = () => (
  <div className="page-wrapper">
    <Suspense fallback='Загрузка ...'>
      <Routes>
        {
          Object.values(routeConfig).map(({ path, element }) =>
            <Route key={path} path={path} element={element} />
          )
        }
      </Routes>
    </Suspense>
  </div>
)