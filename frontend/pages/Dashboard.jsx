import { useSession, signOut } from "next-auth/react";
import Sidebar from "../components/Dashboard/Sidebar";
import MenuDashboard from "../components/Dashboard/MenuDashboard";
import FilterDashboard from "../components/Dashboard/FilterDashboard";
import ListProduct from "../components/Dashboard/ProductDashboard/ListProduct";
import { getSession } from 'next-auth/react';
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await router.push('/login');
    signOut();
  };
  const [categories , setCategories] = useState();

   

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const decodedToken = jwt.decode(session.user.accessToken);
        const userEmail = decodedToken?.email;
        const response = await axios.get(`http://localhost:8000/api/user?email=${userEmail}`);
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };
    

    if (session) {
      fetchUserData();
    }
  }, [router, session]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  console.log(user);

  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border">
        <MenuDashboard handleLogout={handleLogout} user={user} />
        <div>
          <FilterDashboard user={user} />
        </div>
        <div>
          <ListProduct categories={categories} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  
  return {
    props: {},
  };
}

export default Dashboard;
