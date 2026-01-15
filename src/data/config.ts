const config = {
  title: "Muhammad Zaid Mohsin | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Muhammad Zaid Mohsin, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Muhammad Zaid Mohsin, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Muhammad Zaid Mohsin",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Muhammad Zaid Mohsin",
  email: "zaidmohsin45@gmail.com",
  site: "https://portfolio-git-main-zaidmohsin457s-projects.vercel.app/",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/zaidmohsin457/",
    github: "https://github.com/zaidmohsin457",
  },
};
export { config };
