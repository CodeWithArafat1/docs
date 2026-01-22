"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export default function Footer() {
  const pathname = usePathname(); 


  if (pathname && pathname.startsWith('/docs')) {
    return null;
  }


  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
      
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black dark:text-white">BrandName.</h2>
            <p className="text-sm leading-relaxed">
              আমরা সেরা ডিজিটাল অভিজ্ঞতা প্রদান করি। আপনার ব্যবসার গ্রোথ এবং সাফল্যের জন্য আমরা সবসময় পাশে আছি।
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-600 transition"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-pink-600 transition"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-blue-700 transition"><Linkedin size={20} /></Link>
            </div>
          </div>

       
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-4">কোম্পানি</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-600 transition">আমাদের সম্পর্কে</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">সার্ভিসসমূহ</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">ক্যারিয়ার</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">ব্লগ</Link></li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-4">সাপোর্ট</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-600 transition">যোগাযোগ করুন</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">টার্মস & কন্ডিশন</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition">গোপনীয়তা নীতি</Link></li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-4">নিউজলেটার</h3>
            <p className="text-sm mb-4">আমাদের নতুন আপডেট পেতে সাবস্ক্রাইব করুন.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল দিন" 
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition flex items-center justify-center gap-2">
                সাবস্ক্রাইব <Send size={16} />
              </button>
            </form>
          </div>
        </div>

      
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BrandName. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}