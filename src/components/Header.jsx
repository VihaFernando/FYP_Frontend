import React from 'react'
import { GraduationCap, HelpCircle, Info } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 supports-[backdrop-filter]:bg-white/60"
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <GraduationCap className="text-white w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold text-gray-900 tracking-tight leading-none">
                                SupervisorMatch
                            </h1>
                            <p className="text-xs text-gray-500 font-medium hidden sm:block mt-0.5">
                                Research Recommender
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            <Info size={16} />
                            <span className="hidden sm:inline">About</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            <HelpCircle size={16} />
                            <span className="hidden sm:inline">Help</span>
                        </a>
                    </div>
                </div>
            </nav>
        </motion.header>
    )
}