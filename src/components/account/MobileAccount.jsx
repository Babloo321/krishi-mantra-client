import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Settings } from 'lucide-react';

function MobileAccount() {
  const { token, user } = useAuth();
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4 bg-gray-200 min-h-screen py-15 relative overflow-hidden">
      {token ? (
        <div className="relative space-y-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-2 py-4 shadow-md bg-white">
            <div className="flex items-center gap-2">
              <img src={user.picture} alt="profile" className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-semibold">{user.userName}</p>
              </div>
            </div>
            <button onClick={() => setOpenSettings(true)}>
              <Settings size={30} />
            </button>
          </div>

          {/* Settings Panel (Slide In) */}
          <div className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 ease-in-out ${openSettings ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Settings</h2>
              <button onClick={() => setOpenSettings(false)} className="text-gray-600 text-xl">
                ✖
              </button>
            </div>
            {/* Settings Content */}
            <div className="space-y-4">
              <button className="btn btn-outline w-full">Select Language</button>
              <button className="btn btn-outline w-full">Notification Settings</button>
              <button className="btn btn-outline w-full">Help Center</button>
            </div>
          </div>

          {/* Background Overlay */}
          {openSettings && (
            <div 
              onClick={() => setOpenSettings(false)}
              className="fixed inset-0 bg-black opacity-40 z-40 transition-opacity"
            />
          )}

          {/* Sections Start */}
          <div className="p-4 rounded-lg bg-base-200 flex items-center justify-between">
            <span className="font-medium">Credit Score</span>
            <span className="text-sm text-gray-500">Check Now</span>
          </div>

          <div className="p-4 rounded-lg bg-base-200 flex items-center justify-between">
            <span className="font-medium">Notifications</span>
            <span className="badge badge-info">3 New</span>
          </div>

          <div className="p-4 rounded-lg bg-base-200 flex items-center justify-between">
            <span className="font-medium">Sponsor</span>
            <img src="https://via.placeholder.com/40" alt="Sponsor" className="w-10 h-10 rounded-full" />
          </div>

          <div className="p-4 rounded-lg bg-base-200">
            <h2 className="font-semibold mb-2">Recently Viewed Stores</h2>
            <div className="flex space-x-3 overflow-x-auto">
              <div className="w-24 flex-shrink-0">
                <img src="https://via.placeholder.com/80" alt="Product" className="rounded-lg" />
                <p className="text-xs text-center mt-1">Store 1</p>
              </div>
              <div className="w-24 flex-shrink-0">
                <img src="https://via.placeholder.com/80" alt="Product" className="rounded-lg" />
                <p className="text-xs text-center mt-1">Store 2</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-base-200 space-y-2">
            <h2 className="font-semibold mb-2">Account Settings</h2>
            <button className="btn btn-outline btn-sm w-full">Select Language</button>
            <button className="btn btn-outline btn-sm w-full">Notification Settings</button>
            <button className="btn btn-outline btn-sm w-full">Help Center</button>
          </div>

          <div className="p-4 rounded-lg bg-base-200 space-y-2">
            <h2 className="font-semibold mb-2">Feedback & Information</h2>
            <div className="text-sm text-gray-600">Terms, Policies and Licenses</div>
            <div className="text-sm text-gray-600">Browse FAQs</div>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">Account</h1>
          <span className="block text-sm text-gray-500">Login to get exclusive offers</span>
          <button className="btn btn-primary btn-sm mt-2">Login</button>
        </div>
      )}
    </div>
  );
}

export default MobileAccount;
