import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import WatchList from "./pages/WatchList";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layoat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="movie/:id" element={<MovieDetails />}></Route>
          <Route path="watchlist" element={<WatchList />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
