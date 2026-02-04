import React, { useState } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, FileSearch } from 'lucide-react'
import Header from './components/Header'
import SearchSection from './components/SearchSection'
import RecommendationsGrid from './components/RecommendationsGrid'
import LoadingSpinner from './components/LoadingSpinner'
import Help from './components/Help'
import About from './components/About'

function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const [recommendations, setRecommendations] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = async (proposalText) => {
        if (!proposalText.trim()) {
            setError('Please enter a research proposal')
            return
        }

        setLoading(true)
        setError(null)
        setSearchQuery(proposalText)
        setHasSearched(true)
        // Clear previous recommendations while loading to show the spinner clearly
        setRecommendations([])

        try {
            const response = await axios.post('https://VihaMaxed-fyp-backend.hf.space/recommend', {
                proposal_text: proposalText
            })
            setRecommendations(response.data.recommendations || [])
        } catch (err) {
            setError('Failed to fetch recommendations. Please try again.')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#F5F5F7] font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Header currentPage={currentPage} onPageChange={setCurrentPage} />

            {currentPage === 'home' && (
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col gap-12">

                    {/* Search Section is always visible */}
                    <SearchSection onSearch={handleSearch} />

                    <AnimatePresence mode="wait">
                        {/* Error State */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-3xl mx-auto w-full"
                            >
                                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 shadow-sm">
                                    <AlertCircle size={20} className="shrink-0" />
                                    <p className="text-sm font-medium">{error}</p>
                                </div>
                            </motion.div>
                        )}

                        {/* Loading State */}
                        {loading && (
                            <LoadingSpinner overlay={true} />
                        )}

                        {/* Results State */}
                        {hasSearched && !loading && !error && recommendations.length > 0 && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <RecommendationsGrid recommendations={recommendations} />
                            </motion.div>
                        )}

                        {/* No Results State */}
                        {hasSearched && !loading && !error && recommendations.length === 0 && (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20 max-w-lg mx-auto"
                            >
                                <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <FileSearch className="text-gray-400 w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No Matches Found</h3>
                                <p className="text-gray-500">
                                    We couldn't find any supervisors matching your specific criteria. Try broadening your proposal or using different keywords.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            )}

            {currentPage === 'help' && <Help />}
            {currentPage === 'about' && <About />}
        </div>
    )
}

export default App