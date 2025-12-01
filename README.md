# The Mission Kitchen - Meal Delivery Website

A modern, responsive meal kit delivery website built with React. Features organic meal plans, customizable options, and a beautiful user interface.

![The Mission Kitchen](https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80)

## Features

- 🥗 **Multiple Meal Plans**: Balanced Living, Keto & Paleo, Plant Powered, Quick & Easy
- 🛒 **Customizable Orders**: Choose servings (2 or 4 people) and recipes per week (3-6)
- 📊 **Dynamic Pricing**: Real-time price calculation based on selections
- 📱 **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 🖼️ **High-Quality Images**: Professional food photography throughout
- ⚡ **Fast Performance**: Optimized React components and assets

## Tech Stack

- **Frontend**: React 18
- **Icons**: Lucide React
- **Fonts**: DM Sans, Libre Baskerville (Google Fonts)
- **Images**: Unsplash
- **Styling**: Inline CSS with modern design patterns

## Quick Start

### Option 1: Open HTML File Directly

Simply open `index.html` in any modern web browser. No build process required!

```bash
# Clone the repository
git clone https://github.com/yourusername/mission-kitchen-website.git

# Navigate to the directory
cd mission-kitchen-website

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Option 2: Run with Local Server

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then open http://localhost:8000
```

## Project Structure

```
mission-kitchen-website/
├── index.html          # Main HTML file with embedded React
├── README.md           # Project documentation
├── LICENSE             # MIT License
├── .gitignore         # Git ignore rules
└── assets/            # Future: Images, fonts, etc.
```

## Sections

### 1. Hero Section
- Eye-catching headline with value proposition
- Call-to-action buttons
- Pricing highlight ($9.99/serving)
- Large hero image

### 2. Stats Bar
- 50M+ Meals Delivered
- 100% Organic Ingredients
- 80+ Weekly Recipes
- 4.8★ Customer Rating

### 3. Meal Plans
- Balanced Living (Most Popular)
- Keto & Paleo
- Plant Powered
- Quick & Easy

### 4. Customization Box
- Select number of people (2 or 4)
- Choose recipes per week (3, 4, 5, or 6)
- Real-time price calculation
- Price per serving display

### 5. How It Works
- Choose Your Plan
- We Prep & Deliver
- Cook & Enjoy

### 6. This Week's Menu
- Recipe cards with images
- Cook time and calorie information
- Dietary tags (Vegan, Keto, etc.)
- Hover effects

### 7. Benefits
- 100% Organic
- Chef-Designed
- Pre-Portioned
- Carbon Neutral
- No Commitment
- Premium Quality

### 8. Call-to-Action
- Final conversion section
- Special offer mention
- Clear CTA button

### 9. Footer
- Company links
- Support resources
- Legal information
- Brand identity

## Customization

### Change Colors

Find the primary color `#2d5f3f` throughout the code and replace with your brand color.

### Update Content

All text content is in the React component. Search for specific sections and update:
- Meal plan descriptions
- Recipe information
- Pricing logic
- Benefits list

### Add More Recipes

Expand the `meals` array in the component:

```javascript
{
  name: 'Your Recipe Name',
  description: 'Recipe description',
  time: '30 min',
  calories: '450 cal',
  image: 'https://your-image-url.com',
  tags: ['Tag1', 'Tag2']
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight single-page application
- CDN-hosted dependencies (React, Lucide)
- Optimized images from Unsplash
- Minimal JavaScript bundle
- Fast initial load time

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ for healthy eating
