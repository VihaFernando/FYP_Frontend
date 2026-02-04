import React from 'react'
import { motion } from 'framer-motion'
import { Star, Target, Shield, Lightbulb } from 'lucide-react'

export default function About() {
    const features = [
        {
            icon: Target,
            title: "Research-Domain Based Matching",
            description: "Analyzes supervisor expertise and aligns it with your project's research domains"
        },
        {
            icon: Lightbulb,
            title: "Transparent Scoring",
            description: "Explainable suitability scores that show exactly why supervisors are recommended"
        },
        {
            icon: Star,
            title: "Activity-Aware",
            description: "Considers recent research activity and declared supervisor interests"
        },
        {
            icon: Shield,
            title: "Fair & Unbiased",
            description: "Research-driven recommendations designed to be fair to both students and supervisors"
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#F5F5F7] py-12 sm:py-20"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About SupervisorMatch</h1>
                    <p className="text-lg text-gray-600">
                        Connecting students with the right supervisors using research-driven AI
                    </p>
                </motion.div>

                {/* Main Description */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 sm:p-12 mb-8 shadow-sm border border-gray-100"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        SupervisorMatch is designed to assist students in identifying suitable supervisors for final-year research projects in a fair and transparent manner. Unlike traditional manual selection, our system leverages institutional research data and advanced Natural Language Processing techniques to analyze student proposals and align them with supervisors' research expertise.
                    </p>
                </motion.section>

                {/* How It Works */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-3xl p-8 sm:p-12 mb-8 shadow-sm border border-gray-100"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Our system analyzes the following data points to generate recommendations:
                    </p>
                    <ul className="space-y-3 ml-4">
                        <li className="flex gap-3">
                            <span className="text-blue-600 font-bold">•</span>
                            <span className="text-gray-600"><strong>Publication Domains:</strong> The research areas and topics supervisors have published in</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-600 font-bold">•</span>
                            <span className="text-gray-600"><strong>Research Activity Recency:</strong> How recently the supervisor has been active in their field</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-600 font-bold">•</span>
                            <span className="text-gray-600"><strong>Declared Interests:</strong> Areas the supervisor has explicitly stated interest in supervising</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-600 font-bold">•</span>
                            <span className="text-gray-600"><strong>Your Proposal:</strong> Your project's research domains, methodologies, and focus areas</span>
                        </li>
                    </ul>
                </motion.section>

                {/* Key Features */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="text-blue-600" size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.section>

                {/* Ethical Note */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 border border-blue-100"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Shield size={28} className="text-blue-600" />
                        Ethical Principles
                    </h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            <strong>Transparency:</strong> Supervisor names are displayed for interpretability only. They do not influence the recommendation logic or scoring process.
                        </p>
                        <p>
                            <strong>Fairness:</strong> Our system is designed to be fair to both students and supervisors, ensuring recommendations are based on academic suitability rather than bias.
                        </p>
                        <p>
                            <strong>Explainability:</strong> Every recommendation comes with clear explanations, allowing students to understand why a supervisor is recommended for their project.
                        </p>
                    </div>
                </motion.section>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12 text-gray-600 text-sm"
                >
                    <p>
                        SupervisorMatch is a research-driven system designed to support fair and transparent supervisor allocation in academic institutions.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}
