'use client';

import { useState } from 'react';

interface Seva {
  id: number;
  name: string;
  description: string;
  time: string;
  cost: string;
  duration: string;
  category: string;
}

export default function SevaList() {
  const [selectedSeva, setSelectedSeva] = useState<Seva | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const sevas: Seva[] = [
    {
      id: 1,
      name: "Panchamrutha Abhisheka",
      description: "Sacred bathing ceremony with panchamrutha (five sacred items)",
      time: "Morning (6:00 AM - 8:00 AM)",
      cost: "₹100",
      duration: "2 hours",
      category: "Daily Sevas"
    },
    {
      id: 2,
      name: "Saamoohika Satyanarayana Pooje Sankalpa",
      description: "Weekly Satyanarayana worship with community participation",
      time: "Evening (5:00 PM - 7:00 PM)",
      cost: "₹100",
      duration: "2 hours",
      category: "Weekly Sevas"
    },
    {
      id: 3,
      name: "Tirtha Prasada (Dwadashi Parane)",
      description: "Distribution of sacred tirtha water and prasad on dwadashi day",
      time: "Afternoon (12:00 PM - 2:00 PM)",
      cost: "₹100",
      duration: "2 hours",
      category: "Special Sevas"
    },
    {
      id: 4,
      name: "Panchamrutha Abhisheka (Thursday)",
      description: "Special abhisheka ceremony performed every Thursday",
      time: "Morning (7:00 AM - 9:00 AM)",
      cost: "₹150",
      duration: "2 hours",
      category: "Weekly Sevas"
    },
    {
      id: 5,
      name: "Tirtha Prasada (One Person)",
      description: "Sacred prasad distribution for individual devotees",
      time: "Afternoon (1:00 PM - 2:00 PM)",
      cost: "₹250",
      duration: "1 hour",
      category: "Personal Sevas"
    },
    {
      id: 6,
      name: "Vehicle Pooja 2 Wheeler",
      description: "Special pooja for two-wheeler vehicles for safety",
      time: "Morning (9:00 AM - 10:00 AM)",
      cost: "₹300",
      duration: "1 hour",
      category: "Personal Sevas"
    },
    {
      id: 7,
      name: "Gow Graasa 1 Day",
      description: "One day cow feeding and service at temple goshala",
      time: "Morning (6:00 AM - 6:00 PM)",
      cost: "₹300",
      duration: "12 hours",
      category: "Charitable Sevas"
    },
    {
      id: 8,
      name: "Dhanvantari Homa Sankalpa",
      description: "Fire ritual to Lord Dhanvantari for health and healing",
      time: "Morning (8:00 AM - 10:00 AM)",
      cost: "₹300",
      duration: "2 hours",
      category: "Special Sevas"
    },
    {
      id: 9,
      name: "Durga Deepa Namaskaara - Sankalpa",
      description: "Special worship to Goddess Durga with lamp offerings",
      time: "Evening (6:00 PM - 8:00 PM)",
      cost: "₹301",
      duration: "2 hours",
      category: "Special Sevas"
    },
    {
      id: 10,
      name: "Gow Puje",
      description: "Traditional cow worship with offerings and prayers",
      time: "Morning (7:00 AM - 8:00 AM)",
      cost: "₹500",
      duration: "1 hour",
      category: "Daily Sevas"
    },
    {
      id: 11,
      name: "Rajatha Kavacha",
      description: "Protective armor ritual for divine protection",
      time: "Morning (10:00 AM - 11:00 AM)",
      cost: "₹500",
      duration: "1 hour",
      category: "Special Sevas"
    },
    {
      id: 12,
      name: "Vehicle Pooja -4 Wheeler",
      description: "Special pooja for four-wheeler vehicles for safety",
      time: "Morning (11:00 AM - 12:00 PM)",
      cost: "₹500",
      duration: "1 hour",
      category: "Personal Sevas"
    },
    {
      id: 13,
      name: "Pallakki or Ratha Utsava (Thursday Only)",
      description: "Special palanquin procession every Thursday",
      time: "Evening (6:00 PM - 8:00 PM)",
      cost: "₹700",
      duration: "2 hours",
      category: "Festival Sevas"
    },
    {
      id: 14,
      name: "Swarna Kavacha",
      description: "Golden armor ritual for prosperity and protection",
      time: "Morning (9:00 AM - 10:00 AM)",
      cost: "₹700",
      duration: "1 hour",
      category: "Special Sevas"
    },
    {
      id: 15,
      name: "Sankalpa Shraaddha (2 TP)",
      description: "Annual shraaddha ceremony for two people",
      time: "Full day ceremony",
      cost: "₹750",
      duration: "6 hours",
      category: "Special Occasions"
    },
    {
      id: 16,
      name: "Chataka Shraaddha (2 TP)",
      description: "Shraaddha ceremony for two people with traditional rites",
      time: "Full day ceremony",
      cost: "₹900",
      duration: "6 hours",
      category: "Special Occasions"
    },
    {
      id: 17,
      name: "Heavy Vehicle Pooja",
      description: "Special pooja for heavy vehicles and trucks",
      time: "Morning (8:00 AM - 9:00 AM)",
      cost: "₹1,000",
      duration: "1 hour",
      category: "Personal Sevas"
    },
    {
      id: 18,
      name: "Achaarya Mukhena Sankalpa Shraddha",
      description: "Special shraaddha ceremony with Vedic rituals",
      time: "Full day ceremony",
      cost: "₹1,750",
      duration: "6 hours",
      category: "Special Occasions"
    },
    {
      id: 19,
      name: "Pratyeka Satyanarayana Pooje - Purnima day (2TP)",
      description: "Satyanarayana worship on full moon day with two priests",
      time: "Full day ceremony",
      cost: "₹2,000",
      duration: "4 hours",
      category: "Special Sevas"
    },
    {
      id: 20,
      name: "Pratyeka Dhanvantari Homa - Thursdays (2 TP)",
      description: "Dhanvantari fire ritual every Thursday with two priests",
      time: "Thursday (6:00 PM - 8:00 PM)",
      cost: "₹2,000",
      duration: "2 hours",
      category: "Weekly Sevas"
    },
    {
      id: 21,
      name: "Kankaabhisheka",
      description: "Special abhisheka ceremony with sacred waters",
      time: "Morning (7:00 AM - 9:00 AM)",
      cost: "₹2,000",
      duration: "2 hours",
      category: "Special Sevas"
    },
    {
      id: 22,
      name: "Achaarya Mukhena Chataka Shraaddha",
      description: "Special shraaddha with Vedic chanting and rituals",
      time: "Full day ceremony",
      cost: "₹2,900",
      duration: "6 hours",
      category: "Special Occasions"
    },
    {
      id: 23,
      name: "Prathekya Chataka Shraaddha",
      description: "Annual shraaddha ceremony for ancestors",
      time: "Full day ceremony",
      cost: "₹2,900",
      duration: "6 hours",
      category: "Special Occasions"
    },
    {
      id: 24,
      name: "Thulabhara Seve (Prahaladha Rajaru)",
      description: "Tulabhara ritual - weighing devotees against tulsi leaves",
      time: "Morning (6:00 AM - 12:00 PM)",
      cost: "₹3,000",
      duration: "6 hours",
      category: "Special Sevas"
    },
    {
      id: 25,
      name: "Sampoorna Alankaara Seve",
      description: "Complete decoration service for deity with flowers and ornaments",
      time: "Morning (8:00 AM - 12:00 PM)",
      cost: "₹3,000",
      duration: "4 hours",
      category: "Special Sevas"
    },
    {
      id: 26,
      name: "Durga Deepa Namaskaara - Pratyeka",
      description: "Individual Durga worship with lamp and flower offerings",
      time: "Evening (6:00 PM - 8:00 PM)",
      cost: "₹4,000",
      duration: "2 hours",
      category: "Special Sevas"
    },
    {
      id: 27,
      name: "Pratyeka Satyanarayana Pooje Other days (2 TP)",
      description: "Satyanarayana worship on regular days with two priests",
      time: "Evening (5:00 PM - 7:00 PM)",
      cost: "₹4,000",
      duration: "2 hours",
      category: "Weekly Sevas"
    },
    {
      id: 28,
      name: "Pratyeka Dhanvantari Homa Other days (2 TP)",
      description: "Dhanvantari fire ritual on regular days with two priests",
      time: "Morning (8:00 AM - 10:00 AM)",
      cost: "₹4,000",
      duration: "2 hours",
      category: "Weekly Sevas"
    },
    {
      id: 29,
      name: "Evening Prasada Seva (Thursdays & Special Days)",
      description: "Evening prasad distribution on Thursdays and special occasions",
      time: "Evening (6:00 PM - 8:00 PM)",
      cost: "₹4,000",
      duration: "2 hours",
      category: "Weekly Sevas"
    },
    {
      id: 30,
      name: "Srinivasa Kalyana",
      description: "Divine wedding ceremony for Lord Srinivasa",
      time: "Full day ceremony",
      cost: "₹5,000",
      duration: "6 hours",
      category: "Special Occasions"
    },
    {
      id: 31,
      name: "Sarva Seve",
      description: "Complete service including all types of worship and offerings",
      time: "Full day ceremony",
      cost: "₹5,000",
      duration: "8 hours",
      category: "Special Sevas"
    },
    {
      id: 32,
      name: "Madhu Abhisheka (48 Days)",
      description: "Special abhisheka with honey for 48 consecutive days",
      time: "Daily (6:00 AM - 8:00 AM)",
      cost: "₹5,400",
      duration: "48 days",
      category: "Extended Sevas"
    },
    {
      id: 33,
      name: "Pratyeka Satyanarayana Pooje At Home (2 TP)",
      description: "Satyanarayana worship at devotee's home with two priests",
      time: "As scheduled",
      cost: "₹6,000",
      duration: "3 hours",
      category: "Personal Sevas"
    },
    {
      id: 34,
      name: "Gow Graasa 1 Month",
      description: "One month cow feeding and service at temple goshala",
      time: "Full month service",
      cost: "₹9,000",
      duration: "30 days",
      category: "Charitable Sevas"
    },
    {
      id: 35,
      name: "Gow Daana (10 TP)",
      description: "Cow donation with ten years of feeding service",
      time: "As scheduled",
      cost: "₹20,000",
      duration: "10 years",
      category: "Charitable Sevas"
    },
    {
      id: 36,
      name: "Nutana Vastra Samarpane",
      description: "Distribution of new clothes to needy and devotees",
      time: "As scheduled",
      cost: "Contact Office",
      duration: "As needed",
      category: "Charitable Sevas"
    },
    {
      id: 37,
      name: "Pratyeka Svayamvara Parvathi Homa",
      description: "Special fire ritual to Goddess Parvathi at home",
      time: "As scheduled",
      cost: "Contact Office",
      duration: "4 hours",
      category: "Personal Sevas"
    },
    {
      id: 38,
      name: "Any other seva",
      description: "Custom seva as per devotee's wish and requirement",
      time: "As scheduled",
      cost: "Contact Office",
      duration: "As needed",
      category: "Custom Sevas"
    }
  ];

  const handleBookSeva = (seva: Seva) => {
    setSelectedSeva(seva);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    alert(`Booking submitted for ${selectedSeva?.name}! We will contact you soon.`);
    setShowBookingForm(false);
    setSelectedSeva(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Seva List</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Participate in divine service and earn spiritual merit through our various sevas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Divine Services</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              Seva (service) is a sacred opportunity to participate in divine activities and earn spiritual merit.
              Our mutt offers various forms of seva that allow devotees to contribute to the maintenance of religious
              traditions and receive blessings. All sevas are performed with devotion and precision.
            </p>
          </div>

          {/* Seva Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sevas.map((seva) => (
              <div key={seva.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4">
                  <h3 className="text-xl font-bold text-white">{seva.name}</h3>
                  <p className="text-orange-100 text-sm">{seva.category}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{seva.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-semibold text-gray-800">{seva.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-800">{seva.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Cost</p>
                      <p className="font-semibold text-orange-600">{seva.cost}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-semibold text-gray-800">{seva.category}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookSeva(seva)}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Book This Seva
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && selectedSeva && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Book {selectedSeva.name}</h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5+ People</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Any special requests or notes"
                  ></textarea>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Seva Cost:</span>
                    <span className="text-orange-600 font-bold">{selectedSeva.cost}</span>
                  </div>
                  <p className="text-sm text-gray-600">Payment will be collected at the temple</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
