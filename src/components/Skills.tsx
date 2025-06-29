import { Code, Database, Cloud, Wrench, Activity, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-blue-500 to-indigo-600",
      skills: ["Core Java", "Python", "Javascript fundamentals"],
      description: "Strong foundation in object-oriented programming and data structures."
    },
    {
      title: "Web Technologies",
      icon: Wrench,
      gradient: "from-purple-500 to-pink-600",
      skills: ["HTML", "CSS", "Flask", "MERN Stack"],
      description: "Full-stack development with modern frameworks and tools."
    },
    {
      title: "Deep Learning",
      icon: Brain,
      gradient: "from-green-500 to-lime-600",
      skills: ["TensorFlow", "CNNs", "Transfer Learning", "Grad-CAM"],
      description: "Hands-on experience building custom CNNs and explainable AI systems for image classification."
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-teal-500 to-cyan-600",
      skills: ["MySQL", "MongoDB"],
      description: "Experience with both relational and NoSQL database systems."
    },
    {
      title: "Big Data Tools",
      icon: Activity,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Kafka", "Spark", "Terraform", "LocalStack"],
      description: "Designed and deployed real-time data pipelines with stream processing, infrastructure-as-code, and containerization."
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      gradient: "from-orange-500 to-red-600",
      skills: ["Docker", "Git", "GitHub", "VS Code", "Jupyter Notebook"],
      description: "Modern development and deployment tools for efficient workflows."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">{category.description}</p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {/* AWS Machine Learning Badge */}
            <a
              href="https://www.credly.com/badges/c2c84592-8f33-42bb-9fbb-8ab5c480511e/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://images.credly.com/size/680x680/images/254b883a-44a3-4cec-b6f2-946a80522b39/image.png"
                alt="AWS Machine Learning"
                className="w-44 h-44"
              />
            </a>

            {/* AWS Cloud Foundations Badge */}
            <a
              href="https://www.credly.com/badges/5b446f19-2254-44f8-b97f-c1cd35140211/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png"
                alt="AWS Cloud Foundations"
                className="w-44 h-44"
              />
            </a>

            {/* AWS Data Analytics Badge */}
            <a
              href="https://www.credly.com/badges/39d5355a-45db-4e5f-9bea-492886415a93/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://images.credly.com/size/680x680/images/4a489a8c-0b2d-40ee-a839-afa55b44208d/image.png"
                alt="AWS Data Analytics"
                className="w-44 h-44"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
