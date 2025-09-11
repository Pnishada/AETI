import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import Departments from "./pages/depatment";
import Gallery from "@/pages/gallery";
import Search from "@/pages/search";
import NotFound from "@/pages/not-found";
import AboutPage from "@/pages/AboutPage";
import ProgramsSection from "./components/ProgramsSection";
import ProgramDetails from "./pages/programs/[id]";
import NewsPage from "./pages/news";
import NewsDetails from "./pages/news/[id]";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>

      <Route path="/departments">
        <Departments />
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>

      <Route path="/gallery">
        <Gallery />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/programs">
        <ProgramsSection />
      </Route>

      <Route path="/programs/:id">
        <ProgramDetails />
      </Route>

      <Route path="/news">
        <NewsPage />
      </Route>

      <Route path="/news/:id">
        <NewsDetails />
      </Route>

      {/* Catch-all 404 route */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Router;
