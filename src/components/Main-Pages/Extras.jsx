import React, { useState, useEffect } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { PageHeader } from "../common/PageHeader";
import { animations } from '@/lib/animations';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/config/api';
import { useLoadingContext } from '@/context/LoadingContext';

export const ExtrasPage = () => {
    const { registerLoader, markLoaderComplete } = useLoadingContext();

    // Detect dark mode from DOM class
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        // checks for dark mode class
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ['githubStats'],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/api/github`);
            if (!response.ok) {
                throw new Error('Failed to fetch stats');
            }
            const json = await response.json();

            // The API returns { total: { "lastYear": 123, ... }, contributions: [...] }
            if (json.contributions) {
                return json;
            } else {
                throw new Error('Invalid data format');
            }
        },
        staleTime: Infinity, // Fetch once and cache for the entire session
    });

    // Register this loader on mount and mark complete when data arrives
    useEffect(() => {
        registerLoader('github');
    }, [registerLoader]);

    useEffect(() => {
        if (isSuccess || error) {
            markLoaderComplete('github');
        }
    }, [isSuccess, error, markLoaderComplete]);

    // Red for light mode, Yellow for dark mode
    const explicitTheme = {
        light: ['#ebedf0', '#ffcdd2', '#ef9a9a', '#e53935', '#b71c1c'],
        dark: ['#2d2d2d', '#fff9c4', '#fff176', '#fdd835', '#f9a825'],
    };

    return (
        <div className="min-h-screen flex flex-col w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-6xl mx-auto"
            >
                <div className="mb-12">
                    <PageHeader val={'04.'} subheading={"Beyond Code"} mainHeading={"My Activity"} />
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-64 gap-4">
                        <div className="w-12 h-12 border-t-2 border-b-2 border-primary rounded-full animate-spin"></div>
                        <p className="text-gray-500 animate-pulse">Loading GitHub stats...</p>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 p-8 border border-red-500/20 rounded-xl bg-red-500/5">
                        <p>Failed to load GitHub activity: {error.message}</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-8">
                        <div className="bg-white dark:bg-[#0d1117] p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">GitHub Activity</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Total: <span className="font-mono font-bold text-black dark:text-white">{data?.total?.lastYear || 0}</span> contributions in the last year
                                    </p>
                                </div>
                                <div className="text-sm text-gray-400">
                                    All contributions
                                </div>
                            </div>

                            <div className="flex justify-center w-full">
                                {data?.contributions && data.contributions.length > 0 ? (
                                    <>
                                        <ActivityCalendar
                                            data={data.contributions}
                                            theme={explicitTheme} // Use the robust theme
                                            labels={{
                                                totalCount: '{{count}} contributions in {{year}}',
                                            }}
                                            colorScheme={isDark ? 'dark' : 'light'}
                                            showWeekdayLabels
                                            blockSize={13}
                                            blockMargin={4}
                                            fontSize={14}
                                        />
                                        <ReactTooltip id="github-tooltip" />
                                    </>
                                ) : (
                                    <div className="text-gray-500 dark:text-gray-400 py-10 text-center italic w-full">
                                        No contribution data available to display.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};
