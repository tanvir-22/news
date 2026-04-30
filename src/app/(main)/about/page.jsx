import React from "react";

const Aboutpage = () => {
  return (
    <>
          <div className="max-w-4xl mx-auto px-6 py-12">

  <div className="text-center mb-12">
    <h1 className="text-5xl font-bold text-[#403F3F] mb-4">
      About <span className="text-red-600">Dragon</span> News
    </h1>
    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
      Your trusted source for breaking news, in-depth analysis, and stories that matter.
    </p>
  </div>

 
  <div className="bg-gray-50 rounded-2xl p-8 mb-8">
    <h2 className="text-2xl font-bold text-[#403F3F] mb-3">Our Mission</h2>
    <p className="text-gray-600 leading-relaxed">
      At Dragon News, we are committed to delivering accurate, unbiased, and timely news
      to our readers. We believe that an informed public is the cornerstone of a healthy
      democracy. Our team of dedicated journalists works around the clock to bring you
      stories from every corner of the world.
    </p>
  </div>

  <div className="grid grid-cols-3 gap-6 mb-8">
    <div className="text-center bg-red-600 text-white rounded-2xl p-6">
      <p className="text-4xl font-bold">10M+</p>
      <p className="text-sm mt-1 opacity-90">Monthly Readers</p>
    </div>
    <div className="text-center bg-[#403F3F] text-white rounded-2xl p-6">
      <p className="text-4xl font-bold">500+</p>
      <p className="text-sm mt-1 opacity-90">Journalists</p>
    </div>
    <div className="text-center bg-red-600 text-white rounded-2xl p-6">
      <p className="text-4xl font-bold">24/7</p>
      <p className="text-sm mt-1 opacity-90">Live Coverage</p>
    </div>
  </div>

  <div className="mb-8">
    <h2 className="text-2xl font-bold text-[#403F3F] mb-5">Our Core Values</h2>
    <div className="grid grid-cols-2 gap-4">
      {[
        { title: "Accuracy", desc: "Every story is fact-checked by our editorial team before publishing." },
        { title: "Integrity", desc: "We report without bias, letting facts speak for themselves." },
        { title: "Speed", desc: "Breaking news reaches you within minutes of it happening." },
        { title: "Transparency", desc: "We are open about our sources and correction policies." },
      ].map((value) => (
        <div key={value.title} className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-red-600 text-lg mb-1">{value.title}</h3>
          <p className="text-gray-500 text-sm">{value.desc}</p>
        </div>
      ))}
    </div>
  </div>


  <div className="mb-8">
    <h2 className="text-2xl font-bold text-[#403F3F] mb-5">Meet the Team</h2>
    <div className="grid grid-cols-3 gap-5">
      {[
        { name: "Jamal Hossain", role: "Editor in Chief" },
        { name: "Tanvir Rahman", role: "Senior Journalist" },
        { name: "AL Samir Shuvo", role: "Head of Digital" },
      ].map((member) => (
        <div key={member.name} className="text-center bg-gray-50 rounded-2xl p-6">
          <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
            {member.name.charAt(0)}
          </div>
          <p className="font-semibold text-[#403F3F]">{member.name}</p>
          <p className="text-gray-400 text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  </div>

 
  <div className="text-center bg-[#403F3F] text-white rounded-2xl p-8">
    <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
    <p className="text-gray-300 mb-5">
      Have a tip or story idea? We'd love to hear from you.
    </p>
    
      <a href="mailto:contact@dragonnews.com"
      className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition"
    >
      Contact Us
    </a>
  </div>
</div>
    </>

  )
};

export default Aboutpage;
