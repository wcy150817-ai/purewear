// js/tools-data.js - Complete 14 Cleaning Business Calculators & Utilities

const TOOLS_DATA = [
    {
        id: 'cleaning-quote-calculator',
        title: 'Cleaning Quote Calculator',
        icon: '🧹',
        desc: 'Estimate residential and commercial cleaning prices with 2026 square footage rates, labor costs, and profit margins.',
        category: 'pricing',
        tag: 'Flagship',
        featured: true, 
        url: '/tools/cleaning-quote-calculator/'
    },
    {
        id: 'dilution-calculator',
        title: 'Dilution Ratio Calculator',
        icon: '🧪',
        desc: 'Calculate precise chemical-to-water dilution ratios (1:10, 1:32, 1:128) across gallons, ounces, and liters.',
        category: 'safety',
        tag: 'Flagship',
        featured: true,
        url: '/tools/dilution-calculator/'
    },
    {
        id: 'schedule-generator',
        title: 'Weekly Shift Schedule Generator',
        icon: '📅',
        desc: 'Build balanced weekly staff schedules, track employee hours, and prevent FLSA 40-hour overtime penalties.',
        category: 'ops',
        tag: 'Flagship',
        featured: true,
        url: '/tools/schedule-generator/'
    },
    {
        id: 'hourly-pay-calculator',
        title: 'Hourly Pay & Wage Calculator',
        icon: '💰',
        desc: 'Calculate regular wages, 1.5x overtime rates, and gross weekly earnings for cleaning technicians.',
        category: 'pricing',
        tag: 'Finance',
        featured: true,
        url: '/tools/hourly-pay-calculator/'
    },
    {
        id: 'tip-calculator',
        title: 'Cleaning Tip Split Calculator',
        icon: '💵',
        desc: 'Calculate fair customer gratuity splits among 1 to 6 crew members by hours worked or equal shares.',
        category: 'pricing',
        tag: 'Finance',
        featured: true,
        url: '/tools/tip-calculator/'
    },
    {
        id: 'time-estimator',
        title: 'Cleaning Time Estimator',
        icon: '⏱️',
        desc: 'Predict total cleaning hours based on square footage, room count, and ISSA standard production rates.',
        category: 'ops',
        tag: 'Operations',
        featured: true,
        url: '/tools/time-estimator/'
    },
    {
        id: 'chemical-safety-checker',
        title: 'Chemical Safety & Incompatibility Checker',
        icon: '☣️',
        desc: 'Verify if two cleaning solutions can be safely mixed or if they generate toxic chlorine/chloramine fumes.',
        category: 'safety',
        tag: 'Safety',
        featured: true,
        url: '/tools/chemical-safety-checker/'
    },
    {
        id: 'mixing-guide',
        title: 'Chemical Mixing & Ratio Guide',
        icon: '🧴',
        desc: 'Ready-to-use chemical mixing reference chart with standard dilution ratios for 15+ cleaning chemicals.',
        category: 'safety',
        tag: 'Safety',
        featured: false,
        url: '/tools/mixing-guide/'
    },
    {
        id: 'cleaning-checklist',
        title: 'Cleaning Checklist Generator',
        icon: '☑️',
        desc: 'Generate customized, room-by-room printable cleaning checklists for standard, deep, and move-out cleans.',
        category: 'ops',
        tag: 'Operations',
        featured: true,
        url: '/tools/cleaning-checklist/'
    },
    {
        id: 'service-agreement',
        title: 'Service Agreement & Contract Generator',
        icon: '📄',
        desc: 'Draft customizable, legal cleaning service contracts and client terms of service in seconds.',
        category: 'ops',
        tag: 'Management',
        featured: false,
        url: '/tools/service-agreement/'
    },
    {
        id: 'inventory-tracker',
        title: 'Cleaning Supply Inventory Tracker',
        icon: '📦',
        desc: 'Monitor chemical usage, microfiber supplies, and equipment levels with automatic reorder triggers.',
        category: 'ops',
        tag: 'Management',
        featured: false,
        url: '/tools/inventory-tracker/'
    },
    {
        id: 'performance-review',
        title: 'Staff Performance Evaluation Generator',
        icon: '⭐',
        desc: 'Construct objective, standardized performance reviews and scorecards for cleaners and team leads.',
        category: 'ops',
        tag: 'Management',
        featured: false,
        url: '/tools/performance-review/'
    },
    {
        id: 'expense-tracker',
        title: 'Income & Expense Ledger',
        icon: '📊',
        desc: 'Track recurring commercial client revenue, fuel costs, and supply overhead with net margin reports.',
        category: 'pricing',
        tag: 'Finance',
        featured: false,
        url: '/tools/expense-tracker/'
    },
    {
        id: 'message-template-generator',
        title: 'Client SMS & Email Template Generator',
        icon: '💬',
        desc: 'Create professional appointment confirmations, reminder messages, and late-payment notices.',
        category: 'ops',
        tag: 'Operations',
        featured: false,
        url: '/tools/message-template-generator/'
    }
];

if (typeof window !== 'undefined') {
    window.TOOLS_DATA = TOOLS_DATA;
}
