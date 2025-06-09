export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center h-screen md:max-w-[80%] mx-auto">
          <div className="text-5xl sm:text-5xl md:text-7xl text-pink-950 w-1/2 text-center sm:text-center md:text-right mb-10 sm:mb-10 pb-10 sm:pb-10 md:mr-10 md:pr-10 md:leading-25 border-b-2 sm:border-b-2 md:border-r-2 md:border-b-0 border-pink-900">
            <div>Hi, {"I'm"}</div>Oneli Premarathne
          </div>
          <div className="text-xl sm:text-xl md:text-2xl text-pink-800 w-1/2 textcenter sm:text-center md:text-left">
            I am a motivated, hardworking and an energetic person who has
            developed a mature and a responsible approach to any task that I am
            presented with. With the strong skills acquired through a range of
            extracurricular activities that I had been engaged with, I am
            certain that I can be a great value addition to the organization
            where I will be working.
          </div>
        </div>
      </div>

      <div className="sticky top-0 h-screen bg-gradient-to-r from-rose-100 via-rose-200 to-rose-300"></div>
    </div>
  );
}
