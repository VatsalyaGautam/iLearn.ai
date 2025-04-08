"use client";
import React from "react";
import { House, Layers, LogOut, ShieldCheck } from 'lucide-react';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { useClerk } from "@clerk/nextjs";

function Sidebar() {
  const { signOut } = useClerk();
  const router = useRouter();
  
  // Menu items without logout
  const Menu = [
    { id: 1, name: 'Home', icon: <House/>, path: '/dashboard' },
  ];
  
  const path = usePathname();
  
  // Handle sign out
  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut();
    router.push('/'); // Redirect to home page after signing out
  };
  
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md bg-blue-50 text-gray-700">
      <Link href="/dashboard">
        <Image
          src="/main/igebraLogo.png"
          width={160}
          height={47.91}
          alt="logo"
        />
      </Link>
      <hr className="mt-2 mb-8 border-gray-200"/>
      <ul>
        {Menu.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className={`flex items-center gap-2 p-3 mb-3 cursor-pointer rounded-lg transition-colors
              ${item.path == path
                ? 'bg-blue-200 text-blue-800'
                : 'hover:bg-blue-100 text-gray-700 hover:text-blue-800'}`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2 className="font-medium">{item.name}</h2>
            </div>
          </Link>
        ))}
        
        {/* Logout button with onClick handler */}
        <div 
          onClick={handleSignOut}
          className="flex items-center gap-2 p-3 mb-3 cursor-pointer rounded-lg transition-colors hover:bg-blue-100 text-gray-700 hover:text-blue-800"
        >
          <div className="text-2xl"><LogOut /></div>
          <h2 className="font-medium">Logout</h2>
        </div>
      </ul>
      
      <div className="absolute bottom-10 w-[80%] flex flex-col gap-2">
        <Progress value={33} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
        <h2>3 Out of 5 Course created</h2>
        <h2 className="text-xs text-gray-500">Upgrade your plan for unlimited course generation</h2>
      </div>
    </div>
  );
}

export default Sidebar;