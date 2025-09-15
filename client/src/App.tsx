import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import Gallery from "@/pages/gallery";
import Search from "@/pages/search";
import NotFound from "@/pages/not-found";
import AboutPage from "@/pages/AboutPage";
import CoursesSection from "@/components/CoursesSection"; // ✅ CoursesSection component
import ProgramDetails from "@/pages/programs/[id]";
import NewsPage from "@/pages/news";
import DownloadPage from "@/pages/download";
import Staff from "@/pages/staff";
import Departments from "@/pages/depatment";
import ContactPage from "@/pages/ContactPage";

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/">
        <Home />
      </Route>

      {/* Departments */}
      <Route path="/departments">
        <Departments />
      </Route>

      {/* Contact */}
      <Route path="/contact">
        <ContactPage />
      </Route>

      {/* About */}
      <Route path="/about">
        <AboutPage />
      </Route>

      {/* Gallery */}
      <Route path="/gallery">
        <Gallery />
      </Route>

      {/* Search */}
      <Route path="/search">
        <Search />
      </Route>

      {/* Courses & Programs */}
      <Route path="/CoursesSection">
        <CoursesSection /> {/* ✅ popup-based courses list */}
      </Route>

      {/* If later need individual program details */}
      <Route path="/CoursesSection/:id">
        <ProgramDetails />
      </Route>

      {/* News */}
      <Route path="/news">
        <NewsPage />
      </Route>

      {/* Downloads */}
      <Route path="/download">
        <DownloadPage />
      </Route>

      {/* Staff */}
      <Route path="/staff">
        <Staff />
      </Route>

      {/* Not Found */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Router;