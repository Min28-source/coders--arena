"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddPlayersDialog from "./AddPlayersDialog"
import { TextShimmer } from "./ui/text-shimmer";
import { useSocket } from "@/contexts/socketContext";

const AnimatedMenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    className="focus:outline-none z-999"
  >
    <motion.div animate={{ y: isOpen ? 13 : 0 }} transition={{ duration: 0.3 }}>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className="text-black"
      >
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 22 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 12 L 22 12", opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 21.5 L 22 21.5" },
            open: { d: "M 3 2.5 L 17 16.5" },
          }}
        />
      </motion.svg>
    </motion.div>
  </button>
);

const CollapsibleSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between py-2 px-4 rounded-xl hover:bg-gray-100"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{title}</span>
        {open ? <XIcon /> : <MenuIcon />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuIcon = () => (
  <motion.svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <motion.line x1="3" y1="12" x2="21" y2="12" />
  </motion.svg>
);

const XIcon = () => (
  <motion.svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <motion.line x1="18" y1="6" x2="6" y2="18" />
    <motion.line x1="6" y1="6" x2="18" y2="18" />
  </motion.svg>
);

const Sidebar = () => {
  type Player = {
    id: string
    name: string
  }

  const [players, setPlayers] = useState<Player[]>([])
  const [isOpen, setIsOpen] = useState(false);

  const socket = useSocket();

  useEffect(() => {
    socket.emit("get-players-data", localStorage.getItem('roomId'));

    socket.on("players-update", (players) => {
      setPlayers(players)
    })

    return () => {
      socket.off("players-update")
    }
  }, [])

  const mobileSidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileSidebarVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-white text-black"
          >
            <div className="flex flex-col h-full">

              <div className="p-4 border-b border-gray-200">
                <p className="font-semibold">Code Arena</p>
                <p className="text-sm text-gray-500">Code. Compete. Conquer</p>
              </div>

              <nav className="flex-1 p-4 overflow-y-auto">

                <div className="px-1 pb-2">
                  <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                    Players in the Room
                  </p>
                </div>

                <ul>
                  {players.map((player) => (
                    <li key={player.id} className="mb-2">
                      <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                        {player.name}
                      </button>
                    </li>
                  ))}
                </ul>

              </nav>

              <div className="p-4 border-t border-gray-200">
                <AddPlayersDialog />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col fixed top-0 left-0 h-full w-64 bg-white text-black shadow">

        <div className="p-4 border-b border-gray-200">
          <p className="font-semibold">Code Arena</p>
          <p className="text-sm text-gray-500">Code. Compete. Conquer.</p>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">

          {/* HEADING ADDED HERE */}
          <div className="px-1 pb-2">
            <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Players in Room
            </p>
          </div>

          <ul>
            {players.map((player) => (
              <li key={player.id} className="mb-2">
                <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                  {player.name}
                </button>
              </li>
            ))}
          </ul>

        </nav>

        <div className="p-4 border-t border-gray-200">
          <AddPlayersDialog />
        </div>

      </div>

      <div className="flex-1 ml-0 md:ml-64">

        <div className="p-4 bg-gray-100 border-b border-gray-200 md:hidden flex justify-between items-center">
          <span></span>
          <AnimatedMenuToggle toggle={toggleSidebar} isOpen={isOpen} />
        </div>

        <div className="p-6">
          <TextShimmer className='text-xl' duration={1}>
            Waiting for other players to join the room...
          </TextShimmer>
        </div>

      </div>

    </div>
  );
};

export { Sidebar };