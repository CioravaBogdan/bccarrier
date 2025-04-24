import React, { useEffect, useState } from 'react';
import { Users, Building, Briefcase, TrendingUp } from 'lucide-react';

interface CompanyStats {
  followers: number;
  founded: number;
  employees: number;
  yearsActive: number;
}

export default function LinkedInStats() {
  const [stats, setStats] = useState<CompanyStats>({
    followers: 0,
    founded: 2014,
    employees: 0,
    yearsActive: 0
  });

  useEffect(() => {
    // In a production environment, this would be an API call to your backend
    // which would then fetch the data from LinkedIn's API
    const fetchCompanyStats = async () => {
      try {
        // Simulating API call with actual company data
        const response = {
          followers: 647, // This would be dynamic in production
          founded: 2014,
          employees: 32,  // This would be dynamic in production
          yearsActive: new Date().getFullYear() - 2014
        };
        setStats(response);
      } catch (error) {
        console.error('Error fetching LinkedIn stats:', error);
      }
    };

    fetchCompanyStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
      <div className="bg-blue-50 p-4 rounded-lg">
        <Users className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-2xl font-bold text-blue-900">{stats.followers}+</div>
        <div className="text-sm text-blue-600">Followers</div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <Building className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-2xl font-bold text-blue-900">{stats.founded}</div>
        <div className="text-sm text-blue-600">Founded</div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <Briefcase className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-2xl font-bold text-blue-900">{stats.employees}+</div>
        <div className="text-sm text-blue-600">Employees</div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <TrendingUp className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-2xl font-bold text-blue-900">{stats.yearsActive}+</div>
        <div className="text-sm text-blue-600">Years Active</div>
      </div>
    </div>
  );
}