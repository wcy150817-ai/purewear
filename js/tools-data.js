// js/tools-data.js

const TOOLS_DATA = [
    {
        id: 'cleaning-quote-calculator',
        title: 'Cleaning Quote Calculator',
        icon: '🧹',
        desc: 'Estimate house cleaning costs by square footage and service type.',
        tag: 'Popular',
        featured: true, 
        url: '/tools/cleaning-quote-calculator/' // 前面加了斜杠
    },
    {
        id: 'hourly-pay-calculator',
        title: 'Hourly Pay Calculator',
        icon: '💰',
        desc: 'Calculate wages, overtime pay, and weekly earnings.',
        tag: 'Free',
        featured: true,
        url: '/tools/hourly-pay-calculator/' // 前面加了斜杠
    },
    {
        id: 'dilution-calculator',
        title: 'Dilution Calculator',
        icon: '🧪',
        desc: 'Calculate cleaning solution ratios for perfect dilution.',
        tag: 'Utility',
        featured: true,
        url: '/tools/dilution-calculator/' // 前面加了斜杠
    },
    {
        id: 'tip-calculator',
        title: 'Tip Calculator',
        icon: '💵',
        desc: 'Split tips among team members easily and fairly.',
        tag: 'New',
        featured: true,
        url: '/tools/tip-calculator/'
    } ,
    {
        id: 'message-template-generator',
        title: 'Message Template Generator',
        icon: '📝',
        desc: 'Generate professional SMS templates for clients instantly.',
        tag: 'New',
        featured: true,
        url: '/tools/message-template-generator/'
    },
    {
        id: 'cleaning-checklist',
        title: 'Cleaning Checklist Generator',
        icon: '☑️',
        desc: 'Create and print professional cleaning checklists for every job.',
        tag: 'Popular',
        featured: true,
        url: '/tools/cleaning-checklist/'
    }
];

if (typeof window !== 'undefined') {
    window.TOOLS_DATA = TOOLS_DATA;
}
