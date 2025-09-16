import { Button } from "@/components/ui/button";
import { Course } from "@/data/Courses";

interface Props {
  course: Course;
  onViewDetails?: (course: Course) => void;
}

export default function CourseCard({ course, onViewDetails }: Props) {
  const Icon = course.icon;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition transform hover:-translate-y-2">
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <div className="w-14 h-14 mx-auto bg-red-100 rounded-xl flex items-center justify-center mb-4">
          <Icon className="text-red-700 w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{course.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{course.description}</p>
        <Button
          className="w-full bg-red-700 hover:bg-red-800 text-white rounded-xl"
          onClick={() => onViewDetails?.(course)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
