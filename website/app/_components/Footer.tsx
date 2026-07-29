import Image from 'next/image';
import Link from 'next/link';
import wotLogo from '@/public/wot-logo.svg';
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <Image src={wotLogo} width={82} alt="W3C Web of Things" />
          <p>Open standards for a connected world that works across platforms, protocols, and industries.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/developers/documentation">Documentation</Link>
          <Link href="/developers/tools">Developer tools</Link>
          <Link href="/use-cases">Use cases</Link>
        </div>
        <div>
          <b>Participate</b>
          <Link href="/participate/working-group">Working Group</Link>
          <Link href="/participate/community-groups">Community Groups</Link>
          <Link href="/about/contact">Contact</Link>
        </div>
        <div>
          <b>In the open</b>
          <a href="https://github.com/w3c/wot">GitHub</a>
          <a href="https://w3c.social/@wot">Mastodon</a>
          <a href="https://www.w3.org/">W3C</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-shell">
          <span>Copyright © 2026 World Wide Web Consortium</span>
          <span>W3C® liability, trademark and permissive license rules apply</span>
        </div>
      </div>
    </footer>
  );
}
