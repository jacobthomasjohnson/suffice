"use client";

import { PageButton } from "./components/ui/pagebutton";
import { Button } from "./components/ui/button";
import pageData from "./api/data/pageData";
import recentActivity from "./api/data/recentActivity";
import RecentActivity from "./components/ui/RecentActivity";
import { useRef, useState, useEffect } from "react";
import useStore from "./zustand/store";

export const Dashboard = () => {
  const recentActivityExpand = useRef(null);
  const [recentActivityExpanded, setRecentActivityExpanded] = useState(false);
  const [recentActivityHeight, setRecentActivityHeight] = useState(0);
  const createModalOpen = useStore((state) => state.createModalOpen);
  const setCreateModalOpen = useStore((state) => state.setCreateModalOpen);
  const searchOpen = useStore((state) => state.searchOpen);
  const setSearchOpen = useStore((state) => state.setSearchOpen);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  }
  const createPage = () => {
    setCreateModalOpen(!createModalOpen);
  };
  useEffect(() => {
    if (recentActivityExpand.current) {
      setRecentActivityHeight(recentActivityExpand.current.scrollHeight);
    }
  }, [recentActivityExpanded]);

  useEffect(() => {
    setTimeout(() => {
      if (recentActivityExpanded) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 200);
  }, [recentActivityExpanded]);

  const toggleRecentActivity = () => {
    setRecentActivityExpanded((prev) => !prev);
  };
  return (
    <>
      <h1>Welcome back, Jacob!</h1>
      <span className="text-neutral-400">
        Your team's knowledge is always at your fingertips.
      </span>
      <hr />
      <hr />
      <h2>Quick Actions</h2>
      <div className="flex items-center gap-2 border-neutral-800">
        <Button icon={`/icon-add.svg`} onClick={createPage}>Create a New Page</Button>
        <Button icon={`/icon-search.svg`} onClick={toggleSearch}>Find a Document</Button>
        <Button icon={`/icon-settings.svg`}>Modify a Setting</Button>
      </div>
      <hr />
      <hr />
      <h2>Recent Pages</h2>
      <div className="flex w-full justify-items-start gap-2 flex-wrap">
        {pageData.map((page, index) => (
          <PageButton
            key={index}
            pageTitle={page.title}
            pageBody={page.body}
            prefix={page.prefix}
          />
        ))}
      </div>
      <hr />
      <hr />
      <h2>Recent Activity</h2>
      <div
        ref={recentActivityExpand}
        className={`overflow-hidden transition-all duration-200 relative z-10`}
        style={
          recentActivityExpanded
            ? { height: `${recentActivityHeight}px` }
            : { height: "200px" }
        }
      >
        <div
          className={`absolute bottom-0 h-[200px] bg-gradient-to-b from-transparent to-background w-full z-50 pointer-events-none transition-all duration-500 ${
            recentActivityExpanded ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        {recentActivity.map((activity, index) => (
          <RecentActivity
            key={index}
            action={activity.action}
            page={activity.page}
            date={activity.date}
            user={activity.user}
          />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button
          className="p-8 underline hover:no-underline text-neutral-300 hover:text-blue-200"
          onClick={toggleRecentActivity}
        >
          View all Recent Activity
        </button>
      </div>
    </>
  );
};

export default Dashboard;
