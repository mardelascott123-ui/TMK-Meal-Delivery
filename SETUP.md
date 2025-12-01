# Setup Instructions

## For GitHub Upload

### 1. Create a new repository on GitHub
1. Go to https://github.com/new
2. Repository name: `mission-kitchen-website`
3. Description: "Modern meal kit delivery website built with React"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Push your local repository to GitHub

After creating the repository on GitHub, run these commands in your terminal:

```bash
# Navigate to the project directory
cd mission-kitchen-website

# Add the remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/mission-kitchen-website.git

# Rename branch to main (optional, but recommended)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages (Optional)

To host your website for free on GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be available at: `https://YOUR-USERNAME.github.io/mission-kitchen-website/`

## Local Development

### Using Python (Recommended)
```bash
cd mission-kitchen-website
python3 -m http.server 8000
# Open http://localhost:8000
```

### Using Node.js
```bash
cd mission-kitchen-website
npx http-server
# Open http://localhost:8080
```

### Using VS Code Live Server
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Repository Structure

```
mission-kitchen-website/
├── index.html           # Main website file
├── README.md            # Project documentation
├── LICENSE              # MIT License
├── CONTRIBUTING.md      # Contribution guidelines
├── SETUP.md            # This file
└── .gitignore          # Git ignore rules
```

## Next Steps

After pushing to GitHub, you can:
- Add a repository description and topics
- Enable Discussions for community feedback
- Set up GitHub Actions for automated testing
- Add a CODE_OF_CONDUCT.md
- Create Issues for planned features
- Invite collaborators

## Troubleshooting

### Authentication Issues
If you get authentication errors when pushing:

**Using HTTPS:**
```bash
# You'll need a Personal Access Token (PAT)
# Generate one at: https://github.com/settings/tokens
```

**Using SSH:**
```bash
# Use SSH URL instead
git remote set-url origin git@github.com:YOUR-USERNAME/mission-kitchen-website.git
```

### Already Have a README?
If GitHub shows a conflict with README:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Need Help?

- GitHub Docs: https://docs.github.com
- Git Documentation: https://git-scm.com/doc
- Open an issue in the repository

Happy coding! 🚀
