import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import PhoneNumber from "../../components/PhoneNumber";

const Dashboard = () => {
  const [extraData, setExtraData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log("Dashboard component");
  const { currentUser } = useAuth();

  console.log(currentUser);

  useEffect(() => {
    setIsLoading(true);

    const fetchUserData = async () => {
      // Fetch all user data
      const dataRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(dataRef);

      console.log(docSnap);

      if (docSnap.exists()) {
        setExtraData(docSnap.data());
      }

      setIsLoading(false);
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div>
      {isLoading ? (
        <p>Loading... </p>
      ) : (
        <div>
          <h1>Dashboard</h1>
          <p>Email: {currentUser.email}</p>
          {extraData.phone ? (
            <p>Phone: {extraData.phone}</p>
          ) : (
            <PhoneNumber
              user={currentUser}
              setIsPhoneAvailable={setExtraData}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
