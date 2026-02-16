import VolunteerCard from '@/components/VolunteerCard';

export default function Volunteers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Volunteers</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Dedicated devotees serving the temple and community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Section */}
          <div className="bg-orange-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Volunteers
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The volunteers at Vidyaranyapura Sri Raghavendra Swamy Mutt are the backbone of our temple's 
                daily operations and community services. These dedicated devotees contribute their time, skills, 
                and energy to ensure that the temple functions smoothly and serves the community effectively. 
                From maintaining the temple premises to organizing events and helping with various activities, 
                our volunteers play a crucial role in preserving our spiritual heritage and traditions.
              </p>

              <p>
                Our volunteers come from diverse backgrounds and professions, united by their devotion to 
                Sri Raghavendra Swami and their commitment to serving the community. Their selfless service 
                reflects the true spirit of Karma Yoga and devotion, inspiring others to follow the path 
                of righteousness and service.
              </p>

              <p>
                We are always grateful for the time and effort our volunteers put into making our temple 
                a vibrant center of spiritual and cultural activities. Their dedication ensures that the 
                teachings and traditions of our Gurus are preserved and passed on to future generations.
              </p>
            </div>
          </div>

          {/* Volunteer Roles Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Volunteer Roles and Responsibilities
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Temple Maintenance</h4>
                    <p className="text-gray-600 text-sm">Daily cleaning, decoration, and upkeep of temple premises</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pooja Assistance</h4>
                    <p className="text-gray-600 text-sm">Helping priests during daily and special poojas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Event Management</h4>
                    <p className="text-gray-600 text-sm">Organizing festivals, celebrations, and special events</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Kitchen Service</h4>
                    <p className="text-gray-600 text-sm">Preparing and distributing prasadam during events</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Security & Crowd Management</h4>
                    <p className="text-gray-600 text-sm">Ensuring safety and order during peak hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Administrative Support</h4>
                    <p className="text-gray-600 text-sm">Helping with office work, record keeping, and communication</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Educational Activities</h4>
                    <p className="text-gray-600 text-sm">Supporting classes, workshops, and spiritual discourses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Outreach</h4>
                    <p className="text-gray-600 text-sm">Reaching out to devotees and local community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Benefits of Volunteering
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Spiritual Growth</h4>
                <p className="text-gray-600 text-sm">
                  Opportunity to serve and grow spiritually through selfless service
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Community Building</h4>
                <p className="text-gray-600 text-sm">
                  Connect with like-minded devotees and build lasting relationships
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Skill Development</h4>
                <p className="text-gray-600 text-sm">
                  Learn new skills and gain valuable experience in various areas
                </p>
              </div>
            </div>
          </div>

          {/* Volunteer Cards Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Meet Our Volunteers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Volunteer Card 1 */}
              <VolunteerCard
                name="Gururaj Patil"
                role="Temple Coordinator"
                description="Managing daily operations and coordinating volunteer activities"
                imageSrc="/images/2.jpg"
                alt="Gururaj Patil"
              />

              {/* Volunteer Card 2 */}
              <VolunteerCard
                name="Vivek"
                role="Event Coordinator"
                description="Organizing festivals and special events at the temple"
                imageSrc="/images/4.JPEG"
                alt="Vivek"
              />

              {/* Volunteer Card 3 */}
              <VolunteerCard
                name="Harsha Patil"
                role="Pooja Assistant"
                description="Assisting priests during daily and special poojas"
                imageSrc="/images/1..jpg"
                alt="Harsha Patil"
              />

              {/* Volunteer Card 4 */}
              <VolunteerCard
                name="Sunita Reddy"
                role="Kitchen Coordinator"
                description="Managing prasadam preparation and distribution"
                imageSrc="/images/1..jpg"
                alt="Sunita Reddy"
              />

              {/* Volunteer Card 5 */}
              <VolunteerCard
                name="Karthik Nair"
                role="Security Coordinator"
                description="Ensuring safety and managing crowds during events"
                imageSrc="/images/karthik-nair.jpg"
                alt="Karthik Nair"
              />

              {/* Volunteer Card 6 */}
              <VolunteerCard
                name="Deepa Joshi"
                role="Administrative Assistant"
                description="Managing office work and communication"
                imageSrc="/images/deepa-joshi.jpg"
                alt="Deepa Joshi"
              />
            </div>
          </div>

          {/* Join Us Section */}
          <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Volunteer Team</h3>
            <p className="mb-6">
              If you are inspired to contribute your time and skills to serve the temple and community, 
              we welcome you to join our team of dedicated volunteers. Your service will be a valuable 
              contribution to preserving our spiritual heritage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
