import React from "react";

const StatusCard = ({ title, value, change, icon: Icon, color }) => {
  return (
    <div className="rounded-2xl border-l-0 p-6 shadow-lg hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold mt-2">{value}</h2>
          <p className="text-green-500 text-sm mt-2">{change}</p>
        </div>

        <div
          className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center`}
        >
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
