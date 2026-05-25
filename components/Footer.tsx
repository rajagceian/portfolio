import React from 'react';

interface FooterProps {
  reduceMotion?: boolean;
}

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
    ],
  },
  {
    title: 'Focus',
    links: [
      { label: 'DSA', href: '#skills' },
      { label: 'React + Frontend', href: '#skills' },
      { label: 'Backend + Databases', href: '#skills' },
    ],
  },
  {
    title: 'Profiles',
    links: [
      { label: 'GitHub', href: 'https://github.com/rajagceian' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raja-kumar-cse' },
      { label: 'LeetCode', href: 'https://leetcode.com/u/rajagceian/' },
    ],
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/raja.ku.mar?igsh=MTJrbXQwc2xyNGE2bQ==',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.88a.99.99 0 1 1 0 1.98.99.99 0 0 1 0-1.98ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rajagceian',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5A12 12 0 0 0 8.21 23.9c.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.08 1.83 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.48-1.32-5.48-5.9 0-1.3.47-2.37 1.23-3.2-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.22A11.5 11.5 0 0 1 12 6.8c1.02 0 2.05.14 3 .4 2.3-1.54 3.3-1.22 3.3-1.22.65 1.65.24 2.88.12 3.18.77.83 1.23 1.9 1.23 3.2 0 4.6-2.82 5.6-5.5 5.9.43.37.82 1.1.82 2.23v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/rajagceian/',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.58 3.52a1 1 0 0 1 1.41 0l4.49 4.49a1 1 0 0 1 0 1.41l-4.49 4.49a1 1 0 1 1-1.41-1.41L18.36 10H9a1 1 0 1 1 0-2h9.36l-2.78-2.77a1 1 0 0 1 0-1.41ZM7.5 8.5a1 1 0 0 1 1 1v5a2 2 0 0 0 2 2H17a1 1 0 1 1 0 2h-6.5a4 4 0 0 1-4-4v-5a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  {
    label: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org/profile/rajagceian',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 7.5A4.5 4.5 0 0 1 14 4.13a1 1 0 0 1-1.1 1.67A2.5 2.5 0 1 0 9 8v8a2.5 2.5 0 1 0 3.9 2.2 1 1 0 0 1 1.1 1.67A4.5 4.5 0 1 1 7 16V8a4.48 4.48 0 0 1-.5-.5Zm11 0A4.5 4.5 0 0 0 10 4.13a1 1 0 1 0 1.1 1.67A2.5 2.5 0 1 1 15 8v8a2.5 2.5 0 1 1-3.9 2.2 1 1 0 1 0-1.1 1.67A4.5 4.5 0 1 0 17 16V8c.18-.16.35-.33.5-.5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raja-kumar-cse',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 1 0 5.3 7.06 2.03 2.03 0 0 0 5.25 3ZM20.44 13.06c0-3.45-1.84-5.06-4.3-5.06a3.72 3.72 0 0 0-3.36 1.85V8.5H9.41c.04.9 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.39 1.9-1.39 1.35 0 1.89 1.04 1.89 2.56V20H20v-6.94Z" />
      </svg>
    ),
  },
];

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="border-t border-white/12 bg-[#ff6723] pb-12 pt-24 text-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/55">Raja Kumar</p>
            <h3 className="mt-4 max-w-2xl text-4xl font-serif-heading font-bold leading-tight md:text-5xl">
              A student portfolio shaped by consistency, learning, and real project work.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Built around problem solving, backend development, and steady growth toward impactful internships and real-world software engineering opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h4 className="text-sm font-bold tracking-tight">{section.title}</h4>
                <div className="flex flex-col gap-3 text-sm text-white/70">
                  {section.links.map((link) => (
                    <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>Focused on DSA, backend development, and impactful software projects.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white hover:text-black"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p>© 2026 Raja Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
