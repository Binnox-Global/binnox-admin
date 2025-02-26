"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/lib/avatar";
import { useState } from "react";
import { EditIconSvg } from "@/components/icons";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'password' | 'notifications' | 'access'>('profile');

  return (
    <div className="h-full flex rounded-[15px]">
      {/* Left Section - Tabs */}
      <div className="w-[250px] border-r border-[#F0F1F3] p-6">
        <button
          onClick={() => setActiveTab('profile')}
          className={`w-full text-left px-4 h-11 rounded-[8px] mb-2 font-raleway text-base ${
            activeTab === 'profile' 
              ? 'bg-[#000000] text-white font-bold leading-[19.6px]' 
              : 'text-[#CACED8]'
          }`}
        >
          My Profile
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`w-full text-left px-4 h-11 rounded-[8px] mb-2 font-raleway text-base ${
            activeTab === 'password' 
              ? 'bg-[#000000] text-white font-bold leading-[19.6px]' 
              : 'text-[#CACED8]'
          }`}
        >
          Password & Security
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`w-full text-left px-4 h-11 rounded-[8px] mb-2 font-raleway text-base ${
            activeTab === 'notifications' 
              ? 'bg-[#000000] text-white font-bold leading-[19.6px]' 
              : 'text-[#CACED8]'
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab('access')}
          className={`w-full text-left px-4 h-11 rounded-[8px] mb-2 font-raleway text-base ${
            activeTab === 'access' 
              ? 'bg-[#000000] text-white font-bold leading-[19.6px]' 
              : 'text-[#CACED8]'
          }`}
        >
          Access
        </button>
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">
          {activeTab === 'profile' && 'My Profile'}
          {activeTab === 'password' && 'Password and Security'}
          {activeTab === 'notifications' && 'Notifications'}
          {activeTab === 'access' && 'Access'}
        </h1>
        
        {/* Profile Card - Show on all tabs */}
        <div className="border border-[#E0E2E7] rounded-[20px] p-[18px] mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-[60px] h-[60px]">
                <AvatarImage src="/images/avatars/mark.jpg" alt="Profile" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-medium">Mark Collins</h2>
                <div className="text-[#858D9D] mt-2">
                  <p>Access: Everything</p>
                  <p>Super Admin</p>
                </div>
              </div>
            </div>
            <button className="text-[#858D9D] hover:text-black flex items-center gap-5 border border-[#E0E2E7] rounded-[20px] px-5 py-2.5">
              Edit
              <EditIconSvg />
            </button>
          </div>
        </div>

        {/* Personal Information */}
        {activeTab === 'profile' && (
        <div>
          <h3 className="text-lg font-medium mb-6">Personal Information</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Mark"
                  className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">Surname</label>
                <input
                  type="text"
                  placeholder="Collins"
                  className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_120px_1fr] gap-6">
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Markcollins@gmail.com"
                  className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">Code</label>
                <select className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black">
                  <option>234</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="9120000000"
                  className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black"
                />
              </div>
            </div>
            <div>
              <label className="block text-[13px] text-[#858D9D] mb-2">Access Level</label>
              <select className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black">
                <option>Super Admin</option>
              </select>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-6 mt-8">Additional Information</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">State</label>
                <select className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black">
                  <option>FCT</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">City</label>
                <select className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black">
                  <option>Durumi</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[13px] text-[#858D9D] mb-2">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black"
              />
            </div>
          </div>
        </div>
        )}

{activeTab === 'password' && (
          <div>
            <h3 className="text-lg font-medium mb-6">Password and Security</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••••"
                  className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••••"
                  className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="••••••••••"
                  className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black"
                />
              </div>
              <button className="bg-black text-white px-6 py-2.5 rounded-[5px]">
                Save changes
              </button>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div>
            <h3 className="text-lg font-medium mb-6">Notification Settings</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">General Notification</h4>
                  <p className="text-sm text-[#858D9D]">Receive notifications about your account activity</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#E0E2E7] rounded-full peer peer-checked:bg-[#F45309] peer-focus:ring-2 peer-focus:ring-[#F45309]  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Sound</h4>
                  <p className="text-sm text-[#858D9D]">Play a sound for incoming notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#E0E2E7] rounded-full peer peer-checked:bg-[#F45309] peer-focus:ring-2 peer-focus:ring-[#F45309] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Vibrate</h4>
                  <p className="text-sm text-[#858D9D]">Vibrate when receiving notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#E0E2E7] rounded-full peer peer-checked:bg-[#F45309] peer-focus:ring-2 peer-focus:ring-[#F45309]  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'access' && (
          <div>
            <h3 className="text-lg font-medium mb-6">Access Management</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">Role</label>
                <select className="w-full px-4 py-2 rounded-[5px] border border-[#E0E2E7] focus:outline-none focus:border-black">
                  <option>Super Admin</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>User</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] text-[#858D9D] mb-2">Permissions</label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-black rounded border-gray-300 focus:ring-black" />
                    <label className="ml-2 text-sm">View all records</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-black rounded border-gray-300 focus:ring-black" />
                    <label className="ml-2 text-sm">Edit records</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-black rounded border-gray-300 focus:ring-black" />
                    <label className="ml-2 text-sm">Delete records</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-black rounded border-gray-300 focus:ring-black" />
                    <label className="ml-2 text-sm">Manage users</label>
                  </div>
                </div>
              </div>
              <button className="bg-black text-white px-6 py-2.5 rounded-[5px]">
                Update access
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}