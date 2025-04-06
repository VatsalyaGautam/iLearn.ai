import React from 'react';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="h-auto lg:min-h-[calc(100vh - 64px)] pt-16 bg-gray-950 flex items-center justify-center p-4">
      {/* Main container with proper sizing and centering */}
      <div className="w-full max-w-4xl flex flex-col lg:flex-row shadow-xl rounded-xl overflow-hidden">
        
        {/* Left side - Info panel */}
        <div className="w-full lg:w-1/2 bg-blue-900 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">
              Create Account
            </h1>
            
            <p className="text-purple-200">
              Join our platform to unlock exclusive features and personalized content.
            </p>

            <div className="pt-4 hidden lg:block">
              <p className="text-sm text-blue-300">
                Already have an account? Sign in to access your dashboard.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Auth component with proper containment */}
        <div className="w-full lg:w-1/2 bg-gray-900 p-8">
          {/* Clerk container with specific width constraints */}
          <div className="w-full justify-center flex items-center">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}