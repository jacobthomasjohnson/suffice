"use client";

import useStore from "../zustand/store";
import Image from "next/image";

export const KeyBinds = () => {
  const keyBindsOpen = useStore((state) => state.keyBindsOpen);
  const setKeyBindsOpen = useStore((state) => state.setKeyBindsOpen);

  const toggleKeyBinds = () => {
    setKeyBindsOpen(!keyBindsOpen);
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center z-50 ">
        <div
          className={`rounded-t-lg text-sm p-4 transition-all duration-75 text-neutral-400 px-6 bg-background text-center border border-b-0 border-[#454545] hover:py-6 hover:cursor-pointer ${
            keyBindsOpen ? "translate-y-[300px]" : "translate-y-0"
          }`}
          onClick={toggleKeyBinds}
        >
          KEYBOARD SHORTCUTS
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center z-50 pointer-events-none">
        <div
          className={`rounded-lg pointer-events-none select-none transition-all duration-500 border border-[#333333] bg-background mb-4 ${
            keyBindsOpen ? "translate-y-0 pointer-events-auto" : "translate-y-[300px]"
          }`}
        >
          <table className="table-keybinds overflow-hidden">
            <thead>
              <tr>
                <td>Space</td>
                <td>N</td>
                <td>CTRL + Z</td>
                <td className="bg-[#c25454] hover:cursor-pointer rounded-lg" onClick={toggleKeyBinds}>
                  <Image
                    src="/icon-add.svg"
                    className="rotate-45"
                    alt="Close Keybinds"
                    width={14}
                    height={14}
                  />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Search</td>
                <td>Page</td>
                <td>Undo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default KeyBinds;
