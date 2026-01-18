import React from 'react'
import Button from '../common/Button'

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to CoEngageX</h1>
        <p className="text-xl md:text-2xl mb-8">Connect with professionals and grow your network</p>
        <p className='mb-4'>CoEngageX is a people-first growth and engagement platform designed to bridge the gap between professionals, students, and businesses. It creates meaningful connections through curated events, job opportunities, and verified job postings, helping individuals discover career-building opportunities while enabling organizations to access trusted talent.</p>
        <div className="flex justify-center space-x-4">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero