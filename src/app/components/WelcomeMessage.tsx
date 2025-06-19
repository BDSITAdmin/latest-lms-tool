// 'use client';

// import { useAuth } from '@/context/AuthContext';



// if (!justLoggedIn) return null;

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setJustLoggedIn(false);
//   }, 4000);
//   return () => clearTimeout(timer);
// }, []);


// export default function WelcomeMessage() {
//   const { user } = useAuth();
//   if (!user) return null;


//   return (
//     <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 text-center">
//       Welcome, {user.first_name || user.email}!
//     </div>
//   );
// }
