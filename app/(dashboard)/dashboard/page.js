"use client";  // Add this line at the top

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dashboardApi from "@/api/dashboardApi";

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalArticles: 0,
    totalCategories: 0,
    userGrowthRate: 0,
    articleGrowthRate: 0,
    categoryGrowthRate: 0
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await dashboardApi.getDataDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    };

    fetchDashboardData();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <main>
      <div className="container">
        <div className="page-header mt-20 text-center">
          <h2 className="page-header-title">Dashboard</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-4 col-lg-4 mb-3 mb-lg-5">
            <Link href="dashboard/users">
              <div className="card card-hover-shadow h-100 text-decoration-none">
                <div className="card-body text-center">
                  <h6 className="card-subtitle">Total Users</h6>
                  <h2 className="card-title text-inherit">{dashboardData.totalUsers}</h2>
                  <span className="badge bg-soft-success text-success">
                    <i className="bi bi-graph-up" /> {dashboardData.userGrowthRate}%
                  </span>
                  <span className="text-body fs-6 ms-1">from previous day</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-4 col-lg-4 mb-3 mb-lg-5">
            <Link href="dashboard/articles">
              <div className="card card-hover-shadow h-100 text-decoration-none">
                <div className="card-body text-center">
                  <h6 className="card-subtitle">Total Articles</h6>
                  <h2 className="card-title text-inherit">{dashboardData.totalArticles}</h2>
                  <span className="badge bg-soft-success text-success">
                    <i className="bi bi-graph-up" /> {dashboardData.articleGrowthRate}%
                  </span>
                  <span className="text-body fs-6 ms-1">from previous day</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-4 col-lg-4 mb-3 mb-lg-5">
            <Link href="dashboard/categories">
              <div className="card card-hover-shadow h-100 text-decoration-none">
                <div className="card-body text-center">
                  <h6 className="card-subtitle">Total Categories</h6>
                  <h2 className="card-title text-inherit">{dashboardData.totalCategories}</h2>
                  <span className="badge bg-soft-danger text-danger">
                    <i className="bi bi-graph-down" /> {dashboardData.categoryGrowthRate}%
                  </span>
                  <span className="text-body fs-6 ms-1">from previous day</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
  