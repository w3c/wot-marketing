import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CommunityCallToAction() {
  return <section className="join"><div className="shell"><h2>Built in the open. Your perspective belongs here.</h2><Link href="/participate/working-group">Join the community <ArrowRight /></Link></div></section>;
}
