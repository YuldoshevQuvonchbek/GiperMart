import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./page/home/home";
import { UseSkror } from "./hook/UseSkror";
const Carzinka = lazy(() => import("./page/carzinka/carzinka"));
const Dddres = lazy(() => import("./layout/user/addres"));
const Profile = lazy(() => import("./layout/user/profile"));
const UserLeyaut = lazy(() => import("./layout/userLeyaut"));
const ShopPaje = lazy(() => import("./page/Shop/ShopPaje"));
const Product = lazy(() => import("./page/abaut/PradactInfo"));
const MainLayout = lazy(() => import("./layout/main-layout"));

function App() {
  return (
    <div>
      <UseSkror />
      <Suspense fallback={<h1> loding...</h1>}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <MainLayout />
              </Suspense>
            }
          >
            <Route index element={<Home />} />
            <Route
              path="product/:category"
              element={
                <Suspense>
                  <Product />
                </Suspense>
              }
            />
            <Route
              path="product/:category/:id"
              element={
                <Suspense>
                  <ShopPaje />
                </Suspense>
              }
            />
            <Route
              path="carzinka"
              element={
                <Suspense>
                  <Carzinka />
                </Suspense>
              }
            />
            <Route
              path="user"
              element={
                <Suspense>
                  <UserLeyaut />
                </Suspense>
              }
            >
              <Route
                index
                element={
                  <Suspense>
                    <Profile />
                  </Suspense>
                }
              />
              <Route
                path="addres"
                element={
                  <Suspense>
                    <Dddres />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
