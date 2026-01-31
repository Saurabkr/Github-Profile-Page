import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import ActivityOverview from "../components/Activities/ActivityOverview";
import ContributionActivity from "../components/Activities/ContributionActivity";
import ContributionChart from "../components/Activities/ContributionChart";
import PopularRepositories from "../components/Users/PopularRepositories";
import SidebarProfile from "../components/Users/SidebarProfile";
import profileConfig from "../config/profileConfig.json";
import { useProfile } from "../context/ProfileContext";

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const { fetchUserProfile, fetchContributionsByYear, loading, error, user } =
    useProfile();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { profilePage, activityOverview } = profileConfig.texts;

  useEffect(() => {
    if (username) {
      fetchUserProfile(username);
    }
  }, [username]);

  useEffect(() => {
    if (username && user && selectedYear) {
      fetchContributionsByYear(username, selectedYear);
    }
  }, [selectedYear, username, user]);

  const yearOptions = useMemo(
    () => Array.from({ length: 11 }, (_, i) => new Date().getFullYear() - i),
    [],
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{profilePage.loading}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-2">{profilePage.errorTitle}</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          <SidebarProfile />

          <div className="flex-1 min-w-0 space-y-6">
            <PopularRepositories />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col border border-gray-200 bg-white rounded-md flex-1 min-w-0">
                {/* Year selector for mobile/tablet */}
                <div className="md:hidden p-4 border-b border-gray-200">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#1f6feb]"
                  >
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-4 overflow-x-auto">
                  <ContributionChart selectedYear={selectedYear} />
                </div>
                <div className="flex flex-row gap-2 w-full p-4 border-t-4 border-gray-200">
                  <div className="w-1/2 border-r-2 border-gray-200">
                    <h2 className="text-gray-900 font-semibold text-xs mb-6">
                      {activityOverview.title}
                    </h2>
                  </div>
                  <ActivityOverview />
                </div>
              </div>

              {/* Year selector for desktop */}
              <div className="hidden md:flex flex-col gap-2 w-[100px]">
                {yearOptions.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${
                      selectedYear === year
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <ContributionActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
