import glob, re

# Fix tool pages
files = glob.glob('tools/*/index.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # Extract the tool name from the path, e.g., tools/tip-calculator/index.html -> tip-calculator
    tool_name = f.split('/')[1]
    canonical_url = f"https://purewearspace.com/tools/{tool_name}/"
    canonical_tag = f'<link rel="canonical" href="{canonical_url}" />\n</head>'
    
    if '<link rel="canonical"' in content:
        # replace existing canonical
        content = re.sub(r'<link rel="canonical" href="[^"]+" ?/?>', f'<link rel="canonical" href="{canonical_url}" />', content)
    else:
        # insert before </head>
        content = content.replace('</head>', canonical_tag)
        
    with open(f, 'w') as file:
        file.write(content)

# Fix tools directory index
with open('tools/index.html', 'r') as file:
    content = file.read()
if '<link rel="canonical"' in content:
    content = re.sub(r'<link rel="canonical" href="[^"]+" ?/?>', '<link rel="canonical" href="https://purewearspace.com/tools/" />', content)
else:
    content = content.replace('</head>', '<link rel="canonical" href="https://purewearspace.com/tools/" />\n</head>')
with open('tools/index.html', 'w') as file:
    file.write(content)

print("Canonical tags successfully added to all 17 tools and directory index.")
