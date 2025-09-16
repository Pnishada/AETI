import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import CourseCard from "@/components/CourseCard";
import EnrollFormDialog from "@/components/EnrollFormDialog";
import CourseDetailsDialog from "@/components/CoursesDetailsDialog";
import { Course, courses } from "@/data/Courses";

export default function CoursesPage() {
  const [location] = useLocation();
  const coursesRef = useRef<HTMLDivElement>(null);

  // Read query param for tab selection
  const queryParams = new URLSearchParams(location.split("?")[1]);
  const initialType = queryParams.get("type") as "Full-Time" | "Part-Time" | null;

  const [activeTab, setActiveTab] = useState<"All" | "Full-Time" | "Part-Time">(
    initialType || "All"
  );
  const [search, setSearch] = useState("");
  const [durationFilter, setDurationFilter] = useState("All");

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollCourse, setEnrollCourse] = useState<Course | null>(null);

  // Auto-select tab from query param and scroll to grid
  useEffect(() => {
    if (initialType) {
      setActiveTab(initialType);
      setTimeout(() => {
        coursesRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialType]);

  // Filtered courses based on tab, search, duration
  const displayedCourses = useMemo(() => {
    let filtered =
      activeTab === "All"
        ? courses
        : courses.filter((c) => c.type === activeTab);

    if (search.trim()) {
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (durationFilter !== "All") {
      filtered = filtered.filter((c) => c.duration === durationFilter);
    }

    return filtered;
  }, [activeTab, search, durationFilter]);

  // Dynamically compute available durations for filter
  const availableDurations = useMemo(() => {
    const filteredCourses =
      activeTab === "All"
        ? courses
        : courses.filter((c) => c.type === activeTab);
    const durations = Array.from(new Set(filteredCourses.map((c) => c.duration)));
    return ["All", ...durations];
  }, [activeTab]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-red-900 text-center mb-8">
        {activeTab === "All" ? "All Courses" : `${activeTab} Courses`}
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {["All", "Full-Time", "Part-Time"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab as "All" | "Full-Time" | "Part-Time");
              setDurationFilter("All"); // Reset duration when tab changes
            }}
            className={`px-6 py-2 font-semibold rounded-lg transition mx-2 ${
              activeTab === tab
                ? "bg-red-700 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search + Duration Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
          aria-label="Search courses"
        />

        {/* Duration Filter */}
        <div className="flex flex-col w-full sm:w-auto">
          <label htmlFor="durationFilter" className="sr-only">
            Filter courses by duration
          </label>
          <select
            id="durationFilter"
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none w-full sm:w-auto"
          >
            {availableDurations.map((d) => (
              <option key={d} value={d}>
                {d === "All" ? "All Durations" : d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div ref={coursesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onViewDetails={setSelectedCourse}
          />
        ))}
      </div>

      {/* Dialogs */}
      <CourseDetailsDialog
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(c) => {
          setSelectedCourse(null);
          setEnrollCourse(c);
        }}
      />
      {enrollCourse && (
        <EnrollFormDialog
          courseTitle={enrollCourse.title}
          open={!!enrollCourse}
          onClose={() => setEnrollCourse(null)}
        />
      )}
    </section>
  );
}
