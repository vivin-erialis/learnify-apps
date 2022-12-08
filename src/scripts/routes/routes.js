import Dashboard from "../views/pages/dashboard";
import Bisnis from "../views/pages/bisnis";
import Ilkom from "../views/pages/ilkom";
import Investasi from "../views/pages/investasi";
import Kerajinan from "../views/pages/kerajinan";
import Kesehatan from "../views/pages/kesehatan";
import Memasak from "../views/pages/memasak";
import Olahraga from "../views/pages/olahraga";
import Pertanian from "../views/pages/pertanian"; 
import DetailBisnis from "../views/pages/detailBisnis";
import DetailIlkom from "../views/pages/detailIlkom";
import DetailInvestasi from "../views/pages/detailInvestasi";
import DetailKerajinan from "../views/pages/detailKerajinan";
import DetailKesehatan from "../views/pages/detailKesehatan";
import DetailMemasak from "../views/pages/detailMemasak";
import DetailOlahraga from "../views/pages/detailOlahraga";
import DetailPertanian from "../views/pages/detailPertanian";


const routes = {
  "/": Dashboard,
  "/dashboard": Dashboard,
  "/bisnis": Bisnis,
  "/ilkom": Ilkom,
  "/investasi": Investasi,
  "/kerajinan": Kerajinan,
  "/kesehatan": Kesehatan,
  "/memasak": Memasak,
  "/olahraga": Olahraga,
  "/pertanian": Pertanian,
  "/detail/:id" : DetailBisnis,
  "/detailkom/:id" : DetailIlkom,
  "/detailinv/:id" : DetailInvestasi,
  "/detailkerajinan/:id" : DetailKerajinan,
  "/detailkesehatan/:id" : DetailKesehatan,
  "/detailmemasak/:id" : DetailMemasak,
  "/detailolahraga/:id" : DetailOlahraga,
  "/detailpertanian/:id" : DetailPertanian,
  "/detailBisnis/:id": DetailBisnis,
};

export default routes;
