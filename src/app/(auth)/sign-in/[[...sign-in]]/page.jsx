import React from 'react';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="h-auto lg:min-h-[calc(100vh - 64px)] pt-20 bg-gray-950 flex items-center justify-center p-4">
      {/* Main container with proper sizing and centering */}
      <div className="w-full max-w-4xl flex flex-col lg:flex-row shadow-xl rounded-xl overflow-hidden">
        
        {/* Left side - Info panel */}
        <div className="w-full lg:w-1/2 bg-blue-900 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">
              Welcome Back
            </h1>
            
            <p className="text-purple-200">
              Sign in to continue your journey and access your account.
            </p>

            <div className=" hidden  md:block">
              <p className="text-sm text-blue-300">
                Don't have an account? Contact your administrator to get started.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Auth component with proper containment */}
        <div className="w-full lg:w-1/2 bg-gray-900 p-8">
          {/* Clerk container with specific width constraints */}
          <div className="w-full justify-center flex items-center">
            <SignIn/>
          </div>
        </div>
      </div>
    </div>
  );
}