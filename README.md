# FitnessBites - Quick & Effective Workouts

FitnessBites is a modern, responsive website for a fitness mobile application that delivers effective, time-efficient workouts for busy people.

## Preview

![FitnessBites Preview](/public/images/og-image.jpg)

**[View Live Preview](#)** (Replace with your deployment URL when available)

## Features

- Modern, responsive design built with Next.js 13 and TypeScript
- Beautiful UI components using Tailwind CSS and shadcn/ui
- Light and dark mode support
- Mobile-first approach
- SEO optimized

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives
- [Lucide React](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/fitnessbites-site.git
   cd fitnessbites-site
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint to catch errors

## Project Structure

```
fitnessbites-site/
├── app/                # Next.js app directory
│   ├── about/          # About page
│   ├── features/       # Features page
│   ├── page.tsx        # Home page
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   ├── ui/             # UI components
│   ├── navbar.tsx      # Navigation bar
│   └── footer.tsx      # Footer
├── public/             # Static assets
└── ...
```

## Customization

You can customize the site by editing the following files:
- `app/page.tsx` - Main landing page content
- `app/layout.tsx` - Site metadata and layout
- `components/navbar.tsx` - Navigation menu
- `components/footer.tsx` - Footer content
- `app/globals.css` - Global styles

## License

This project is licensed under the MIT License - see the LICENSE file for details.
