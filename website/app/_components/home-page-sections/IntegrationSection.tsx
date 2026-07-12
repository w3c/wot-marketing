import { ArrowRight } from 'lucide-react';

export function IntegrationSection() {
  return <section className="shell section"><header><label>THE MISSING APPLICATION LAYER</label><h2>Stop rebuilding integrations.<br />Start composing experiences.</h2><p>WoT describes what a connected thing can do in a common, machine-readable format&mdash;without replacing the technologies underneath it.</p></header><div className="compare"><article><label>WITHOUT WOT</label><h3>Every connection is custom</h3><div className="chips">MQTT&#x3000; HTTP&#x3000; CoAP&#x3000; OPC UA</div></article><ArrowRight /><article className="dark"><label>WITH WOT</label><h3>One consistent way to use things</h3><div className="td">Thing Description</div></article></div></section>;
}
