import { useState, useEffect, useRef } from "react";
import Section from "../types/sideBarTypes";
import { Button } from "../components/ui/button"; // Ensure Button is used or remove this import
import VoiceAssistant from "../Components/VoiceAssistance";

interface SectionProps {
  section: Section[];
}

export default function SideBar({ section }: SectionProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className="relative min-h-screen">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="default-sidebar"
        aria-expanded={isSidebarOpen}
        type="button"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-black">
          <nav className="space-y-6">
            {section.map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-white mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
                      >
                        <link.icon className="h-6 w-6" />
                        <span className="text-base font-medium">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <VoiceAssistant />
          <div className="mt-8 bg-black rounded-md p-6 border border-white">
            <h3 className="text-lg font-semibold text-white mb-3">
              Get in Touch
            </h3>
            <p className="text-white mb-4">
              Have a question or need help? Contact our support team.
            </p>
            <Button
              variant="outline"
              className="w-full border-black text-black border border-b-white"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">{/* Your main content goes here */}</div>
    </div>
  );
}
