import Link from "next/link";

export const metadata = {
  title: "Zachary Neumann — Resume",
  description:
    "Senior software engineer and GIS technologist. Production LLM engineering, AI-augmented GIS, built and scaled GIS departments. Founder of Audio Alchemy.",
};

export default function ResumePage() {
  return (
    <div className="gradient-bg min-h-screen">
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-gradient"
          >
            ZN
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-white/60 hover:text-white transition-colors link-hover"
            >
              Home
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-[#d4af37] hover:text-[#f4e4bc] transition-colors link-hover"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.print();
              }}
              className="hidden sm:inline-block text-sm px-4 py-2 border border-[#d4af37]/30 text-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 transition-colors"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-24 print:pt-0">
        {/* Header */}
        <header className="mb-14">
          <p className="text-[#d4af37]/60 text-xs tracking-[0.3em] mb-4 uppercase">
            Resume
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient font-serif">Zachary Neumann</span>
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
            <span>Austin, TX</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <a
              href="https://www.zacharyneumann.com"
              className="hover:text-[#d4af37] transition-colors"
            >
              zacharyneumann.com
            </a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a
              href="https://alchemy.audio"
              className="hover:text-[#d4af37] transition-colors"
            >
              alchemy.audio
            </a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a
              href="https://github.com/zneu"
              className="hover:text-[#d4af37] transition-colors"
            >
              github.com/zneu
            </a>
            <span className="hidden sm:inline text-white/20">·</span>
            <Link
              href="/#contact"
              className="hover:text-[#d4af37] transition-colors"
            >
              Contact
            </Link>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-white/75 leading-relaxed text-[15px]">
            Software engineer and GIS technologist with ~10 years of experience
            designing, building, and leading the deployment of user-focused
            geospatial and enterprise applications — now working at the
            frontier of AI-augmented software and GIS. Founded and ran a
            consulting firm&apos;s GIS department end-to-end — scaling it to
            35–40 users across 5 major municipal contracts and a statewide
            client book — after eight years modernizing
            public-participation GIS tooling used across the US Forest Service.
            Early adopter of LLM-driven workflows: built a WSL bridge that
            drives ArcGIS Pro directly from Claude Code, and independently
            ships full-stack AI applications (astrology, coaching, fraud
            detection, crypto trading dashboards) using RAG, vector databases,
            prompt/context engineering, and agent architectures that retrieve{" "}
            <em>intelligently</em> instead of dumping context. A builder first:
            I repeatedly take manual, multi-week workflows and turn them into
            one-click automation.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Role
            title="Senior GIS Analyst & GIS Department Lead"
            company="Quad Knopf (QK), Inc."
            dates="Mar 2022 – Mar 2026"
            lead="Founded and ran QK's GIS practice end-to-end — the senior technical lead and department manager who built the function from scratch and scaled it into a 35–40 user organization serving a statewide municipal-GIS client book. Owned everything: platform, data, team, client delivery, tooling, and business development."
            bullets={[
              <><strong>Built and scaled the department from zero to ~35–40 GIS users</strong>, across QK staff and the users I administered on behalf of our contract cities. Owned hiring, onboarding, project intake, work distribution, SOP authoring, and senior review across all deliverables.</>,
              <><strong>Ran GIS as a managed service for 5 major California contract cities</strong> — Delano, Lemoore, Chowchilla, Selma, and Coalinga — plus a long tail of smaller municipalities. Closed Coalinga personally as a <strong>$50K/year managed-GIS contract</strong>.</>,
              <><strong>Administrated ArcGIS Online and Portal</strong> for the entire firm and every contract city — users, groups, content governance, licensing, sharing policy, inter-org data access.</>,
              <><strong>Owned the firm&apos;s entire GIS data estate.</strong> Built relationships with multiple California county GIS offices to source authoritative Parcels, Boundaries, General Plan, Land Use, zoning, and every other layer our planners and engineers relied on — tracked provenance, update cadence, and metadata so every map we shipped could be trusted.</>,
              <><strong>&ldquo;Rapid Mapper.&rdquo;</strong> Rebuilt QK&apos;s flagship internal automation as an ArcGIS Pro Task + Python workflow that produces <strong>20 standardized report maps from a single project boundary</strong> — turning multi-hour manual map assembly into a one-click step.</>,
              <><strong>Agricultural Land Conversion analysis tool.</strong> Built an automated workflow modeled on American Farmland Trust&apos;s <em>Farms Under Threat</em> methodology — quantifies shifts from agricultural land into urban, industrial, and low-density residential use.</>,
              <><strong>CalGEM well-permitting map automation (Kern County).</strong> Automated the full map production pipeline for well-approval packages — identifying buildings, access roads, well pads, and adjacent features — taking a bulk-production job from manual end-to-end down to a single run.</>,
              <><strong>Municipal address management system.</strong> Built a GIS application for contract cities with N/S and E/W address grids and address-number lines; city planners drop as-builts, draw new development areas, and assign compliant addresses directly in-map.</>,
              <><strong>City engineering as-built + project-boundary platform.</strong> Built a system for contract city engineers to draw project boundaries and upload as-builts to Azure; Python scripts automatically link uploaded as-builts to the correct project boundary.</>,
              <><strong>Firm-wide platform migration from ArcMap to ArcGIS Pro.</strong> Authored the migration plan, delivered training seminars across departments, wrote the SOPs, and made ArcGIS Pro the new baseline.</>,
              <><strong>AI-augmented GIS — WSL ↔ ArcGIS Pro bridge.</strong> Built a WSL-based bridge that lets Claude Code (running in Linux) communicate with and operate ArcGIS Pro on Windows — driving the full ArcGIS Pro application from an LLM agent. Early, practical integration of agentic AI into the production GIS stack.</>,
              <><strong>Trusted GIS advisor</strong> to QK&apos;s biology, planning, engineering, and survey departments — producing the maps and spatial analyses that went into CEQA / NEPA documents, planning reports, well-permitting packages, survey deliverables, and client products.</>,
            ]}
          />

          <Role
            title="Lead GIS / Technology Consultant"
            company="USDA Forest Service — Washington Office Business Operations, Enterprise Program"
            dates="2016 – 2022 (8 years)"
            lead="Senior technical lead for the Forest Service's public-participation GIS program — the system the agency uses to collect public comment on NEPA projects, land-use plans, and recreation fee proposals."
            bullets={[
              <><strong>Owned the full project lifecycle</strong> for Enterprise Program engagements: strategic prospecting, client needs assessment, proposal authoring, budgeting, and delivery across regions and individual National Forests.</>,
              <><strong>Modernized NEPA public scoping agency-wide</strong> by automating deployment of Public Participatory GIS web applications (TPCM, RFCM) using Python, the ArcGIS API for Python, ArcGIS Pro, and ArcGIS Online.</>,
              <><strong>Cut deployment time from 80 hours to 15 minutes</strong> by automating 50 TPCM and 30 RFCM project rollouts.</>,
              <><strong>Centralized 7,000+ public NEPA comments</strong> into a single geodatabase, giving planners across the agency unified access to public input on land-use decisions.</>,
              <><strong>Built the CARA integration</strong> — connected TPCM with the agency&apos;s Comment and Analysis Response Application using FME and Python.</>,
              <><strong>Automated Recreation Site Fee Proposal signage</strong> using Acrobat + the JavaScript API.</>,
              <><strong>Built a location-based market-intelligence tool</strong> on 5 years of recreation fee sales data to guide placement of automatic fee machines, augmented with web-scraped Recreation.gov, Good Sam, and National Park pricing data.</>,
              <><strong>Automated QR-code generation</strong> for the National Visitor Use Monitoring Program (thousands of sites) — reduced a 2–3 week manual workload to a few days. <em>Highlighted in the official USFS Enterprise Program reference letter, 12/2021.</em></>,
              <><strong>Evangelized the platform.</strong> Presented TPCM technical architecture at the Public Participatory GIS Conference at Cal Poly; lightning talks at the 2017 Esri User Conference (San Diego).</>,
            ]}
          />

          <Role
            title="Data Manager"
            company="Hack Oregon"
            dates="2018"
            bullets={[
              <>Point-person between government and private-sector stakeholders (City of Portland, State of Oregon) and Hack Oregon&apos;s data team.</>,
              <>Built APIs and a sandbox web application presenting data-driven studies across partner organizations; presented results at a 500-person public event.</>,
              <>Documented dataset inventory and verified data quality to unblock data scientist and database engineer workflows.</>,
            ]}
          />
        </Section>

        {/* Independent Projects */}
        <Section title="Independent Projects">
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Self-directed full-stack and AI engineering work across AI
            applications, context-engineering tooling, financial data systems,
            and fraud/ops command centers. Every project below is hands-on:
            design, backend, frontend, LLM orchestration, and data layer —
            solo-built.
          </p>
          <ul className="space-y-4">
            <Project
              name="Context Engineering for Claude Code"
              body={
                <>
                  Published methodology and command set for managing Claude
                  Code workflows on complex multi-phase tasks. Based on the
                  &ldquo;40% rule&rdquo; (LLM performance degrades past ~40%
                  context usage) — enforces a Research → Plan → Implement
                  phased workflow with human checkpoints, persistent{" "}
                  <code className="text-[#d4af37]/80 text-[0.9em]">.context/</code>{" "}
                  artifacts, and multi-phase detection that splits large tasks
                  across context windows.
                </>
              }
            />
            <Project
              name="Throne"
              href="https://astrology.alchemy.audio"
              body={
                <>
                  Personal AI Vedic astrologer. RAG over Jyotish-tradition
                  sources + Swiss Ephemeris for accurate sidereal chart
                  calculation; Claude-driven interpretation; custom system
                  prompts, context blocks, and prompt caching for cost/latency
                  control. Wireframe → front-end → backend → deploy.
                </>
              }
            />
            <Project
              name="Coaching AI"
              body={
                <>
                  Production AI coaching platform. Claude 3.7 Sonnet +
                  Pinecone vector DB (215 embeddings over 12 months of
                  coaching sessions); multi-tier caching delivered{" "}
                  <strong>77% cost reduction</strong> and{" "}
                  <strong>5× throughput</strong>; 9.1/10 authenticity score
                  on simulation. Flask + SQLAlchemy, Google OAuth w/ RBAC,
                  cross-session persistent memory, deployed on Railway.
                </>
              }
            />
            <Project
              name="Fraudsworth / Fraudsworth Command Center"
              body={
                <>
                  Automated quant + analysis workspace for the Dr. Fraudsworth
                  3-token Solana DeFi protocol. Data layer of 1,058 epochs in
                  an 85-column feature table; statistical strategies validated;
                  VPS-deployed dashboard; multi-collaborator Git workflow.
                  Agent-driven retrieval over case data instead of bulk-loading
                  context.
                </>
              }
            />
            <Project
              name="Crypto Trading Dashboards"
              body={
                <>
                  Real-time market and portfolio dashboards; backend data
                  ingestion + frontend visualization for personal trading
                  strategy research.
                </>
              }
            />
            <Project
              name="Akriza (music project / personal brand)"
              href="https://akriza.com"
              body={
                <>
                  Self-managed artist project — built the brand, identity,
                  release strategy, marketing, and distribution end-to-end as a
                  solo operator. <strong>2M+ cumulative streams.</strong> Concrete
                  proof of long-horizon audience building, branding, and
                  creative product strategy — the same product instincts I
                  bring to AI applications.
                </>
              }
            />
          </ul>
          <p className="text-white/50 text-sm mt-6 leading-relaxed">
            <strong className="text-[#d4af37]">Across these projects:</strong>{" "}
            Anthropic Claude API (system prompts, system blocks, prompt
            caching, tool use), RAG, vector databases, metadata-driven
            retrieval, agent design patterns, context engineering, wireframing
            → canvas → shipped UI.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid md:grid-cols-[max-content_1fr] gap-x-8 gap-y-3 text-sm">
            <Skill label="Languages & Core">
              Python, JavaScript, React, SQL, HTML/CSS
            </Skill>
            <Skill label="AI & LLM Engineering">
              Anthropic Claude API (system prompts, system blocks, prompt
              caching, tool use, API call design), RAG, vector databases,
              metadata-driven retrieval, context engineering, agent architecture
              & intelligent retrieval, multi-phase agent workflows, Claude
              Code, LLM-driven desktop automation (ArcGIS Pro via WSL bridge)
            </Skill>
            <Skill label="GIS & Geospatial">
              ESRI stack (ArcGIS Pro, Online, Portal, Enterprise, ArcMap),
              ArcPy, ArcGIS API for Python, Survey123, Collector, CrowdSource
              Reporter / Polling, Esri Story Maps, FME, QGIS, GDAL, Leaflet,
              Mapbox
            </Skill>
            <Skill label="Data & Backend">
              Pandas, Jupyter, Django, Flask, REST APIs, web scraping, SQL,
              data modeling, metadata standards
            </Skill>
            <Skill label="Cloud & Infrastructure">
              AWS, Azure, Railway, Vercel, Git / GitHub, CI/CD, WSL (Linux /
              Windows bridging)
            </Skill>
            <Skill label="Design & Prototyping">
              Wireframing, UI canvassing, rapid prototyping, end-to-end design
              → shipped product
            </Skill>
            <Skill label="Platforms & Tools">
              SharePoint (incl. modern experience), Microsoft Office, Teams,
              Adobe Acrobat + JS API, Trello, Zoho
            </Skill>
            <Skill label="Leadership">
              Building and leading technical teams from scratch, strategic
              planning, project management, hiring & onboarding, stakeholder
              management, executive reporting, public speaking, client
              advisory, change management, budgeting
            </Skill>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education & Certifications">
          <ul className="space-y-2 text-white/75 text-sm">
            <li>
              <strong className="text-white">
                B.S. Environmental Science, Minor in GIS
              </strong>{" "}
              — Portland State University
            </li>
            <li>
              <strong className="text-white">
                Music Technology Certification
              </strong>{" "}
              — Clackamas Community College
            </li>
          </ul>
        </Section>

        {/* References */}
        <Section title="References">
          <p className="text-white/70 text-sm leading-relaxed">
            <strong className="text-white">
              USDA Forest Service Enterprise Program
            </strong>{" "}
            — Formal reference letter (Dec 2021) signed by Cass Klee (Project
            Manager), Lucretia Smith (GIS Supervisor), and Tracy Bieler (GIS
            Program Manager). Full letter available on request.
          </p>
          <p className="text-white/50 text-xs mt-4 italic">
            Direct contact and additional references available on request via{" "}
            <Link
              href="/#contact"
              className="text-[#d4af37]/80 hover:text-[#d4af37] not-italic"
            >
              zacharyneumann.com
            </Link>
            .
          </p>
        </Section>

        {/* Footer */}
        <footer className="pt-16 mt-20 border-t border-white/5 text-center print:hidden">
          <div className="flex justify-center gap-4 flex-wrap mb-6">
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#996515] text-black font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              Contact Me
            </Link>
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-[#d4af37]/30 text-[#d4af37] font-semibold rounded-xl hover:bg-[#d4af37]/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Zachary Neumann
          </p>
        </footer>
      </main>
    </div>
  );
}

/* ============== components ============== */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14 print:mb-8 print:break-inside-avoid">
      <h2 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase font-semibold mb-5 pb-2 border-b border-[#d4af37]/20">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Role({
  title,
  company,
  dates,
  lead,
  bullets,
}: {
  title: string;
  company: string;
  dates: string;
  lead?: string;
  bullets: React.ReactNode[];
}) {
  return (
    <article className="mb-10 last:mb-0 print:break-inside-avoid">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
        <h3 className="text-white font-serif text-lg font-semibold">
          {title}
        </h3>
        <span className="text-white/30 text-xs">·</span>
        <span className="text-[#d4af37] text-sm">{company}</span>
        <span className="ml-auto text-white/40 text-xs italic">{dates}</span>
      </div>
      {lead && (
        <p className="text-white/70 text-[14px] leading-relaxed mt-2 mb-3">
          {lead}
        </p>
      )}
      <ul className="space-y-2 mt-3 list-disc list-outside pl-5 marker:text-[#d4af37]/50">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-white/70 text-[14px] leading-relaxed pl-1"
          >
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Project({
  name,
  href,
  body,
}: {
  name: string;
  href?: string;
  body: React.ReactNode;
}) {
  return (
    <li className="text-white/70 text-[14px] leading-relaxed">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d4af37] font-semibold hover:text-[#f4e4bc] transition-colors"
        >
          {name} ↗
        </a>
      ) : (
        <span className="text-[#d4af37] font-semibold">{name}</span>
      )}{" "}
      — {body}
    </li>
  );
}

function Skill({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <dt className="text-[#d4af37] font-semibold text-[13px] whitespace-nowrap uppercase tracking-wider">
        {label}
      </dt>
      <dd className="text-white/70 leading-relaxed">{children}</dd>
    </>
  );
}
