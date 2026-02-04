import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Trophy, BarChart2 } from 'lucide-react'

// Animation variants for staggered list
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
}

export default function RecommendationsGrid({ recommendations }) {
    if (!recommendations || recommendations.length === 0) return null;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Trophy className="text-yellow-500" size={20} />
                Top Matches
            </h3>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {recommendations.map((supervisor, index) => (
                    <RecommendationCard key={index} supervisor={supervisor} rank={index + 1} />
                ))}
            </motion.div>
        </div>
    )
}

function RecommendationCard({ supervisor, rank }) {
    // Extract data
    const supervisorId = supervisor.supervisor_id || 'Unknown'
    const score = supervisor.score || 0
    const matchedDomains = supervisor.matched_domains || []
    const reason = supervisor.reason || ''

    // Generate deterministic color (Logic preserved)
    const colors = [
        'from-blue-500 to-blue-600',
        'from-purple-500 to-purple-600',
        'from-pink-500 to-pink-600',
        'from-emerald-500 to-emerald-600',
        'from-orange-500 to-orange-600',
        'from-indigo-500 to-indigo-600',
    ]
    // Using a subtle background tint based on the color
    const bgTints = [
        'bg-blue-50 text-blue-700 border-blue-100',
        'bg-purple-50 text-purple-700 border-purple-100',
        'bg-pink-50 text-pink-700 border-pink-100',
        'bg-emerald-50 text-emerald-700 border-emerald-100',
        'bg-orange-50 text-orange-700 border-orange-100',
        'bg-indigo-50 text-indigo-700 border-indigo-100',
    ]

    const colorIndex = supervisorId.charCodeAt(supervisorId.length - 1) % colors.length
    const gradient = colors[colorIndex]
    const badgeStyle = bgTints[colorIndex]

    // Display actual score from backend (not normalized to percentage)
    const displayScore = score.toFixed(2)

    return (
        <motion.div variants={item} className="group h-full">
            <div className="h-full bg-white rounded-[2rem] p-1 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative p-6 flex-grow flex flex-col">
                    {/* Rank Badge */}
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-gray-300/50`}>
                            {rank}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeStyle}`}>
                            Match
                        </div>
                    </div>

                    {/* ID & Score */}
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-tight">
                            {supervisorId}
                        </h4>

                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-medium text-gray-400">Match Score</span>
                                <span className="text-2xl font-bold text-gray-900">{displayScore}</span>
                            </div>
                            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min((score / 1.5) * 100, 100)}%` }}
                                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                    className={`h-full bg-gradient-to-r ${gradient}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Domains */}
                    <div className="mb-6">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Identified Areas</p>
                        <div className="flex flex-wrap gap-2">
                            {matchedDomains.slice(0, 3).map((domain, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100"
                                >
                                    {domain}
                                </span>
                            ))}
                            {matchedDomains.length > 3 && (
                                <span className="px-3 py-1 bg-gray-50 text-gray-400 text-xs font-medium rounded-lg border border-gray-100">
                                    +{matchedDomains.length - 3}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Reason */}
                    <div className="mt-auto">
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                            {reason}
                        </p>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-2 mt-2">
                    <button className="w-full py-4 rounded-3xl bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold text-sm transition-colors flex items-center justify-center gap-2 group/btn">
                        View Full Profile
                        <ArrowRight size={16} className="text-gray-400 group-hover/btn:text-gray-900 group-hover/btn:translate-x-1 transition-all" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}