// src/data/staffData.ts
export interface Staff {
  name: string;
  role: string;
  department: string;
  image: string;
}

export const staffMembers: Staff[] = [
  {
    name: "Eng. Sunil Perera",
    role: "Director",
    department: "Administration",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mrs. Kamala Silva",
    role: "Deputy Director",
    department: "Management",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. Ruwan Fernando",
    role: "Senior Lecturer",
    department: "Automobile Engineering",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Ms. Nadeesha Karunaratne",
    role: "Instructor",
    department: "Auto Electronics",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mr. Sameera Wijesinghe",
    role: "Lecturer",
    department: "Mechanical Engineering",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Ms. Dilani Wickramasinghe",
    role: "Coordinator",
    department: "Student Affairs",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Mr. Kasun Jayawardena",
    role: "Instructor",
    department: "Workshop Technology",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Ms. Sanduni Perera",
    role: "Lecturer",
    department: "Automobile Design",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];