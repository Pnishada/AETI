"use client";

import { useState } from "react";
import { useLocation } from "wouter";
import { Course, courses } from "@/data/Courses";
import EnrollFormDialog from "@/components/EnrollFormDialog";
import CourseDetailsDialog from "@/components/CoursesDetailsDialog";

export default function CoursesPreview() {
  const [, setLocation] = useLocation();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollCourse, setEnrollCourse] = useState<Course | null>(null);

  // Preview courses (first 2 of each type)
  const fullTime = courses.filter((c) => c.type === "Full-Time").slice(0, 2);
  const partTime = courses.filter((c) => c.type === "Part-Time").slice(0, 2);

  const goToCourses = (type: "Full-Time" | "Part-Time") => {
    setLocation(`/courses?type=${type}`);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-red-900 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed{" "}
            <strong>Full-Time</strong> and <strong>Part-Time</strong> programs. 
            Learn practical skills guided by industry experts.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/** Full-Time Card **/}
          <div
            className="relative bg-white rounded-3xl shadow-lg border border-gray-200 p-8 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => goToCourses("Full-Time")}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-red-50 via-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none rounded-3xl"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Full-Time Courses
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore our professional full-time courses with hands-on training and industry exposure.
                </p>
                <div className="flex gap-4">
                  {fullTime.map((course) => (
                    <div
                      key={course.id}
                      className="relative w-24 h-24 rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 group-hover:scale-110"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-sm">
                        {course.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 text-red-700 font-semibold hover:underline">
                See All Full-Time Courses →
              </div>
            </div>
          </div>

          {/** Part-Time Card **/}
          <div
            className="relative bg-white rounded-3xl shadow-lg border border-gray-200 p-8 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => goToCourses("Part-Time")}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-red-50 via-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none rounded-3xl"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Part-Time Courses
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore our part-time programs designed for working professionals and evening/weekend learners.
                </p>
                <div className="flex gap-4">
                  {partTime.map((course) => (
                    <div
                      key={course.id}
                      className="relative w-24 h-24 rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 group-hover:scale-110"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-sm">
                        {course.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 text-red-700 font-semibold hover:underline">
                See All Part-Time Courses →
              </div>
            </div>
          </div>
        </div>
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
