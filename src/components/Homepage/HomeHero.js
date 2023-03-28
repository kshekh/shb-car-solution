import hero from "../../assets/images/hero-thumbnail.png";
function HomeHero() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center before:bg-gray-700/40 before:backdrop-blur-xs before:absolute before:inset-0 ">
          <div className="relative z-10 text-white max-w-3xl mx-auto px-5 ">
            <h1 className="text-7xl leading-snug font-semibold text-white uppercase text-center">
              We’ll take care of your vehicle.
            </h1>
          </div>
        </div>
        <div className="overflow-hidden">
          <img src={hero} alt="hero" className="w-full aspect-auto" />
        </div>
      </div>
    </>
  );
}

export default HomeHero;
