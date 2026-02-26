"use client"

import styles from "./privacy-protocol-comparison.module.css"

export function PrivacyProtocolComparison() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>Privacy Protocol Deep-Dive · Feb 2026</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.canton}>Canton</span> ·{" "}
            <span className={styles.zama}>Zama</span> ·{" "}
            <span className={styles.midnight}>Midnight</span>
          </h1>
          <p className={styles.heroDesc}>
            A comprehensive comparative analysis of three leading privacy-focused blockchain
            protocols — their architectures, strengths, risks, and prognosis for 1–3 year and 3+
            year time horizons.
          </p>
          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              Prepared by: <strong>Abishek Singh</strong>
            </span>
            <span className={styles.metaItem}>
              Date: <strong>February 25, 2026</strong>
            </span>
            <span className={styles.metaItem}>
              Analysis: <strong>AI-Augmented + Industry Research</strong>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* PROTOCOL SNAPSHOTS */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>🔍</span> Protocol Snapshots
        </div>
        <div className={styles.cardsRow}>
          {/* Canton Card */}
          <div className={`${styles.card} ${styles.cantonCard}`}>
            <div className={styles.cardLogo}>
              <div className={`${styles.cardDot} ${styles.cantonDot}`}>C</div>
              <div>
                <div className={styles.cardName}>Canton Network</div>
                <div className={styles.cardSub}>by Digital Asset</div>
              </div>
            </div>
            <div className={styles.badgeRow}>
              <span className={`${styles.badge} ${styles.cantonBadge}`}>Enterprise L1</span>
              <span className={`${styles.badge} ${styles.cantonBadge}`}>Permissioned</span>
              <span className={`${styles.badge} ${styles.cantonBadge}`}>Sub-txn Privacy</span>
              <span className={`${styles.badge} ${styles.cantonBadge}`}>Daml</span>
            </div>
            <p className={styles.textSm}>
              The first privacy-enabled, public permissioned blockchain built for regulated
              financial markets. Uses Daml smart contracts and a "network of networks" model where
              participants only see data they are party to.
            </p>
            <div className={styles.cardStatRow}>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Assets on Chain</div>
                <div className={`${styles.cardStatValue} ${styles.cantonText}`}>$6 T+</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Daily Repo Volume</div>
                <div className={`${styles.cardStatValue} ${styles.cantonText}`}>$280 B</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Validators</div>
                <div className={`${styles.cardStatValue} ${styles.cantonText}`}>575+</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Series Funding</div>
                <div className={`${styles.cardStatValue} ${styles.cantonText}`}>$135 M</div>
              </div>
            </div>
          </div>

          {/* Zama Card */}
          <div className={`${styles.card} ${styles.zamaCard}`}>
            <div className={styles.cardLogo}>
              <div className={`${styles.cardDot} ${styles.zamaDot}`}>Z</div>
              <div>
                <div className={styles.cardName}>Zama (fhEVM)</div>
                <div className={styles.cardSub}>by Zama AI</div>
              </div>
            </div>
            <div className={styles.badgeRow}>
              <span className={`${styles.badge} ${styles.zamaBadge}`}>FHE Layer</span>
              <span className={`${styles.badge} ${styles.zamaBadge}`}>Multi-chain</span>
              <span className={`${styles.badge} ${styles.zamaBadge}`}>EVM-compatible</span>
              <span className={`${styles.badge} ${styles.zamaBadge}`}>Coprocessor</span>
            </div>
            <p className={styles.textSm}>
              A "confidentiality layer" that wraps any EVM chain with Fully Homomorphic Encryption —
              enabling smart contract computation directly on encrypted data, without ever revealing
              inputs or state. Unicorn status achieved June 2025.
            </p>
            <div className={styles.cardStatRow}>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Valuation</div>
                <div className={`${styles.cardStatValue} ${styles.zamaText}`}>$1 B+</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Total Raised</div>
                <div className={`${styles.cardStatValue} ${styles.zamaText}`}>$130 M</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Current TPS</div>
                <div className={`${styles.cardStatValue} ${styles.zamaText}`}>20 / chain</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Target TPS</div>
                <div className={`${styles.cardStatValue} ${styles.zamaText}`}>1,000+</div>
              </div>
            </div>
          </div>

          {/* Midnight Card */}
          <div className={`${styles.card} ${styles.midnightCard}`}>
            <div className={styles.cardLogo}>
              <div className={`${styles.cardDot} ${styles.midnightDot}`}>M</div>
              <div>
                <div className={styles.cardName}>Midnight</div>
                <div className={styles.cardSub}>by Input Output Global (IOG)</div>
              </div>
            </div>
            <div className={styles.badgeRow}>
              <span className={`${styles.badge} ${styles.midnightBadge}`}>ZK Proofs</span>
              <span className={`${styles.badge} ${styles.midnightBadge}`}>Cardano Partner</span>
              <span className={`${styles.badge} ${styles.midnightBadge}`}>Kachina ZKP</span>
              <span className={`${styles.badge} ${styles.midnightBadge}`}>TypeScript DSL</span>
            </div>
            <p className={styles.textSm}>
              IOG's dedicated privacy blockchain using zk-SNARKs and the Kachina research protocol.
              Employs shielded/unshielded transaction duality with selective disclosure for
              regulatory compliance. NIGHT token live December 2025.
            </p>
            <div className={styles.cardStatRow}>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Token Supply</div>
                <div className={`${styles.cardStatValue} ${styles.midnightText}`}>24 B NIGHT</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Distribution</div>
                <div className={`${styles.cardStatValue} ${styles.midnightText}`}>8 M wallets</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Target TPS</div>
                <div className={`${styles.cardStatValue} ${styles.midnightText}`}>1,000+</div>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatLabel}>Mainnet</div>
                <div className={`${styles.cardStatValue} ${styles.midnightText}`}>Q1 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE COMPARISON TABLE */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>📊</span> Feature Comparison Matrix
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Dimension</th>
                <th className={styles.cantonText}>🏛️ Canton</th>
                <th className={styles.zamaText}>🔬 Zama (fhEVM)</th>
                <th className={styles.midnightText}>🌑 Midnight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Privacy Mechanism</td>
                <td>Sub-transaction need-to-know; selective visibility via Daml rights & obligations model</td>
                <td>Fully Homomorphic Encryption (FHE) — computation on ciphertext, nothing ever decrypted</td>
                <td>zk-SNARKs via Kachina protocol — private state processed off-chain, ZK proof submitted on-chain</td>
              </tr>
              <tr>
                <td>Architecture</td>
                <td>Public-permissioned L1; "network of networks" via Global Synchronizer</td>
                <td>Confidentiality layer atop existing L1/L2 chains; coprocessor + gateway model</td>
                <td>Standalone L1 partner chain to Cardano; hybrid shielded/unshielded dual ledger</td>
              </tr>
              <tr>
                <td>Smart Contract Language</td>
                <td>Daml (purpose-built, formally verified, rights-based)</td>
                <td>Solidity (fhEVM library import) — no cryptography expertise needed</td>
                <td>Compact (TypeScript-based DSL) — low barrier for JS/TS developers</td>
              </tr>
              <tr>
                <td>Target Market</td>
                <td>Regulated financial institutions, TradFi, RWAs, capital markets</td>
                <td>DeFi, GameFi, AI/ML, healthcare, identity — any EVM chain use case</td>
                <td>Enterprise dApps, decentralised identity, regulatory-compliant DeFi</td>
              </tr>
              <tr>
                <td>Decentralisation</td>
                <td>Permissioned validators; institutional KYC required — limited public participation</td>
                <td>Public permissionless — anyone can run a coprocessor node (stake required)</td>
                <td>Public permissionless; PoS + Minotaur hybrid consensus (PoW + PoS)</td>
              </tr>
              <tr>
                <td>Regulatory Stance</td>
                <td>Privacy <em>for</em> compliance — built-in Basel, GDPR, right-to-be-forgotten alignment</td>
                <td>Privacy-first; compliance via selective ACL decryption keys — flexible, developing frameworks</td>
                <td>"Rational Privacy" — private by default, selective disclosure for audits/compliance</td>
              </tr>
              <tr>
                <td>Interoperability</td>
                <td>Inter-app atomic swaps within Canton ecosystem; DTCC integration planned H1 2026</td>
                <td>Chain-agnostic — wraps Ethereum, Solana, any EVM chain without core modification</td>
                <td>Cardano ecosystem primary; multi-chain bridges in future roadmap</td>
              </tr>
              <tr>
                <td>Quantum Resistance</td>
                <td>No specific post-quantum design; relies on standard crypto assumptions</td>
                <td>FHE is lattice-based — inherently post-quantum resistant by mathematical structure</td>
                <td>Current zk-SNARKs not post-quantum; Halo2 recursive proofs improve efficiency but not PQC</td>
              </tr>
              <tr>
                <td>Performance (Current)</td>
                <td>High throughput for financial workflows; $280B/day repo trades proven in production</td>
                <td>~20 TPS per chain on testnet; significant compute overhead per FHE operation</td>
                <td>Target 1,000 TPS; stress-test underway as of Feb 2026; not yet proven at scale</td>
              </tr>
              <tr>
                <td>Developer Experience</td>
                <td>Daml learning curve; specialist skill; strong enterprise tooling ecosystem</td>
                <td>Standard Solidity — existing Ethereum devs can adopt with library import</td>
                <td>TypeScript-like Compact DSL — broad accessibility; ZK circuit complexity abstracted</td>
              </tr>
              <tr>
                <td>Maturity</td>
                <td>Production — $6T+ assets, 575+ validators, DTCC partnership confirmed</td>
                <td>Testnet (Sepolia 2024); token launch Jan 2026; mainnet rollout in progress</td>
                <td>NIGHT token live Dec 2025; federated mainnet Q1 2026; still early</td>
              </tr>
              <tr>
                <td>Key Backers</td>
                <td>Goldman Sachs, Deutsche Bank, DTCC, Broadridge, Citadel, Tradeweb, DRW</td>
                <td>Pantera Capital, Blockchange Ventures; angel: Yakovenko (SOL), Gavin Wood, Juan Benet</td>
                <td>IOG / Charles Hoskinson; Cardano community; Fortune 500 partner (undisclosed)</td>
              </tr>
              <tr>
                <td>Token Utility</td>
                <td>Canton Coin — gas & global synchronizer; burn-and-mint model; ratio 3x from launch</td>
                <td>$ZAMA — fee payment & staking for coprocessor operators; sealed-bid Dutch auction launch</td>
                <td>NIGHT (governance, staking) + DUST (shielded gas, decaying/non-transferable)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* DIMENSIONAL SCORING */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>🎯</span> Dimensional Scoring (Out of 10)
        </div>
        <div className={styles.scoreTableWrap}>
          <table className={styles.scoreTable}>
            <thead>
              <tr>
                <th>Dimension</th>
                <th className={styles.cantonText}>🏛️ Canton</th>
                <th className={styles.zamaText}>🔬 Zama</th>
                <th className={styles.midnightText}>🌑 Midnight</th>
              </tr>
            </thead>
            <tbody>
              <ScoreRow dimension="Privacy Strength (theoretical)" scores={[7, 10, 8.5]} />
              <ScoreRow dimension="Current Adoption / Traction" scores={[9.5, 5, 3.5]} />
              <ScoreRow dimension="Regulatory Compliance Fit" scores={[9.5, 6, 7.5]} />
              <ScoreRow dimension="Developer Accessibility" scores={[4, 9, 8]} />
              <ScoreRow dimension="Scalability & Performance" scores={[8.5, 4, 6.5]} />
              <ScoreRow dimension="Decentralisation" scores={[3, 7.5, 7]} />
              <ScoreRow dimension="Long-term Technological Edge" scores={[6, 9.5, 7.5]} />
              <ScoreRow dimension="Ecosystem & Network Effects" scores={[9, 5.5, 5]} />
            </tbody>
          </table>
        </div>

        {/* STRENGTHS & WEAKNESSES */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>⚖️</span> Strengths & Weaknesses
        </div>
        <div className={styles.swGrid}>
          <StrengthWeaknessCard
            name="Canton Network"
            icon="🏛️"
            colorClass={styles.cantonBg}
            strengths={[
              { title: "Proven production scale", desc: "$6T+ assets and $280B/day repo trading demonstrate real-world institutional viability — not theoretical." },
              { title: "Regulatory-first design", desc: "Built with Basel III, GDPR, and right-to-be-forgotten in mind. Financial regulators are already comfortable with its architecture." },
              { title: "Elite institutional buy-in", desc: "DTCC, Goldman, Deutsche Bank, Citadel, and Tradeweb participation creates a powerful network moat that is extraordinarily difficult to displace." },
              { title: "Daml maturity", desc: "Formally verified smart contract language reduces critical contract bugs — essential for multi-trillion dollar settlements." },
              { title: "Privacy without performance cost", desc: "Sub-transaction privacy is computationally cheap compared to ZK or FHE; achieves institutional-grade confidentiality at scale today." },
            ]}
            weaknesses={[
              { title: "Not truly decentralised", desc: "Permissioned validator model means censorship risk and dependency on institutional gatekeepers — antithetical to crypto ethos." },
              { title: "Privacy relies on trust, not math", desc: "Participants trust that validators don't collude. Zama and Midnight offer cryptographic privacy guarantees; Canton offers contractual ones." },
              { title: "Proprietary ecosystem lock-in", desc: "Daml is not open-standard; enterprises building on it face vendor dependency on Digital Asset." },
              { title: "No quantum resistance", desc: "When post-quantum threats materialise, Canton's cryptographic foundations will require significant re-engineering." },
            ]}
          />

          <StrengthWeaknessCard
            name="Zama (fhEVM)"
            icon="🔬"
            colorClass={styles.zamaBg}
            strengths={[
              { title: "Strongest theoretical privacy", desc: 'FHE is the "holy grail of cryptography" (Craig Gentry, IBM). No other approach allows computation on encrypted data with zero decryption.' },
              { title: "Chain-agnostic infrastructure", desc: "Unlike Canton and Midnight which build new chains, Zama upgrades existing chains (Ethereum, Solana, others) — massive addressable market with no migration needed." },
              { title: "EVM developer base", desc: "Using Solidity with a library import means 200,000+ existing Ethereum developers can build confidential apps immediately." },
              { title: "Post-quantum resistant", desc: "Lattice-based FHE cryptography is quantum-secure by design — a durable long-term advantage as quantum computing matures." },
              { title: "Multi-vertical applicability", desc: "Privacy for DeFi, AI inference, healthcare, elections, enterprise — not limited to financial services like Canton." },
            ]}
            weaknesses={[
              { title: "Performance bottleneck (critical)", desc: "FHE operations are 1,000–10,000x slower than plaintext computation. Current 20 TPS per chain is insufficient for most production workloads." },
              { title: "Hardware dependency", desc: "Practical performance requires custom ASICs. Mass ASIC availability is years away and introduces centralisation risk in hardware production." },
              { title: "Unproven at mainnet scale", desc: "Only on testnet as of early 2026. The gap between testnet performance and production reliability is where many privacy protocols have stumbled." },
              { title: "Regulatory ambiguity", desc: "Full data confidentiality makes AML/KYC compliance harder to demonstrate; institutions in regulated sectors face friction adopting FHE without clear legal frameworks." },
            ]}
          />

          <StrengthWeaknessCard
            name="Midnight"
            icon="🌑"
            colorClass={styles.midnightBg}
            strengths={[
              { title: "Strong ZK foundations", desc: "The Kachina research protocol provides a rigorous academic basis. zk-SNARKs are more battle-tested in production than FHE, with the Ethereum ZK rollup ecosystem as proof." },
              { title: '"Rational Privacy" philosophy', desc: "Private-by-default with selective disclosure is the ideal regulatory compromise — more privacy than Canton, more compliance-friendliness than Zcash/Monero." },
              { title: "Developer accessibility", desc: "Compact (TypeScript-based) dramatically lowers the barrier. TypeScript is one of the most popular languages globally — enormous potential developer pool." },
              { title: "Cardano ecosystem leverage", desc: "Inherits Cardano's 8 million+ wallet ecosystem, Stake Pool Operators, and IOG's extensive research pedigree (Haskell, Plutus, Ouroboros PoS)." },
              { title: "Large airdrop reach", desc: "Distribution to 8M wallets creates broad grassroots ownership and community incentive alignment from day one." },
            ]}
            weaknesses={[
              { title: "Cardano ecosystem constraints", desc: "Cardano's relatively niche DeFi ecosystem, slower dApp growth, and ongoing developer mindshare challenges cap Midnight's near-term addressable market." },
              { title: "DUST token mechanics are unproven", desc: "A decaying, non-transferable gas token is novel — but novelty creates user confusion and potential liquidity friction that could hamper adoption." },
              { title: "Still in federated mainnet", desc: 'Q1 2026 launch is "federated" with IOG controlling key nodes — not fully decentralised yet. Dependency on the undisclosed Fortune 500 partner introduces opacity.' },
              { title: "Not post-quantum", desc: "zk-SNARKs based on elliptic curves are vulnerable to quantum computers. This is a long-horizon but real risk compared to Zama's FHE approach." },
            ]}
          />
        </div>

        {/* SHORT-TERM PROGNOSIS */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>⏱️</span> Short-Term Prognosis (1–3 Years, 2026–2028)
        </div>
        <div className={styles.verdictGrid}>
          <div className={styles.verdictCard}>
            <div className={styles.verdictHeader}>
              <h3>🏆 Likely Winners</h3>
              <p>Protocols positioned to dominate by 2028</p>
            </div>
            <div className={styles.verdictBody}>
              <VerdictItem
                rank={1}
                name="Canton Network"
                colorClass={styles.cantonText}
                reason="Canton is the clear short-term front-runner. Its institutional moat is already in place. DTCC's tokenisation of US Treasuries in H1 2026 is a watershed moment — once the settlement backbone of US financial markets runs on Canton, competitors face a near-insurmountable switching cost."
              />
              <VerdictItem
                rank={2}
                name="Zama (fhEVM)"
                colorClass={styles.zamaText}
                reason="Zama will establish itself as the leading privacy infrastructure layer for DeFi and Web3 in the short term — but primarily for non-time-sensitive, high-value operations where 20 TPS is acceptable. By 2028, expect 1–2 notable production DeFi protocols running on fhEVM at meaningful volumes."
              />
              <VerdictItem
                rank={3}
                name="Midnight"
                colorClass={styles.midnightText}
                reason="Midnight will grow within the Cardano ecosystem and attract decentralised identity and privacy-focused dApps. However, its federated mainnet launch and Cardano's limited DeFi presence create friction that will likely keep Midnight as a niche player through 2028."
              />
            </div>
          </div>

          <div className={styles.verdictCard}>
            <div className={styles.verdictHeader}>
              <h3>⚠️ Short-Term Failure Risks</h3>
              <p>What could derail each protocol 2026–2028</p>
            </div>
            <div className={styles.verdictBody}>
              <RiskVerdictItem
                icon="🏛️"
                name="Canton: Low Failure Risk"
                colorClass={styles.cantonText}
                reason="The primary risk is regulatory backlash — if the SEC or EU regulators move to ban or heavily restrict private settlement networks, Canton's institutional clients will retreat quickly. A data breach at a major validator could trigger a trust crisis."
              />
              <RiskVerdictItem
                icon="🔬"
                name="Zama: Medium Failure Risk"
                colorClass={styles.zamaText}
                reason="Zama's biggest short-term risk is the performance gap. If ASIC development stalls or production TPS stays under 100, adoption will be limited to niche use cases while faster ZK alternatives capture the mass market."
              />
              <RiskVerdictItem
                icon="🌑"
                name="Midnight: High Failure Risk"
                colorClass={styles.midnightText}
                reason="Midnight faces the highest short-term failure risk. IOG's track record of delayed deliverables, combined with an unproven DUST token model and dependency on Cardano's limited DeFi ecosystem, creates compounding risks."
              />
            </div>
          </div>
        </div>

        {/* LONG-TERM PROGNOSIS */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>🔭</span> Long-Term Prognosis (3+ Years, 2029 and Beyond)
        </div>
        <div className={styles.verdictGrid}>
          <div className={styles.verdictCard}>
            <div className={styles.verdictHeader}>
              <h3>🚀 Long-Term Winners</h3>
              <p>Who leads the privacy paradigm in 2029+</p>
            </div>
            <div className={styles.verdictBody}>
              <VerdictItem
                rank={1}
                name="Zama (fhEVM)"
                colorClass={styles.zamaText}
                reason="Long-term, Zama has the most transformative potential. As FHE hardware matures — likely by 2028–2030 — the performance gap closes dramatically. FHE's post-quantum resistance becomes a decisive advantage as quantum computing progresses. Zama's chain-agnostic model means it wins whether Ethereum, Solana, or an entirely new L1 dominates."
              />
              <VerdictItem
                rank={2}
                name="Canton Network"
                colorClass={styles.cantonText}
                reason="Canton will likely remain the dominant institutional settlement layer for regulated financial assets through the next decade — but its long-term growth ceiling is lower than Zama's. Its permissioned architecture makes it unsuitable for the decentralised web's expansion into identity, AI, and sovereign computation."
              />
              <VerdictItem
                rank={3}
                name="Midnight"
                colorClass={styles.midnightText}
                reason="Midnight's long-term success is the most binary. If Cardano experiences a significant resurgence in developer and DeFi activity, Midnight becomes a powerful privacy backbone. However, if Cardano continues to lag Ethereum and Solana, Midnight will remain niche."
              />
            </div>
          </div>

          <div className={styles.verdictCard}>
            <div className={styles.verdictHeader}>
              <h3>⚠️ Long-Term Failure Scenarios</h3>
              <p>Structural risks that could unwind each protocol</p>
            </div>
            <div className={styles.verdictBody}>
              <RiskVerdictItem
                icon="🏛️"
                name="Canton: The Regulatory Capture Trap"
                colorClass={styles.cantonText}
                reason="Canton's greatest long-term existential risk is that its permissioned nature makes it vulnerable to regulatory co-optation — governments could mandate surveillance backdoors that undermine the privacy guarantees institutions rely on."
              />
              <RiskVerdictItem
                icon="🔬"
                name="Zama: The Hardware Centralisation Risk"
                colorClass={styles.zamaText}
                reason="Zama's long-term Achilles heel is the hardware bottleneck. If FHE ASIC production concentrates in a small number of manufacturers, the decentralised vision of Zama's coprocessor network becomes theoretical."
              />
              <RiskVerdictItem
                icon="🌑"
                name="Midnight: The Platform Risk Scenario"
                colorClass={styles.midnightText}
                reason="Midnight's fate is inextricably tied to Cardano's. If the Cardano ecosystem fails to attract significant DeFi liquidity and developer talent, Midnight will be building privacy infrastructure for a shrinking platform."
              />
            </div>
          </div>
        </div>

        {/* EXPERT QUOTES */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>💬</span> Expert & Industry Perspectives
        </div>
        <div className={styles.quotesGrid}>
          <QuoteCard
            colorClass={styles.zamaQ}
            text='"FHE is the holy grail of cryptography — the ability to compute on encrypted data without decrypting it has been the field&apos;s greatest open problem for decades. Zama&apos;s progress in making it practical is genuinely historic."'
            author="Craig Gentry"
            role="IBM Research — Inventor of Practical FHE"
          />
          <QuoteCard
            colorClass={styles.zamaQ}
            text='"The industry is entering a &apos;privacy renaissance&apos; era — one that deeply integrates open blockchain with the practical needs of global finance. FHE-based protocols are experiencing a surge in development opportunities."'
            author="Pantera Capital"
            role="Lead Investor, Zama Series B — June 2025"
          />
          <QuoteCard
            colorClass={styles.cantonQ}
            text='"Canton&apos;s convergence of growth trends signals it has crossed a critical threshold: proven that blockchain infrastructure can meet institutional requirements for privacy, compliance, and interoperability without compromising composability."'
            author="DTCC / TRM Labs Research"
            role="Post DTCC-Canton Partnership Announcement — 2025"
          />
          <QuoteCard
            colorClass={styles.cantonQ}
            text='"The Canton Network represents the clearest path for blockchain to touch the trillions of dollars in traditional financial assets. It solves the core dilemma: privacy for institutions without sacrificing the power of public connectivity."'
            author="Tiger Research"
            role="Canton Network: Most Realistic Blockchain — 2024"
          />
          <QuoteCard
            colorClass={styles.midnightQ}
            text='"Midnight&apos;s &apos;rational privacy&apos; approach — private by default, selectively disclosed for compliance — represents the ideal philosophical framework for mainstream enterprise blockchain adoption."'
            author="CoinGecko Research"
            role="Midnight Network Guide to Programmable Privacy — 2025"
          />
          <QuoteCard
            colorClass={styles.neutralQ}
            text='"Unlike TEE-based solutions or ZK-only approaches, FHE offers mathematical privacy guarantees without hardware trust assumptions. When ASICs close the performance gap, the competitive dynamics of on-chain privacy will shift profoundly."'
            author="Zama Protocol Research"
            role="Competitive Landscape Analysis — fhEVM Litepaper"
          />
        </div>

        {/* RISK REGISTER */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>🚨</span> Risk Register
        </div>
        <div className={styles.riskGrid}>
          <RiskCard
            name="Canton"
            icon="🏛️"
            badges={[
              { label: "Low Near-Term Risk", level: "low" },
              { label: "Medium Long-Term Risk", level: "medium" },
            ]}
            risks={[
              "Regulatory mandate for surveillance backdoors in private settlement layers",
              "Daml developer scarcity limiting ecosystem growth velocity",
              "Validator collusion or data leak at institutional node undermines trust model",
              "Smart contract exploit at DTCC-scale triggers regulatory moratorium",
              "Post-quantum vulnerability exposure as quantum computing timeline accelerates",
            ]}
          />
          <RiskCard
            name="Zama"
            icon="🔬"
            badges={[
              { label: "High Performance Risk", level: "high" },
              { label: "Medium Regulatory Risk", level: "medium" },
            ]}
            risks={[
              "ASIC hardware development stalls — sustained sub-100 TPS kills institutional use cases",
              "Regulatory classification of fully encrypted on-chain transactions as AML risk",
              "Coprocessor consensus failure or FHE circuit exploit in production",
              "Hardware oligopoly in FHE ASIC production undermines decentralisation",
              "Competing privacy approaches achieve comparable security with 100x better performance",
            ]}
          />
          <RiskCard
            name="Midnight"
            icon="🌑"
            badges={[
              { label: "High Platform Risk", level: "high" },
              { label: "High Execution Risk", level: "high" },
            ]}
            risks={[
              "Cardano ecosystem stagnation caps Midnight's addressable market ceiling",
              "IOG execution delays extending federated mainnet period beyond 2026",
              "DUST token confusion and friction reducing developer and user adoption",
              "Ethereum native ZK privacy (EIP-7503 or equivalent) absorbs core value proposition",
              "zk-SNARKs post-quantum vulnerability without clear upgrade roadmap",
            ]}
          />
        </div>

        {/* SYNTHESIS */}
        <div className={styles.sectionTitle}>
          <span className={styles.icon}>🧠</span> Synthesis & Recommendation
        </div>
        <div className={styles.synthesisCard}>
          <p>
            The three protocols occupy fundamentally different market positions, and the competitive
            dynamics between them are less zero-sum than they appear.{" "}
            <strong className={styles.cantonText}>Canton</strong> dominates the regulated financial
            infrastructure layer and will likely remain the institutional standard for tokenised
            assets through at least 2030. This is the safest bet for short-term relevance — it's
            already winning.
          </p>
          <p>
            <strong className={styles.zamaText}>Zama</strong> is the most technically ambitious and
            long-term transformative play. It is essentially betting that FHE hardware will follow a
            Moore's Law-like improvement curve — a bet that is well-supported by the ASIC
            development roadmap and substantial VC capital. If and when FHE reaches 1,000+ TPS at
            scale (likely 2028–2030), Zama becomes the most powerful privacy primitive in existence.
          </p>
          <p>
            <strong className={styles.midnightText}>Midnight</strong> is the most speculative of the
            three. Its success is contingent on Cardano's broader trajectory and IOG's execution,
            two variables with significant uncertainty. The "rational privacy" philosophy and
            TypeScript accessibility are genuine assets, but they need a thriving platform to
            express their value.
          </p>
          <p>
            <strong>The deeper insight</strong> is that these three protocols likely co-exist serving
            distinct layers of the emerging privacy stack: Canton for regulated institutional
            settlement, Zama as the universal confidential compute layer, and Midnight (if
            successful) as the consumer/developer-facing privacy chain. The "privacy renaissance"
            Pantera describes is large enough for all three to grow — the question is whether each
            can execute before the window of opportunity narrows.
          </p>
        </div>

        <div className={styles.disclaimer}>
          <strong>⚠️ Disclaimer:</strong> This analysis is for informational and research purposes
          only. It does not constitute financial or investment advice. Blockchain protocol success
          depends on numerous unpredictable factors including regulatory changes, technical
          execution, market conditions, and competitive dynamics. Scores and rankings reflect
          subjective analysis based on publicly available information as of February 2026.
        </div>
      </div>

      {/* FOOTER */}
      <div className={styles.footer}>
        <p>
          Sources:{" "}
          <a href="https://www.canton.network/protocol">canton.network</a> ·{" "}
          <a href="https://docs.zama.org/protocol/zama-protocol-litepaper">zama.org</a> ·{" "}
          <a href="https://midnight.network/">midnight.network</a> ·{" "}
          <a href="https://www.mexc.com/news/185545">Pantera Partners Analysis</a> ·{" "}
          <a href="https://www.bankless.com/read/confidentiality-layer-zama-wraps-blockchains-in-privacy">Bankless</a> ·{" "}
          <a href="https://reports.tiger-research.com/p/canton-network-most-realistic-blockchain-eng">Tiger Research</a> ·{" "}
          <a href="https://www.coingecko.com/learn/midnight-network-guide-programmable-privacy">CoinGecko</a> ·{" "}
          <a href="https://www.trmlabs.com/resources/blog/dtcc-canton-and-the-next-phase-of-tokenized-market-infrastructure">TRM Labs</a>
        </p>
        <p style={{ marginTop: "8px" }}>
          Generated February 25, 2026 · Privacy Protocol Comparison Report
        </p>
      </div>
    </div>
  )
}

function ScoreRow({ dimension, scores }: { dimension: string; scores: [number, number, number] }) {
  return (
    <tr>
      <td>{dimension}</td>
      <td>
        <div className={`${styles.barWrap} ${styles.barCanton}`}>
          <div className={styles.barBg}>
            <div className={styles.barFill} style={{ width: `${scores[0] * 10}%` }} />
          </div>
          <span className={styles.barScore}>{scores[0]}</span>
        </div>
      </td>
      <td>
        <div className={`${styles.barWrap} ${styles.barZama}`}>
          <div className={styles.barBg}>
            <div className={styles.barFill} style={{ width: `${scores[1] * 10}%` }} />
          </div>
          <span className={styles.barScore}>{scores[1]}</span>
        </div>
      </td>
      <td>
        <div className={`${styles.barWrap} ${styles.barMidnight}`}>
          <div className={styles.barBg}>
            <div className={styles.barFill} style={{ width: `${scores[2] * 10}%` }} />
          </div>
          <span className={styles.barScore}>{scores[2]}</span>
        </div>
      </td>
    </tr>
  )
}

function StrengthWeaknessCard({
  name,
  icon,
  colorClass,
  strengths,
  weaknesses,
}: {
  name: string
  icon: string
  colorClass: string
  strengths: { title: string; desc: string }[]
  weaknesses: { title: string; desc: string }[]
}) {
  return (
    <div className={styles.swCard}>
      <div className={`${styles.swHeader} ${colorClass}`}>
        {icon} {name}
      </div>
      <div className={styles.swBody}>
        <div className={`${styles.swSectionTitle} ${styles.strengthTitle}`}>Strengths</div>
        <ul className={`${styles.swList} ${styles.strengthList}`}>
          {strengths.map((s, i) => (
            <li key={i}>
              <strong>{s.title}:</strong> {s.desc}
            </li>
          ))}
        </ul>
        <div className={`${styles.swSectionTitle} ${styles.weaknessTitle}`}>Weaknesses</div>
        <ul className={`${styles.swList} ${styles.weaknessList}`}>
          {weaknesses.map((w, i) => (
            <li key={i}>
              <strong>{w.title}:</strong> {w.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function VerdictItem({
  rank,
  name,
  colorClass,
  reason,
}: {
  rank: number
  name: string
  colorClass: string
  reason: string
}) {
  const rankClass = rank === 1 ? styles.rank1 : rank === 2 ? styles.rank2 : styles.rank3
  return (
    <div className={styles.verdictItem}>
      <div className={`${styles.verdictRank} ${rankClass}`}>{rank}</div>
      <div>
        <div className={`${styles.verdictProtocol} ${colorClass}`}>{name}</div>
        <div className={styles.verdictReason}>{reason}</div>
      </div>
    </div>
  )
}

function RiskVerdictItem({
  icon,
  name,
  colorClass,
  reason,
}: {
  icon: string
  name: string
  colorClass: string
  reason: string
}) {
  return (
    <div className={styles.verdictItem}>
      <div className={styles.riskIcon}>{icon}</div>
      <div>
        <div className={`${styles.verdictProtocol} ${colorClass}`}>{name}</div>
        <div className={styles.verdictReason}>{reason}</div>
      </div>
    </div>
  )
}

function QuoteCard({
  colorClass,
  text,
  author,
  role,
}: {
  colorClass: string
  text: string
  author: string
  role: string
}) {
  return (
    <div className={`${styles.quoteCard} ${colorClass}`}>
      <div className={styles.quoteText}>{text}</div>
      <div className={styles.quoteAuthor}>{author}</div>
      <div className={styles.quoteRole}>{role}</div>
    </div>
  )
}

function RiskCard({
  name,
  icon,
  badges,
  risks,
}: {
  name: string
  icon: string
  badges: { label: string; level: "low" | "medium" | "high" }[]
  risks: string[]
}) {
  return (
    <div className={styles.riskCard}>
      <div className={styles.riskTitle}>
        {icon} {name}
        {badges.map((b, i) => (
          <span
            key={i}
            className={`${styles.riskBadge} ${
              b.level === "low" ? styles.riskLow : b.level === "medium" ? styles.riskMedium : styles.riskHigh
            }`}
          >
            {b.label}
          </span>
        ))}
      </div>
      <ul className={styles.riskList}>
        {risks.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  )
}
