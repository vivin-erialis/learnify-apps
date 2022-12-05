import Dashboard from "../views/pages/dashboard";
import Bisnis from "../views/pages/bisnis";
import Ilkom from "../views/pages/ilkom";
import Investasi from "../views/pages/investasi";
import Kerajinan from "../views/pages/kerajinan";
import Kesehatan from "../views/pages/kesehatan";
import Memasak from "../views/pages/memasak";
import Olahraga from "../views/pages/olahraga";
import Pertanian from "../views/pages/pertanian";
// import '../component/bisnis';
// import Detail from "../views/pages/detail";
// import Favorite from "../views/pages/favorite";

const routes = {
 '/': Dashboard,
  '/dashboard': Dashboard,
  '/bisnis': Bisnis,
  '/ilkom': Ilkom,
  '/investasi': Investasi,
  '/kerajinan': Kerajinan,
  '/kesehatan': Kesehatan,
  '/memasak': Memasak,
  '/olahraga': Olahraga,
  '/pertanian': Pertanian,
//   '/favorite': Favorite,
};

export default routes;
