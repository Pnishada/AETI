import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import Gallery from "@/pages/gallery";
import Search from "@/pages/search";
import NotFound from "@/pages/not-found";
import AboutPage from "@/pages/AboutPage";
import CoursesSection from "./components/CoursesSection";
import ProgramDetails from "./pages/programs/[id]";
import NewsPage from "./pages/news";
import DownloadPage from "@/pages/download";
import Staff from "./pages/staff";
import Departments from "./pages/depatment";

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
        <CoursesSection />
      </Route>

      <Route path="/programs/:id">
        <ProgramDetails /> {/* ✅ fixed */}
      </Route>

      <Route path="/news">
        <NewsPage />
      </Route>

      <Route path="/download">
        <DownloadPage />
      </Route>

      <Route path="/pages/staff">
        <Staff />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Router;
