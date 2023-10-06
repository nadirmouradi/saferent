"use client";
import { useRouter } from 'next/router';
import Loginpage from './../components/Login/Loginpage';
import React, { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';


function Login() {
  

  return (
    <div>
      <Loginpage/>
    </div>
  )
}

export default Login
