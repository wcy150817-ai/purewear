// js/tools-data.js - Complete 14 Cleaning Business Calculators & Utilities

const TOOLS_DATA = [
    {
        id: "house-cleaning-estimate",
        title: "House Cleaning Estimate Calculator",
        icon: "🏠",
        desc: "Estimate residential cleaning prices with 2026 square footage rates, bedrooms, and deep clean options.",
        category: "pricing",
        tag: "New",
        featured: true,
        url: "/tools/house-cleaning-estimate/"
    },
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
        id: 'commercial-bidding-calculator',
        title: 'Commercial Janitorial Bidding & Price Per Sq Ft Calculator (2026)',
        icon: '🏢',
        desc: 'Calculate commercial janitorial bids and price per square foot using ISSA production rates, FICA + Workers\' Comp payroll burden, and gross margin divisor math.',
        category: 'pricing',
        tag: 'New',
        featured: true, 
        url: '/tools/commercial-bidding-calculator/'
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
        id: 'hocl-bleach-dilution-calculator',
        title: 'HOCl & Bleach PPM Dilution Calculator',
        icon: '💧',
        desc: 'Convert Sodium Hypochlorite (% NaOCl) or Hypochlorous Acid (HOCl PPM) into exact gallon and ounce disinfection mixes via C1V1 = C2V2.',
        category: 'safety',
        tag: 'New',
        featured: true,
        url: '/tools/hocl-bleach-dilution-calculator/'
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
        id: 'on-call-rotation-generator',
        title: 'On-Call Rotation & Standby Pay Generator',
        icon: '🚨',
        desc: 'Generate fair 4-week 24/7 emergency on-call rotations, assign primary and backup techs, and calculate FLSA standby vs call-out pay.',
        category: 'ops',
        tag: 'New',
        featured: true,
        url: '/tools/on-call-rotation-generator/'
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
        title: 'Cleaning Production Rate & Square Footage Time Estimator (2026)',
        icon: '⏱️',
        desc: 'Calculate commercial janitorial hours, Cleaning Units (CU = Sq Ft / 1,000), restroom fixture times, and ISSA 612 production rates.',
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
        title: 'Cleaning Staff Performance Review Generator (2026)',
        icon: '⭐',
        desc: 'Construct weighted 100-point custodial scorecards, APPA Level 1–5 audit ratings, OSHA safety appraisals, and copy-paste staff review examples.',
        category: 'ops',
        tag: 'Management',
        featured: true,
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
    },
    {
        id: 'move-in-out-estimator',
        title: 'Move-In/Move-Out Cleaning Estimator',
        icon: '🏠',
        desc: 'Calculate detailed estimates for move-in and move-out cleans based on property size, condition, and add-on services.',
        category: 'pricing',
        tag: 'New',
        featured: true,
        url: '/tools/move-in-out-estimator/'
    },
    {
        id: 'profit-margin-calculator',
        title: 'Cleaning Business Profit Margin Calculator',
        icon: '📈',
        desc: 'Calculate total expenses, gross profit, and net profit margins to assess the financial health of your cleaning business.',
        category: 'pricing',
        tag: 'Finance',
        featured: true,
        url: '/tools/profit-margin-calculator/'
    },
    {
        id: 'square-foot-vs-hourly',
        title: 'Square Foot vs. Hourly Quoting Calculator',
        icon: '📐',
        desc: 'Compare square foot vs. hourly quoting models for commercial and residential cleaning jobs with 2026 ISSA production benchmarks.',
        category: 'pricing',
        tag: 'New',
        featured: true,
        url: '/tools/square-foot-vs-hourly/'
    },
    {
        id: 'tip-calculator',
        title: 'Fair Tip Splitter Calculator for Cleaning Teams',
        icon: '💵',
        desc: 'Split cleaning crew tip pools fairly based on actual shift hours worked, IRS Form 4070 compliance, and FLSA labor rules.',
        category: 'pricing',
        tag: 'New',
        featured: true,
        url: '/tools/tip-calculator/'
    },
    {
        id: 'cleaning-estimate-widget',
        title: 'Cleaning Estimate Iframe Widget Generator',
        icon: '⚙️',
        desc: 'Generate free responsive iframe embed code and custom liquid snippets for Wix, Shopify, and WordPress cleaning websites.',
        category: 'pricing',
        tag: 'New',
        featured: true,
        url: '/tools/cleaning-estimate-widget/'
    },
    {
        id: 'mileage-reimbursement-calculator',
        title: 'Cleaning Company Vehicle Mileage & Fuel Reimbursement Calculator (2026)',
        icon: '🚐',
        desc: 'Calculate tax-free IRS standard mileage reimbursement ($0.70/mile per Notice 2025-5), actual fleet fuel burn, Accountable Plan tax savings, and FLSA 29 CFR 785.38 inter-site drive-time payroll.',
        category: 'pricing',
        tag: 'Finance',
        featured: true,
        url: '/tools/mileage-reimbursement-calculator/'
    },
    {
        id: '1099-vs-w2-cleaning-labor-calculator',
        title: 'Subcontractor 1099 vs W2 Cleaning Employee Labor Cost & Tax Calculator (2026)',
        icon: '⚖️',
        desc: 'Compare loaded W-2 cleaning employee cost (7.65% FICA, FUTA, SUTA, Class 9014 Workers\' Comp) against 1099 subcontractor payouts and IRC Section 3509 misclassification exposure.',
        category: 'pricing',
        tag: 'Finance',
        featured: true,
        url: '/tools/1099-vs-w2-cleaning-labor-calculator/'
    },
    {
        id: 'window-cleaning-quote-calculator',
        title: 'Commercial & Residential Window Cleaning Quote Calculator: Per-Pane vs Hourly Pricing (2026)',
        icon: '🪟',
        desc: 'Calculate residential and commercial window cleaning quotes using 2026 per-pane rates, French panes, screens, tracks, hard-water stain removal, and water-fed pole hourly targets.',
        category: 'pricing',
        tag: 'New',
        featured: true,
        url: '/tools/window-cleaning-quote-calculator/'
    },
    {
        id: 'disinfectant-oz-per-gallon-calculator',
        title: '1:128, 1:64 & 1:256 Disinfectant Oz-Per-Gallon Chart & Spray Bottle Dilution Calculator (2026)',
        icon: '🧴',
        desc: 'Convert 1:256, 1:128, 1:64, 1:32, and 1:10 chemical ratios into exact fluid ounces, milliliters, teaspoons, active PPM, and ready-to-use cost per spray bottle or mop bucket.',
        category: 'safety',
        tag: 'Safety',
        featured: true,
        url: '/tools/disinfectant-oz-per-gallon-calculator/'
    },
    {
        id: 'osha-secondary-container-label-generator',
        title: 'OSHA HazCom & SDS Janitorial Chemical Mixing Compatibility Chart & Secondary Label Generator (2026)',
        icon: '⚠️',
        desc: 'Check janitorial chemical mixing compatibility (Bleach, Ammonia, Acid, Peroxide, Quats) and print OSHA 29 CFR 1910.1200(f)(6) GHS 3x4" secondary spray bottle labels.',
        category: 'safety',
        tag: 'Safety',
        featured: true,
        url: '/tools/osha-secondary-container-label-generator/'
    },
    {
        id: 'sanitary-expense-accounting-calculator',
        title: 'Janitorial Chart of Accounts & Sanitary Supply Expense Ratio Calculator for Cleaning Businesses (2026)',
        icon: '🧾',
        desc: 'Audit your cleaning business sanitary supply COGS ratio (1.8%–3.5% target), map costs to IRS Schedule C & QuickBooks accounts, and calculate restroom consumable markups.',
        category: 'pricing',
        tag: 'Finance',
        featured: true,
        url: '/tools/sanitary-expense-accounting-calculator/'
    },
    {
        id: 'maid-service-tip-pooling-calculator',
        title: 'House Cleaning & Maid Service Tip Pooling Calculator: Solo Tech vs Crew Split Rules (2026)',
        icon: '🤝',
        desc: 'Split residential maid crew tips fairly by role-weighted hours (Lead/Driver 1.20x vs Associate 1.00x vs Trainee 0.75x) under FLSA 29 CFR 531.54 and IRS Form 4070 rules.',
        category: 'pricing',
        tag: 'Finance',
        featured: true,
        url: '/tools/maid-service-tip-pooling-calculator/'
    },
    {
        id: 'move-out-deep-cleaning-calculator',
        title: 'Move-Out & Deep Cleaning Add-On Pricing Calculator: Inside Oven, Fridge & Cabinet Rates (2026)',
        icon: '🔑',
        desc: 'Build itemized move-out and deep cleaning quotes with 2026 add-on pricing for inside oven, refrigerator, empty cabinets, baseboards, interior windows, blinds, and heavy soil multipliers.',
        category: 'pricing',
        tag: 'New',
        featured: true,
        url: '/tools/move-out-deep-cleaning-calculator/'
    }
];

if (typeof window !== 'undefined') {
    window.TOOLS_DATA = TOOLS_DATA;
}
