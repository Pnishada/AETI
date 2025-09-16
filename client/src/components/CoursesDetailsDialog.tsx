import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Course } from "@/data/Courses";

interface Props {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export default function CourseDetailsDialog({ course, onClose, onEnroll }: Props) {
  if (!course) return null;

  const Icon = course.icon;

  return (
    <Dialog open={!!course} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden rounded-3xl shadow-xl">
        <div className="relative h-64 sm:h-80 w-full">
          <img
            src={course.image}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-t-3xl" />
          <div className="absolute bottom-6 left-6 flex flex-col gap-2 text-white">
            <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">{course.title}</h2>
            <p className="text-sm sm:text-base text-gray-200 max-w-xs">
              {course.description}
            </p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b">
                <th className="py-2 px-4 font-medium">Fee (Rs.)</th>
                <td className="py-2 px-4">{course.fee}</td>
              </tr>
              <tr className="border-b">
                <th className="py-2 px-4 font-medium">Duration</th>
                <td className="py-2 px-4">{course.duration}</td>
              </tr>
              <tr className="border-b">
                <th className="py-2 px-4 font-medium">Training Method</th>
                <td className="py-2 px-4">{course.method}</td>
              </tr>
            </tbody>
          </table>

          <DialogFooter className="pt-4">
            <Button
              onClick={() => onEnroll(course)}
              className="bg-red-700 hover:bg-red-800 text-white rounded-lg px-6 py-2 shadow-md hover:shadow-lg transition"
            >
              Enroll Now
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
