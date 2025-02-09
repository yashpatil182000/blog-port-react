import { useEffect, useState } from "react";
import { account } from "../Appwrite/appwriteConfig";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = await account.get();
        if (user.email === import.meta.env.VITE_ADMIN_EMAIL) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);

  if (isAdmin === null) return <p>Loading...</p>;

  return isAdmin ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
