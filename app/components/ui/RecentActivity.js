"use client";

export const RecentActivity = ({ action, page, date, user }) => {
  return (
    <div className="relative w-full border-b border-neutral-700 hover:border-blue-100 py-6 text-base flex flex-col gap-4 hover:cursor-pointer overflow-hidden group opacity-90 hover:opacity-100 transition-all duration-100 ">
      <div className="text-neutral-300 group-hover:text-blue-100 transition-all duration-100">
        {action}
        <span className="p-2  transition-all duration-100 border mx-2 rounded-md inline font-light group-hover:border-blue-200">
          {page}
        </span>
        by <span className="font-bold">{user}</span> on {date}
      </div>
    </div>
  );
};

export default RecentActivity;
