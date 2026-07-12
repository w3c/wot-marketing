import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Code2,
  Factory,
  FileJson2,
  Globe2,
  Home,
  PlugZap,
  ShieldCheck,
  Zap,
} from 'lucide-react';

function HeroVisual() {
  return (
    <div className="visual">
      <div className="domain-orbit" aria-label="Domains where Web of Things is applied">
        <span className="layer-label wot-label">
          <Globe2 /> Web of Things
        </span>
        <div className="visual-node node-industry">
          <Factory />
          Industry
        </div>
        <div className="visual-node node-home">
          <Home />
          Home
        </div>
        <div className="visual-node node-energy">
          <Zap />
          Energy
        </div>
        <div className="visual-node node-cities">
          <Building2 />
          Cities
        </div>
      </div>
      <div className="wot-layer" aria-label="Web of Things building blocks">
        <div className="capability capability-td">
          <FileJson2 />
          <b>
            Thing
            <br />
            Description
          </b>
        </div>
        <div className="capability capability-bindings">
          <PlugZap />
          <b>
            Binding
            <br />
            Templates
          </b>
        </div>
        <div className="capability capability-scripting">
          <Code2 />
          <b>
            Scripting
            <br />
            API
          </b>
        </div>
        <div className="capability capability-security">
          <ShieldCheck />
          <b>Security &amp; Privacy</b>
        </div>
      </div>
      <div className="core">
        <b>Protocols</b>
        <small>HTTP · MQTT · CoAP · OPC UA · WebSocket · Modbus · BACnet</small>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero">
      <div className="shell heroGrid">
        <div>
          <p className="eyebrow">AN OPEN STANDARD FOR AN INTEROPERABLE IOT</p>
          <h1>
            One web.
            <br />
            <em>Every thing.</em>
          </h1>
          <p className="lede">
            W3C Web of Things makes connected products discoverable, understandable, and usable across platforms,
            protocols, and industries.
          </p>
          <div className="actions">
            <Link href="/developers/documentation">
              Start building <ArrowRight />
            </Link>
            <Link href="/about/history" className="outline">
              Discover how it works
            </Link>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
