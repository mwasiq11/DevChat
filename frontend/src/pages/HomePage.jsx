import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import toast from "react-hot-toast";

const HomePage=()=> {
  return (
    <>
      <h1 >Welcome to App</h1>
      <button className="btn btn-secondary" onClick={()=> toast.success("this is success toast")}>Click me</button>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignedOut />
      </SignedIn>
      <UserButton />
    </>
  );
}

export default HomePage;
