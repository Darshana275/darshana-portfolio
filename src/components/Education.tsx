
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: "btech",
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
      location: "Bachupally, Hyderabad",
      degree: "B.Tech in Computer Science (AI & ML)",
      grade: "CGPA: 9.41/10",
      period: "2022 – 2026",
      color: "from-blue-500 to-purple-500",
      shortName: "B.Tech"
    },
    {
      id: "intermediate",
      institution: "Sri Chaitanya Junior Kalashala",
      location: "Madinaguda, Hyderabad",
      degree: "Intermediate (MPC)",
      grade: "98%",
      period: "2020 – 2022",
      color: "from-purple-500 to-pink-500",
      shortName: "Intermediate"
    },
    {
      id: "ssc",
      institution: "Gowtham Model School",
      location: "Chandanagar, Hyderabad",
      degree: "SSC",
      grade: "CGPA: 10.0",
      period: "2020",
      color: "from-teal-500 to-cyan-500",
      shortName: "SSC"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {educationData.map((edu, index) => (
              <div 
                key={edu.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-lg`}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">{edu.institution}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.location}</p>
                  <p className="text-base font-semibold text-gray-700 dark:text-gray-300">{edu.degree}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
