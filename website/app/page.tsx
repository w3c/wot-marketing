import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Building2,
  Factory,
  Globe2,
  Home,
  Network,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import './home.css';
export default function HomePage() {
  return (
    <div className="home">
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
              W3C Web of Things makes connected products discoverable, understandable, and usable—across platforms,
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
            <div className="checks">
              <span>
                <Check />
                Open standards
              </span>
              <span>
                <Check />
                Vendor neutral
              </span>
            </div>
          </div>
          <div className="visual">
            <div className="orbit orbit-outer" aria-hidden="true">
              <div className="visual-node node-industry"><Factory />Industry</div>
              <div className="visual-node node-home"><Home />Home</div>
              <div className="visual-node node-energy"><Zap />Energy</div>
              <div className="visual-node node-cities"><Building2 />Cities</div>
            </div>
            <div className="orbit orbit-inner" aria-label="Protocols connected by Web of Things">
              <span className="protocol-node protocol-http">HTTP</span>
              <span className="protocol-node protocol-mqtt">MQTT</span>
              <span className="protocol-node protocol-coap">CoAP</span>
              <span className="protocol-node protocol-opc">OPC UA</span>
            </div>
            <div className="core">
              <Globe2 />
              <b>WoT</b>
              <small>shared web layer</small>
            </div>
          </div>
        </div>
      </section>
      <section className="shell section">
        <header>
          <label>THE MISSING APPLICATION LAYER</label>
          <h2>
            Stop rebuilding integrations.
            <br />
            Start composing experiences.
          </h2>
          <p>
            WoT describes what a connected thing can do in a common, machine-readable format—without replacing the
            technologies underneath it.
          </p>
        </header>
        <div className="compare">
          <article>
            <label>WITHOUT WOT</label>
            <h3>Every connection is custom</h3>
            <div className="chips">MQTT　 HTTP　 CoAP　 OPC UA</div>
          </article>
          <ArrowRight />
          <article className="dark">
            <label>WITH WOT</label>
            <h3>One consistent way to use things</h3>
            <div className="td">Thing Description</div>
          </article>
        </div>
      </section>
      <section className="features">
        <div className="shell">
          <header>
            <label>BUILT FOR THE REAL WORLD</label>
            <h2>Interoperability without compromise</h2>
          </header>
          <div className="cards">
            <article>
              <Network />
              <h3>Describe once</h3>
              <p>A semantic description of properties, actions, and events.</p>
            </article>
            <article>
              <ShieldCheck />
              <h3>Secure by design</h3>
              <p>Build on established web security mechanisms.</p>
            </article>
            <article>
              <PlugZap />
              <h3>Connect anything</h3>
              <p>Keep applications independent from protocols and transports.</p>
            </article>
            <article>
              <Sparkles />
              <h3>Compose freely</h3>
              <p>Reuse and combine capabilities across vendors and domains.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="shell section domain-section">
        <header>
          <label>ONE STANDARD, MANY WORLDS</label>
          <h2>Turn connected systems into web systems.</h2>
          <p>Use the same open application layer from the factory floor to the energy grid.</p>
        </header>
        <div className="domain-grid">
          <Link href="/use-cases">
            <Factory />
            <span>
              <b>Industry</b>
              <small>Compose production assets</small>
            </span>
            <ArrowRight />
          </Link>
          <Link href="/use-cases">
            <Home />
            <span>
              <b>Smart home</b>
              <small>Bridge connected ecosystems</small>
            </span>
            <ArrowRight />
          </Link>
          <Link href="/use-cases">
            <Building2 />
            <span>
              <b>Smart cities</b>
              <small>Connect public infrastructure</small>
            </span>
            <ArrowRight />
          </Link>
          <Link href="/use-cases">
            <Zap />
            <span>
              <b>Energy</b>
              <small>Coordinate distributed resources</small>
            </span>
            <ArrowRight />
          </Link>
        </div>
      </section>
      <section className="join">
        <div className="shell">
          <h2>Built in the open. Your perspective belongs here.</h2>
          <Link href="/participate/working-group">
            Join the community <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
