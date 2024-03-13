import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./page/home/home";
import { Product } from "./page/abaut/PradactInfo";
import { ShopPaje } from "./page/Shop/ShopPaje";
import { UserLeyaut } from "./layout/userLeyaut";
import { Profile } from "./layout/user/profile";
import { Dddres } from "./layout/user/addres";
import { UseSkror } from "./hook/UseSkror";
import { Carzinka } from "./page/carzinka/carzinka";

function App() {
  return (
    <div>
      <UseSkror />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:category" element={<Product />} />
          <Route path="product/:category/:id" element={<ShopPaje />} />
          <Route path="carzinka" element={<Carzinka />} />
          <Route path="user" element={<UserLeyaut />}>
            <Route index element={<Profile />} />
            <Route path="addres" element={<Dddres />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
