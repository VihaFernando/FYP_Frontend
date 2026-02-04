import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function LoadingSpinner({ overlay = false }) {
    
    // The core spinner content
    const SpinnerContent = () => (
        <div className="flex flex-col items-center justify-center p-6 sm:p-8">
            <div className="relative w-20 h-20 mb-6">
                {/* Background Ring */}
                <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
                
                {/* Spinning Active Ring */}
                <motion.div
                    className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-l-blue-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Pulsing Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Sparkles className="w-8 h-8 text-blue-600 fill-blue-50" />
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
            >
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Analyzing Research Profile
                </h3>
                <p className="text-sm text-gray-500 font-medium animate-pulse">
                    Finding the perfect supervisor match...
                </p>
            </motion.div>
        </div>
    )

    // If 'overlay' prop is true, return the fixed full-screen backdrop version
    if (overlay) {
        return (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md"
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-3xl shadow-2xl shadow-blue-900/20 border border-white/50 min-w-[300px]"
                >
                    <SpinnerContent />
                </motion.div>
            </motion.div>
        )
    }

    // Otherwise return the inline version
    return <SpinnerContent />
}