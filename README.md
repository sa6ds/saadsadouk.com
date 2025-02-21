# saadsadouk.com

[![Website](https://img.shields.io/badge/Website-saadsadouk.com-000000?style=flat-square)](https://www.saadsadouk.com)

This is a portfolio and blog platform built with Next.js. For a more detailed look into how I built this, check out my blog post [here](https://saadsadouk.com/blog/welcome-to-my-internet-space).

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Blog Processing**: remark, react-markdown
- **Font Optimization**: [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) with Inter (Google Font)
- **Design Tool**: Figma (pre-development UI/UX prototyping)

## Features

- **Portfolio**: Showcases projects and skills with a clean, minimalistic design.
- **Blog**: Static Markdown-based posts for fast loading and easy content management.
  - Markdown files processed with `remark` and `react-markdown` for simplicity and flexibility.
  - Separation of content and presentation for maintainability.
- **Responsive Design**: Tailwind CSS ensures a consistent, aesthetically pleasing layout across devices.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. Edit `app/page.tsx` to modify the homepage; changes auto-update via hot reloading.

## Project Structure

- `app/`: Core Next.js app directory with pages and components.
- `blog-assets/`: Static assets for blog posts (e.g., images).
- Markdown files used for blog content, processed at build time.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Features and API reference.
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial.
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Styling framework guide.
- [Markdown Guide](https://www.markdownguide.org/) - Markdown syntax reference.
- [Next.js GitHub](https://github.com/vercel/next.js/) - Repository for feedback and contributions.

## Deployment

Deploy easily using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). See the [Next.js deployment docs](https://nextjs.org/docs/deployment) for details.

## Development Notes

- Designed in Figma for a consistent UI/UX before coding.
- Inspired by minimalistic design principles and clean layouts (e.g., [Prettyfolio](https://prettyfolio.com/)).

## License

The code for saadsadouk.com is available under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code as per the terms of the license.

## Contact

For any questions or inquiries, please contact me [here](saad.sadouk7@gmail.com).
