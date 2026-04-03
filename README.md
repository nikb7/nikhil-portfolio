# Nikhil Bansal — Astro Bento Portfolio

Personal portfolio built with Astro, TypeScript, React, Tailwind CSS, and shadcn/ui.

- [Live site](https://nikb.in)
- [GitHub repository](https://github.com/nikb7/nikhil-portfolio) (private — clone requires access)

## Technologies Used

This project utilizes the following technologies:

- **Astro**: A modern framework for building fast and efficient websites.
- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive design.
- **Shadcn UI**: A collection of accessible and easy-to-use UI components.
- **React**: For interactive components and advanced functionality.
- **TypeScript**: For static type checking and improved developer experience.

## Requirements

Before starting, make sure you have the following requirements installed:

- Node.js (version 18 or higher)
- pnpm (version 8 or higher)

## Installation

To install and run the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/nikb7/nikhil-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nikhil-portfolio
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Open your browser and visit `http://localhost:4312` to see your portfolio in action.
6. Configure your site
   1. Edit `src/content/profileData.ts` to add your profile data
   2. Edit `astro.config.ts` to set the `site` URL

## Important Considerations

- **Accessibility**: Ensure your portfolio is accessible to all users, including those with disabilities.
- **SEO**: Optimize your portfolio for search engines by adding meta tags and relevant content.
- **Performance**: Use modern web development practices to ensure optimal performance, such as lazy loading images and minimizing CSS/JS.
- **Responsive Design**: Make sure your portfolio looks good on devices of all sizes, from mobile to desktop screens.

## License

- This source code is licensed under the [MIT License](LICENSE).
- The content (`src/content/`) of the portfolio is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
- Assets under `public/` are not freely reusable without permission; see [public/LICENSE](public/LICENSE).

## Inspiration

This project was inspired by several outstanding portfolios. Here are some that served as references:

- [Bento Like Portfolio](https://github.com/Ladvace/astro-bento-portfolio)
- [Minimal and bento Portfolio](https://github.com/bue221/astro-portfolio)

### Differences / Improvements

- Centralised data management inside one folder
  - Use Astro recommended [Content Collection](https://docs.astro.build/en/guides/content-collections/) to manage data
  - `src/content` folder for blog posts, project data and profile data
  - `src/content/profileData.ts` for general profile data
- Tags system
- Simplified Dark/Light mode toggle
