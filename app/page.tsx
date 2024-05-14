import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
        <div className="bg-gray-100 min-h-screen">
          <Navbar/>
        {/* Hero Section */}
        <section className="container mx-auto py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Welcome</h1>
              <p className="mb-8">To the West-Mec Cosmetology program. Where student earn invaluable skills that will prepare them for a career in cosmetology and hairology.</p>
              <div className="flex space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"><Link href='/signup'>Sign-up</Link></button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"><Link href='/login'>Login</Link></button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image src="/images/SW-Hairstyling-37 1.png" alt="Hero Image" className="w-full" width={1000} height={1}/>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="container mx-auto py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Image src="/images/landingOverlay.png" alt="Impact Image" className="w-full" width={500} height={500} />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold mb-4">HOW WE MAKE IMPACT</h2>
              <p className="mb-4">In partnership with Maricopa Colleges, the program provides Prior Learning Assessment (PLA). PLA helps students pursue an AAS in Beauty and Wellness degree. Students earn college credit through the Hairstyling Program, after completing the industry license, and transfer these credits to a community college, and then to a university, towards specific degrees.</p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto text-white">
            <h2 className="text-2xl font-bold mb-8 text-center">WHAT WE OFFER</h2>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                {/* <img src="icon-1.png" alt="Icon 1" className="h-12 mx-auto mb-2" /> */}
                <h3 className="font-bold">Certifications</h3>
              </div>
              <div className="text-center">
                {/* <img src="icon-2.png" alt="Icon 2" className="h-12 mx-auto mb-2" /> */}
                <h3 className="font-bold">Professional Experience</h3>
              </div>
              <div className="text-center">
                {/* <img src="icon-3.png" alt="Icon 3" className="h-12 mx-auto mb-2" /> */}
                <h3 className="font-bold">Dual Enrollment</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Student Reviews Section */}
        <section className="container mx-auto py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">STUDENT REVIEWS</h2>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <Image src="/images/star.png" alt="Star Icon" className="h-8 mx-auto mb-2" width={55} height={100}/>
              <p>Excellent</p>
            </div>
            <div className="text-center">
              <Image src="/images/star.png" alt="Star Icon" className="h-8 mx-auto mb-2" width={55} height={100}/>
              <p>Based on 485 reviews</p>
            </div>
            <div className="text-center">
              <Image src="/images/star.png" alt="Star Icon" className="h-8 mx-auto mb-2" width={55} height={100}/>
              <p>Trustpilot</p>
            </div>
          </div>
        </section>
      <Footer/>
    </div>
        </>

    )
}