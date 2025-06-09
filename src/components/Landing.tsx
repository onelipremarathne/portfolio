const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 max-w-sm sm:max-w-sm mx-auto md:flex-row md:max-w-[80%]">
      <div className="text-5xl sm:text-5xl md:text-7xl text-pink-950 w-full md:w-1/2 text-center md:text-right mb-8 pb-8 md:mr-10 md:pr-10 md:leading-25 border-b-2 md:border-r-2 md:border-b-0 border-pink-900">
        <div>Hi, {"I'm"}</div>Oneli Premarathne
      </div>
      <div className="text-xl sm:text-xl md:text-2xl text-pink-800 w-full md:w-1/2 text-center md:text-left">
        I am a motivated, hardworking and an energetic person who has developed
        a mature and a responsible approach to any task that I am presented
        with. With the strong skills acquired through a range of extracurricular
        activities that I had been engaged with, I am certain that I can be a
        great value addition to the organization where I will be working.
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="fixed bottom-8 size-14 sm:size-14 md:size-20 animate-bounce text-pink-950"
      >
        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12V8H11V12H8L12 16L16 12H13Z"></path>
      </svg>
    </div>
  );
};

export default Landing;
