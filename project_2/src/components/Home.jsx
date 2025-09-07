const Home = () => {
  return (
    <div className=" w-screen lg:mt-10 lg:flex lg:flex-row-reverse lg:w-3/  ">
      <div className="lg:w-1/3 lg:mr-auto lg:ml-auto">
        <img
          className="h-90  ml-3  lg:mt-20  lg:mr-auto lg:ml-auto"
          src=".\public\img1.png"
          alt=""
        />
      </div>

      <div className=" lg:w-3/5 lg:ml-auto lg:mr-auto ">
        <h1 className="text-4xl font-medium p-6 lg:text-6xl lg:mt-10 ">
          Cook Like a Pro With Our{" "}
          <span className="font-bold text-pink-500">Easy</span> and{" "}
          <span className="font-bold text-pink-500">Tasty</span> Recipes.
        </h1>
        <p className=" text-xl text-center ml-5 opacity-80 lg:text-2xl lg:mt-5">
          Discover easy, delicious, and homemade recipes crafted for every
          occasion. From quick meals to festive dishes, cook with love and bring
          flavor to your table.
        </p>
        <div className="flex gap-5 lg:gap-10 justify-center mt-10 lg:mt-10">
          <button className="border transition bg-pink-500 lg:scale-110 lg:hover:bg-white lg:active:scale-120 lg:hover:text-pink-500   p-2 rounded-4xl font-medium border-pink-500 active:bg-white active:text-pink-500 active:scale-110 text-white">
            Explore Now
          </button>
          <button className="border transition lg:scale-110 lg:hover:bg-pink-500 lg:active:scale-120 lg:hover:text-white   p-2 rounded-4xl font-medium border-pink-500 active:bg-pink-500 active:text-white active:scale-110 text-pink-600">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
