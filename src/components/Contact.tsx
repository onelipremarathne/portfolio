"use client";

const Contact = () => {
  async function writeClipboardText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
    }
  }

  return (
    <div className="flex flex-col w-full max-w-2xl h-screen items-center justify-center mx-auto px-4">
      <div className="text-5xl sm:text-5xl md:text-7xl m-10 text-purple-950 text-center">
        Contact me
      </div>
      <div className="relative inline-block max-w-sm sm:max-w-sm md:max-w-md">
        <div className="bg-white/20 h-12 sm:h-14 lg:h-16 w-full p-3 sm:p-4 text-purple-800 text-lg sm:text-xl lg:text-2xl rounded-2xl transition-all duration-300 hover:-translate-y-1 pr-12 sm:pr-14 lg:pr-16 cursor-pointer">
          oneli.premarathne@gmail.com
        </div>
        <svg
          className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 cursor-pointer absolute right-2 sm:right-3 lg:right-2 top-3 sm:top-3 lg:top-3 text-purple-950"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          onClick={() => writeClipboardText("irwtn@protonmail.com")}
        >
          <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
