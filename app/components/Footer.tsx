export default function Footer() {
  return (
    <footer className="bg-base-200 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Logo / App Name */}
        <div className="font-bold text-xl">
          WeTODO
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a href="/about-us" className="link link-hover">About</a>
          <a href="/privacy" className="link link-hover">Privacy</a>
          <a href="/contact" className="link link-hover">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-base-content/60">
          &copy; {new Date().getFullYear()} TodoJoy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
