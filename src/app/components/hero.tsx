export default function HeroSection() {
    return (
      <section className="relative bg-white">
        <div
          className="container mx-auto flex items-center justify-end px-4 py-16 lg:py-32 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')" 
          }}
        >
          {/* Right Text Section */}
          <div className="w-full lg:w-1/2 bg-[#fdead1] p-8 rounded-lg shadow-lg text-center lg:text-left">
            <p className="text-black-500 uppercase text-sm font-bold">New Arrival</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#B88E2F] ">
              Discover Our <br /> New Collection
            </h1>
            
            <p className="text-black-500 leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
  
            <button className="px-6 py-3 mt-6 bg-[#B88E2F] text-white rounded-lg shadow-md hover:bg-[#957220] transition">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    );
  }
  