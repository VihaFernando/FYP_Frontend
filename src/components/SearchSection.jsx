import React, { useState } from 'react'
import { Search, X, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SearchSection({ onSearch }) {
    const [inputValue, setInputValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const handleInputChange = (e) => {
        const text = e.target.value
        setInputValue(text)
    }

    const normalizeText = (text) => {
        // Remove all special characters except spaces, keep only letters, numbers, and spaces
        let normalized = text.replace(/[^a-zA-Z0-9\s]/g, '')
        // Collapse multiple spaces into single space
        normalized = normalized.replace(/\s+/g, ' ')
        // Trim whitespace from start and end
        normalized = normalized.trim()
        return normalized
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const normalizedInput = normalizeText(inputValue)
        onSearch(normalizedInput)
    }

    const maxChars = 5000

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl mx-auto px-4 sm:px-6"
        >
            <div className="text-center mb-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-2">
                    <Sparkles size={12} />
                    <span>AI Powered Matching</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                    Find Your Perfect <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                        Research Supervisor
                    </span>
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    Enter your research proposal to receive supervisor recommendations based on domain expertise, recent research, and academic suitability.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="relative group">
                <div
                    className={`
                        relative bg-white rounded-3xl transition-all duration-300 ease-out
                        ${isFocused
                            ? 'shadow-2xl shadow-blue-900/10 ring-4 ring-blue-500/10 scale-[1.01]'
                            : 'shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60'
                        }
                    `}
                >
                    <textarea
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Enter your research proposal to receive supervisor recommendations based on domain expertise, recent research, and academic suitability."
                        className="w-full px-6 py-6 text-lg text-gray-800 bg-transparent rounded-3xl focus:outline-none resize-none placeholder:text-gray-300 min-h-[180px]"
                        maxLength={maxChars}
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-6">
                    {inputValue && (
                        <motion.button
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            type="button"
                            onClick={() => setInputValue('')}
                            className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all active:scale-95"
                        >
                            Clear Text
                        </motion.button>
                    )}

                    <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="
                            w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-black text-white rounded-2xl 
                            font-semibold shadow-lg shadow-gray-900/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
                            transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn
                        "
                    >
                        <Search size={18} className="group-hover/btn:scale-110 transition-transform" />
                        <span>Search Supervisors</span>
                    </button>
                </div>
            </form>
        </motion.div>
    )
}