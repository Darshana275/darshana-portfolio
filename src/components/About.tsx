
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-100 dark:border-gray-700 animate-scale-in">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                Motivated Computer Science student adept in <span className="font-semibold text-blue-600 dark:text-blue-400">Java</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">Data Structures</span>, 
                enthusiastic about <span className="font-semibold text-indigo-600 dark:text-indigo-400">Machine Learning</span> and <span className="font-semibold text-teal-600 dark:text-teal-400">Full Stack Web Development</span>.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Eager to apply technical skills and collaborate on innovative projects, contributing to impactful solutions 
                in the ever-evolving field of technology. Currently pursuing B.Tech in Computer Science with specialization 
                in AI & ML, maintaining a CGPA of <span className="font-bold text-green-600 dark:text-green-400">9.41/10</span>.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">ML</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Deep Learning, Computer Vision, Predictive Analytics</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">FS</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Full Stack Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">MERN Stack, Flask, Docker, Cloud Deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
