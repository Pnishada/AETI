import { programsData } from "@/data/ProgramsData";
import { Link, useParams } from "wouter";

export default function ProgramDetails(){
    const { id } = useParams();
    const program = programsData.find(p=> p.id === id);

    if(!program) return <p className="text-center mt-20">Program not found.</p>;

    const IconComponent = program.icon;

    return(
         <div className="max-w-5xl mx-auto px-4 py-16">
      <Link href="/" className="text-primary font-medium mb-6 inline-block">
        ← Back to Programs
      </Link>

      <div className="bg-white p-10 rounded-3xl shadow-lg">
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-20 h-20 bg-primary/10 flex items-center justify-center rounded-xl">
            <IconComponent className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">{program.title}</h1>
        </div>

        <p className="text-slate-700 mb-6">{program.description}</p>

        <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          {program.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="mt-8">
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
    );
}