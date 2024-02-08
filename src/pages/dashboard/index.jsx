import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
  console.log("Dashboard component");
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
