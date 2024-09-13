import Image from "next/image";

//import Image from "next/image";
export default function Blogs() {
  return (
    <>
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-800 mb-2 text-center">
            Blogs
          </h2>
          <p class="text-gray-500  text-3xl  md:text-2xl lg:text-xl text-center mb-16">
            Explore our blog for expert tips, industry insights, and engaging{" "}
            <br /> content on the latest trends. Stay informed and inspired!
          </p>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
            <div className=" rounded-lg bg-gray-100  shadow-md overflow-hidden p-4">
              <Image
                src="https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970185.jpg?t=st=1726218876~exp=1726222476~hmac=2dcd32fac1e86cdf05415c9cc9cf2a1b2a944a4455d37a1a6271055ba6e61791&w=740"
                alt="wheat flour grinding"
                width={256}
                height={256}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div
                // style="max-width: 240px;"
                class="flex rounded-full mx-auto bg-gradient-to-tr border-1 p-1 mt-2"
              >
                <button class="flex text-sm bg-white mt-2 px-6 py-1 border-2 border-blue-800 rounded-full">
                January 10, 2024
                
                </button>
              </div>
              <div className="pt-2 ">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Why Data-Driven Decision Making is Key for Business Growth
                </h3>
                <p className="text-gray-700 text-lg">
                Learn how leveraging software that offers real-time data insights can enhance strategic decisions, boost productivity, and drive sustainable growth.
                </p>
              </div>
            </div>
            <div className="  rounded-lg bg-gray-100 shadow-md overflow-hidden p-4">
              <Image
                src="https://img.freepik.com/free-photo/employees-addressing-their-team-leader-about-practices-lessons-learned_482257-91135.jpg?t=st=1726218979~exp=1726222579~hmac=a91ddbe5d56eb30c4043c26e57f961c06e33a61ad18eed32468cf1ab1edb851c&w=1380"
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
                width={256}
                height={256}
              />
               <div
                
                class="flex rounded-full mx-auto bg-gradient-to-tr border-1 p-1 mt-2"
              >
                <button class="flex text-sm bg-white mt-2 px-6 py-1 border-2 border-blue-800 rounded-full">
               
                September 1, 2024
                </button>
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Top 5 Business Services to Boost Customer Satisfaction
                </h3>
                <p className="text-gray-700 text-lg">
                Explore essential services such as CRM, help desk solutions, and automated support systems that can enhance customer experiences and foster long-term loyalty
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 shadow-md overflow-hidden p-4">
              <Image
                src="https://img.freepik.com/free-photo/people-working-with-devices-office_23-2147656701.jpg"
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-xl"
                width={256}
                height={256}
              />
              <div
                
                class="flex rounded-full mx-auto bg-gradient-to-tr border-1 p-1 mt-2"
              >
                <button class="flex text-sm bg-white mt-2 px-6 py-1 border-2 border-blue-800 rounded-full">
               
                January 10, 2024
                </button>
              </div>
              <div className="pt-2 ">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Leveraging Software Solutions to Enhance Business Efficiency 
                </h3>
                <p className="text-gray-700 text-lg">
                Discover how modern software tools can streamline your operations, automate tasks, and improve workflow efficiency to help your business stay competitive.
                </p>
              </div>
            </div>
            
           
            
          </div>
          <div className="flex items-center justify-center pt-8">
            <a
              href=""
              class=" flex items-center justify-center text-white bg-blue-800 border border-indigo-600 py-2 px-6 gap-2 rounded-md "
            >
              <span>View More</span>
              <svg
                class="w-4"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}