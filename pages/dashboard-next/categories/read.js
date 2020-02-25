import React from "react";
import DashSidebar from "../../../components/sharing-components/dash-sidebar";
import DashNavBar from "../../../components/sharing-components/dash-navbar";
import Admin from "../../../components/auth/admin";
import CategoryRead from "../../../components/dashboard/categories-read";

const Read = () => {
  let styles = {
    dashboard: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    dashboard_left: {
      maxWidth: "20%"
    },
    dashboard_right: {
      width: "100%"
    },
    post: {
      marginTop: "40px"
    }
  };
  return (
    <React.Fragment>
      <Admin>
        <div className="dashboard" style={styles.dashboard}>
          <div className="dashboard_left" style={styles.dashboard_left}>
            <DashSidebar />
          </div>
          <div className="dashboard_right" style={styles.dashboard_right}>
            <DashNavBar />
            <CategoryRead />
          </div>
        </div>
      </Admin>
    </React.Fragment>
  );
};

export default Read;
