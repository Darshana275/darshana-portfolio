
import { ExternalLink, Github, Brain, Mic,Gamepad, CheckSquare,CloudSun, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Knee Osteoarthritis Classification Using Deep Learning",
      description: "Advanced deep learning system to classify knee osteoarthritis severity using CNN architectures with Grad-CAM visual explanations for enhanced clinical interpretability.",
      technologies: ["Python", "TensorFlow", "ReactJS", "Flask", "Docker"],
      icon: Brain,
      gradient: "from-blue-500 to-purple-600",
      url: "https://github.com/knee-osteoarthritis-detection/koa-detection",
      features: [
        "12 state-of-the-art CNN architectures.",
        "Custom hybrid CNN with SE attention.",
        "Grad-CAM visual explanations.",
        "Docker containerized deployment."
      ]
    },
    {
      title: "Real-Time Big Data Analytics on GitHub repositories issues",
      description: "End-to-end big data pipeline for ingesting, processing, and visualizing GitHub activity using real-time stream processing and cloud-mocked infrastructure.",
      technologies: ["Docker", "Kafka", "Spark", "MySQL", "React", "Flask", "Terraform", "LocalStack"],
      icon: Server, // Lucide icon
      gradient: "from-blue-600 to-teal-400",
      url: "https://github.com/Darshana275/RealTime-GitHub-Data-Pipeline",
      features: [
        "Real-time Kafka ingestion of GitHub data.",
        "Terraform provisioning with LocalStack S3 emulation.",
        "Spark streaming jobs for transformation and filtering.",
        "MySQL data sink and React dashboard visualization."
      ]
    },
    {
      title: "HMMvsCRF - Speech Recognition Model",
      description: "Comparative analysis of Hidden Markov Models and Conditional Random Fields for speech recognition, utilizing advanced feature extraction techniques.",
      technologies: ["Python", "HMM", "CRF", "MFCC"],
      icon: Mic,
      gradient: "from-purple-500 to-pink-500",
      url:"https://github.com/Darshana275/HMMvsCRF",
      features: [
        "Gaussian HMMs implementation.",
        "MFCC feature extraction.",
        "CRF feature refinement.",
        "Logistic regression classification."
      ]
    },
    {
      title: "Student Task Manager",
      description: "Full-stack MERN application. A comprehensive task management system designed for students to organize their academic and personal tasks efficiently.",
      technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      icon: CheckSquare,
      gradient: "from-teal-500 to-cyan-500",
      url:"https://github.com/Darshana275/student-task-manager",
      features: [
        "Real-time task management.",
        "User authentication.",
        "Interactive dashboard.",
        "Productivity analytics."
      ]
    },
    {
      title: "Impact of Train-Test Splits on HMM Speech Recognition",
      description: "Empirical study analyzing the performance of Hidden Markov Models for speech recognition with varying data split ratios (70:30, 80:20, 90:10) using labeled audio datasets of words: bird, bed, and cat.",
      technologies: ["Python", "HMM", "hmmlearn", "NumPy"],
      icon: Mic, // assuming you're using Lucide icons and already imported `Mic`
      gradient: "from-yellow-500 to-orange-600",
      url: "https://github.com/Darshana275/Split-Ratio-Impact-on-HMMs_SpeechRecognitionModel",
      features: [
        "Train-test split experiments (70:30, 80:20, 90:10).",
        "HMM-based classification for speech recognition.",
        "Evaluation with accuracy, precision, recall, F1 score.",
        "Visualizations including ROC AUC curves."
      ]
    },
    {
      title: "Weather Forecast App",
      description: "Responsive weather application built using JavaScript and Axios. It fetches real-time weather data and 5-day forecasts based on city input or user location, with timezone-adjusted local time and weather conditions.",
      technologies: ["HTML", "CSS", "JavaScript", "Axios","API Integration"],
      icon: CloudSun, // You can use an appropriate icon from your icon set
      gradient: "from-indigo-500 to-blue-500",
      url: "https://github.com/Darshana275/Weather-application",
      features: [
        "Live weather updates.",
        "5-day forecast with icons.",
        "Local time and date display.",
        "Geolocation-based default weather."
      ]
    },
    {
      title: "Breakout Game",
      description: "A classic brick-breaking arcade game built using Java. Players control a paddle to bounce a ball and break bricks arranged in a grid. The game features collision detection, score tracking, and game-over logic.",
      technologies: ["Java", "AWT", "Swing"],
      icon: Gamepad, // use an appropriate icon like 'Gamepad' or replace with your own
      gradient: "from-red-500 to-pink-500",
      url: "https://github.com/Darshana275/Breakout-Game",
      features: [
        "Java-based brick-breaking arcade game.",
        "Real-time paddle control using arrow keys.",
        "Ball-paddle and ball-brick collision handling.",
        "Game-over condition and score management."
      ]
    }

    
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-relaxed py-2">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 dark:border-gray-700 overflow-hidden animate-scale-in flex flex-col"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-6 flex gap-2">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-relaxed break-words">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm lg:text-base flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-3 text-sm lg:text-base">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs lg:text-sm text-gray-600 dark:text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
