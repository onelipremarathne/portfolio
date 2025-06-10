"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getUserProfile, getUserRepositories } from "@/services/github";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

interface GitHubData {
  profile: {
    avatar_url: string;
    name: string;
    bio: string;
    html_url: string;
  };
  repositories: Repository[];
}

const Projects = () => {
  const [data, setData] = useState<GitHubData>({
    profile: {
      avatar_url: "",
      name: "",
      bio: "",
      html_url: "",
    },
    repositories: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const username = "onelipremarathne";
        const [profile, repositories] = await Promise.all([
          getUserProfile(username),
          getUserRepositories(username),
        ]);
        setData({ profile, repositories });
      } catch (error) {
        console.error("GitHub API Error:", error);
        setData({
          profile: {
            avatar_url: "",
            name: "",
            bio: "",
            html_url: "",
          },
          repositories: [],
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  const onClickGood = contextSafe(() => {
    gsap.to(".good", { rotation: "+=360" });
  });

  if (loading) {
    return <div className="flex flex-col items-center justify-center h-screen text-2xl">Loading...</div>;
  }

  const { repositories } = data;

  return (
    <div
      ref={container}
      className="flex flex-col items-center justify-center h-screen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="fixed bottom-8 size-14 sm:size-14 md:size-20 animate-bounce text-pink-950"
      >
        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12V8H11V12H8L12 16L16 12H13Z"></path>
      </svg>
      <div className="text-5xl sm:text-5xl md:text-7xl m-10 sm:m-10 md:m-20 text-rose-950 text-center">
        My Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 md:gap-8">
        {repositories.map((item, index) => (
          <div
            onClick={onClickGood}
            key={index}
            className="good group relative mx-auto w-full max-w-sm md:h-md rounded-2xl cursor-pointer 
                       overflow-hidden bg-white/20 px-4 sm:px-6 pt-6 sm:pt-10 pb-6 sm:pb-8 
                       ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative mx-auto max-w-md h-full flex flex-col">
              <div
                className="text-lg sm:text-2xl lg:text-3xl 
                              font-bold uppercase text-right text-rose-950"
              >
                {item.name}
              </div>
              <div
                className="space-y-4 sm:space-y-6 pt-3 sm:pt-5 leading-6 sm:leading-7 
                              text-base sm:text-lg lg:text-xl transition-all duration-300 
                              flex-grow text-rose-900"
              >
                <p>{item.description}</p>
              </div>
              <div className="pt-3 sm:pt-5 text-sm sm:text-base font-semibold leading-6 sm:leading-7">
                <div className="flex items-center justify-between">
                  <a
                    href={item.html_url}
                    className="text-rose-800 transition-all duration-300"
                  >
                    Repository link &rarr;
                  </a>
                  <Image
                    width={48}
                    height={48}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.language?.toLowerCase()}/${item.language?.toLowerCase()}-original.svg`}
                    alt={`${item.language} icon`}
                    className="w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
