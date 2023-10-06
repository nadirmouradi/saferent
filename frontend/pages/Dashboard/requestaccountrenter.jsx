import React from 'react'
import RequestAccount from './../../components/RequestAccount/RequestAccount';
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import jwt from "jsonwebtoken";
import { useState, useEffect } from "react";

export default function requestaccountrenter() {
  const [user, setUser] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();
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
  console.log(user)
  return (
    <div>
      <RequestAccount user={user} />
    </div>
  )
}
