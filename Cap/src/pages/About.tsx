

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xl">
            <h1 className="text-2xl font-bold mb-4 text-center">About Vermin Vault</h1>
            <p className="text-gray-700 mb-4">Welcome to Vermin Vault, your comprehensive solution for managing pest control service tickets with ease and efficiency. Say goodbye to paperwork and hello to streamlined ticket management!</p>
      
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Why Choose Vermin Vault?</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-1">Efficiency: Simplify your workflow with our centralized platform for storing, tracking, and managing pest control service tickets.</li>
                <li className="mb-1">Organization: Categorize and prioritize tickets effortlessly, optimizing scheduling and resource allocation for your business.</li>
                <li className="mb-1">Accessibility: Access your ticket information anytime, anywhere, whether you're in the office or out in the field.</li>
                <li className="mb-1">Weather Integration: Seamlessly check weather conditions before scheduling services, ensuring efficient planning and execution.</li>
                <li>Customization: Tailor Vermin Vault to fit the unique needs of your pest control business with customizable features and personalized reports.</li>
              </ul>
            </div>
      
            <h2 className="text-xl font-semibold mb-2">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4">
              <li className="mb-1">Create Tickets: Easily generate new service tickets, providing essential details such as customer information and service location.</li>
              <li className="mb-1">Check Weather: Assess current weather conditions at service locations to plan routes and schedules effectively.</li>
              <li className="mb-1">Execute Services: Update ticket status, add notes, and record service details directly from mobile devices while on-site.</li>
              <li className="mb-1">Follow-Up: Generate detailed reports and recommendations for customers post-service, all within the app.</li>
              <li>Data Analysis: Gain insights into service trends, customer preferences, and technician performance with our reporting and analytics tools.</li>
            </ol>
      
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-700 mb-4">Vermin Vault is developed by a team of professionals with expertise in both pest control management and software development. Our mission is to empower pest control companies with efficient tools for delivering exceptional service.</p>
      
            <div className="text-center">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Get Started Today</a>
            </div>
          </div>
        </div>
      );
      
    }      

export default About
