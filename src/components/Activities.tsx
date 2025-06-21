
import { Users, Trophy, Award, Calendar } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: "Event Management Lead",
      organization: "X-Kernel Club - GRIET",
      description: "Leading event management initiatives and coordinating technical workshops and seminars for the computer science community.",
      icon: Users,
      gradient: "from-blue-500 to-purple-600",
      type: "Leadership Role"
    },
    {
      title: "Epitome'24 Hackathon",
      organization: "Participant",
      description: "Participated in the prestigious Epitome'24 Hackathon, collaborating with teams to develop innovative solutions under time constraints.",
      icon: Trophy,
      gradient: "from-purple-500 to-pink-600",
      type: "Competition"
    },
    {
      title: "She Codes Foundation",
      organization: "6-Month Training Program",
      description: "Comprehensive coding training program specializing in web development, gaining proficiency in modern development tools and frameworks.",
      icon: Award,
      gradient: "from-teal-500 to-cyan-600",
      type: "Training Program",
      duration: "March 2024 - September 2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Activities & Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] border border-gray-100 dark:border-gray-700 animate-fade-in-left overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className={`p-4 bg-gradient-to-r ${activity.gradient} rounded-2xl flex-shrink-0`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-2 break-words">
                        {activity.title}
                      </h3>
                      <p className="text-base lg:text-lg font-semibold text-gray-600 dark:text-gray-300 break-words">
                        {activity.organization}
                      </p>
                    </div>
                    <div className="flex flex-col lg:text-right flex-shrink-0">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${activity.gradient} text-white w-fit lg:ml-auto`}>
                        {activity.type}
                      </span>
                      {activity.duration && (
                        <div className="flex items-center gap-1 mt-2 text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm whitespace-nowrap">{activity.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
