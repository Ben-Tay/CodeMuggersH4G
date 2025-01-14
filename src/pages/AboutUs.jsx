import React from 'react'

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* About Us Section */}
      <section className="mb-12">
        <h1 className="text-3xl font-extrabold text-indigo-600 mb-4">About Us</h1>
        <article className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            Muhammadiyah Welfare Home is a non-profit organization dedicated to supporting orphaned children, providing them with care, education, and a nurturing environment.
          </p>
        </article>
      </section>

      {/* How Can You Contribute Section */}
      <section>
        <h1 className="text-3xl font-extrabold text-indigo-600 mb-4">How Can You Contribute?</h1>
        <article className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            Follow us on our social media platforms, and support our fundraising events by donating when we are running campaigns. Every little contribution makes a big difference!
          </p>
        </article>
      </section>
    </div>
  )
}

export default AboutUs
