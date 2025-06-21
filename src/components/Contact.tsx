
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's collaborate on innovative projects and create impactful solutions together
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Phone</p>
                    <a href="tel:+919063792858" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +91 9063792858
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Email</p>
                    <a href="mailto:spunna2705@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      spunna2705@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <p className="font-medium text-gray-800 dark:text-white mb-4 text-center">Connect with me</p>
                <div className="flex justify-center gap-4">
                  <a href="https://www.linkedin.com/in/darshanapunna/" className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://github.com/Darshana275" className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>


            </div>
          </div>
                        {/* Footer */}
<div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
  © {new Date().getFullYear()} Darshana Punna. All rights reserved.
</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
