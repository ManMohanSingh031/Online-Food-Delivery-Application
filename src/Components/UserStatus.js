import { useEffect, useState } from 'react';

const UserStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return (
    <span className={`flex items-center text-lg font-bold ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
      {isOnline ? '🟢' : '🔴'} 
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
};

export default UserStatus;

