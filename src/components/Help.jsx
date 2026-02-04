import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Lightbulb } from 'lucide-react'

export default function Help() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#F5F5F7] py-12 sm:py-20"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Help & Guide</h1>
                        <p className="text-lg text-gray-600">Learn how to get the best supervisor recommendations</p>
                    </motion.div>
                </div>

                {/* How to Use Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 sm:p-12 mb-8 shadow-sm border border-gray-100"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <CheckCircle className="text-blue-600" size={24} />
                        </div>
                        How to Use
                    </h2>

                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-6 py-2">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Enter Your Project Idea or Abstract</h3>
                            <p className="text-gray-600">
                                Paste your final-year project abstract or a clear description of your research problem, methods, and key technologies. The more detailed your proposal, the better the recommendations.
                            </p>
                        </div>

                        <div className="border-l-4 border-indigo-500 pl-6 py-2">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Get Supervisor Recommendations</h3>
                            <p className="text-gray-600">
                                The system analyzes your proposal using advanced NLP techniques and recommends supervisors whose research expertise best aligns with your topic.
                            </p>
                        </div>

                        <div className="border-l-4 border-violet-500 pl-6 py-2">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Understand the Recommendation</h3>
                            <p className="text-gray-600 mb-3">Each recommendation includes:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                                <li><strong>Matching Research Domains:</strong> Areas where supervisor expertise aligns with your proposal</li>
                                <li><strong>Suitability Score:</strong> A numerical indicator of how well-matched the supervisor is</li>
                                <li><strong>Explanation:</strong> Why the supervisor is recommended for your project</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Tips Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-3xl p-8 sm:p-12 mb-8 shadow-sm border border-gray-100"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                            <Lightbulb className="text-amber-600" size={24} />
                        </div>
                        Tips for Better Results
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <p className="text-gray-700 font-medium">
                                ✓ Use a clear and complete abstract rather than a short title
                            </p>
                        </div>
                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                            <p className="text-gray-700 font-medium">
                                ✓ Mention key research areas (e.g., Machine Learning, NLP, Computer Vision)
                            </p>
                        </div>
                        <div className="p-4 bg-violet-50 rounded-xl border border-violet-100">
                            <p className="text-gray-700 font-medium">
                                ✓ Focus on what you plan to do, not only the motivation
                            </p>
                        </div>
                        <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                            <p className="text-gray-700 font-medium">
                                ✓ Include specific technologies or methodologies you'll use
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* FAQ Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                            <AlertCircle className="text-rose-600" size={24} />
                        </div>
                        Common Questions
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">How accurate are the recommendations?</h3>
                            <p className="text-gray-600">
                                Our system uses research-domain analysis and NLP to ensure recommendations are based on measurable academic suitability, not random matching. The accuracy depends on how detailed and specific your proposal is.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Can I trust these recommendations?</h3>
                            <p className="text-gray-600">
                                Yes! The system follows a research-driven, explainable scoring approach. Each recommendation includes transparent explanations of why that supervisor is matched to your project, allowing you to make informed decisions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">What if no supervisors match my project?</h3>
                            <p className="text-gray-600">
                                Try rewording your proposal with more specific keywords or research domains. The system works best with clear, detailed project descriptions that highlight your research focus and methodologies.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Can I contact the supervisor directly?</h3>
                            <p className="text-gray-600">
                                This system is for recommendation purposes. Please follow your institution's official procedures for contacting supervisors and requesting them for your project.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    )
}
