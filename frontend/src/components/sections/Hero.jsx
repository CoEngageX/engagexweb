import {Link} from 'react-router-dom'
import Button from '../common/Button'

const Hero = () => {
  return (
    <div  className="relative bg-cover bg-center text-white py-24"
      style={{
        backgroundImage: "url('/Fliers/Rectangle 4.png')", // change to your image path
      }}>
        <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">CoEngageX</h1>
        <p className="text-xl md:text-2xl mb-5 text-[#FDB913]">Connect. Collaborate. Grow.</p>
        <p className='mb-8 text-xl'>CoEngageX is a people-first growth and engagement platform designed to bridge the gap between professionals, students, and businesses. It creates meaningful connections through curated events, job opportunities, and verified job postings, helping individuals discover career-building opportunities while enabling organizations to access trusted talent.</p>
        <div className="flex justify-center space-x-4 flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center">
          <Link to="/events">
            <Button className='bg-[#FDB913] hover:bg-[#ddcb9d]'>Explore Upcoming Events</Button>
          </Link>
          <Link to="/sponsors">
            <Button className='border-2 border-[#FDB913]'>Find Opportunities</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero