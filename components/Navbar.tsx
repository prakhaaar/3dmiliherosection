"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);

  // ✅ Typed search handler
  const handleSearch = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <>
      {/* ======================= 🖥️ DESKTOP NAVBAR ======================= */}
      <header className="sticky top-0 z-20 w-full font-popins transition-transform duration-300 ease-in-out hidden lg:block">
        <div className="relative z-10 border-b border-neutral-200/70 bg-white dark:border-transparent dark:bg-neutral-900 transition-colors duration-300 ease-in-out">
          <div className="px-2 lg:px-14 w-full">
            <div className="flex h-16 justify-between items-center sm:h-20">
              {/* LEFT — Logo + Nav */}
              <div className="flex items-center gap-x-3 sm:gap-x-8 flex-shrink-0">
                <a
                  href="/"
                  className="inline-block flex-shrink-0 text-primary-600 cursor-pointer mt-[5px]"
                >
                  <div className="flex items-center">
                    <img
                      src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg"
                      alt="3DIMLI Logo"
                      fetchPriority="high"
                      width={180}
                      height={36}
                      className="h-9 w-auto"
                    />
                    <div className="ml-2 flex flex-col justify-center text-[10px] leading-none text-neutral-400 dark:text-neutral-400 border-l border-neutral-300 dark:border-neutral-700 pl-2 h-full font-medium">
                      <span>BETA</span>
                      <span>2.0.0</span>
                    </div>
                  </div>
                </a>

                {/* Divider */}
                <div className="hidden h-8 border-s border-neutral-200 md:block dark:border-neutral-700"></div>

                {/* Nav Links */}
                <ul className="hidden lg:flex items-center">
                  <li>
                    <a
                      href="/"
                      className="inline-flex h-10 items-center px-3 text-sm font-medium text-neutral-800 hover:text-opacity-100 sm:h-12 dark:text-neutral-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
                      aria-expanded={isDiscoverOpen}
                      className="inline-flex h-10 items-center px-3 text-sm font-medium text-neutral-800 hover:text-opacity-100 sm:h-12 dark:text-neutral-300"
                    >
                      Discover
                    </button>
                  </li>
                  <li>
                    <a
                      href="/features"
                      className="inline-flex h-10 items-center px-3 text-sm font-medium text-neutral-800 hover:text-opacity-100 sm:h-12 dark:text-neutral-300"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="inline-flex h-10 items-center px-3 text-sm font-medium text-neutral-800 hover:text-opacity-100 sm:h-12 dark:text-neutral-300"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* RIGHT — Search + Buttons */}
              <div className="inline-flex items-center justify-end w-full gap-2">
                {/* 🔍 Search Bar */}
                <form
                  onSubmit={handleSearch}
                  className="inline-flex w-full h-10 py-2 justify-between rounded-full border bg-transparent gap-1 text-sm border-neutral-200 dark:border-neutral-700 focus-within:ring-1 focus-within:ring-slate-500 focus-within:border-slate-500"
                >
                  <input
                    title="search"
                    type="search"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                    className="pl-3 bg-transparent pr-1 border-none ring-0 w-full placeholder:text-neutral-400 focus:outline-none dark:text-neutral-50"
                  />
                  <button
                    type="submit"
                    onClick={handleSearch}
                    aria-label="Search"
                    className="flex items-center justify-center px-3 border-l border-neutral-200 dark:border-neutral-700"
                  >
                    <Search className="size-4 text-gray-400 dark:text-white/60" />
                  </button>
                </form>

                {/* 🎮 Discord Button */}
                <a
                  href="https://discord.gg/d48csuWe46"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#5865F2] dark:bg-gradient-to-bl dark:from-gray-900 dark:to-primary text-white font-semibold py-3 px-6 rounded-2xl flex items-center gap-3 hover:bg-[#4752c4] dark:hover:bg-primary transition-all duration-300 ease-in-out relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <svg
                      width="28"
                      height="22"
                      viewBox="0 0 24 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative z-10"
                    >
                      <path d="M19.27 1.33C17.94 0.71 16.5 0.26 15 0a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 10.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"></path>
                    </svg>
                    <span className="font-medium tracking-wide relative z-10">
                      Discord
                    </span>
                  </button>
                </a>

                {/* ☁️ Upload Button */}
                <button className="min-w-fit inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-md bg-gradient-to-bl from-gray-900 to-primary text-white font-semibold px-6 py-3 relative overflow-hidden group transition-all duration-300 ease-in-out active:scale-95 hover:opacity-90">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                  </svg>
                  <span className="relative z-10">Upload</span>
                </button>

                {/* 👤 Avatar Button */}
                {/* 👤 Avatar Button */}
                <div className="AvatarDropdown self-center">
                  <div className="relative">
                    <button
                      aria-label="Open menu"
                      type="button"
                      className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-800 border border-gray-300 dark:border-neutral-700 px-3 transition-all duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-7 w-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ======================= 📱 MOBILE NAVBAR ======================= */}
      <div className="lg:hidden sticky top-0 z-[999] font-popins w-full flex justify-between items-center p-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-b border-neutral-200/70 bg-white dark:bg-neutral-900 h-14">
        <a
          href="/"
          className="flex items-center text-primary-600 text-start mt-[5px] px-1"
        >
          <img
            src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg"
            alt="3DIMLI Logo"
            className="h-6 w-auto"
          />
          <div className="ml-2 flex flex-col justify-center text-[8px] leading-none text-muted-foreground border-l dark:border-neutral-700 pl-2">
            <span>BETA</span>
            <span>2.0.0</span>
          </div>
        </a>
        <button className="p-2 rounded-full border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800">
          <Search className="w-4 h-4 text-gray-700 dark:text-white/70" />
        </button>
      </div>
    </>
  );
}
