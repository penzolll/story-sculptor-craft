import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import mascot from "@/assets/mascot.png";
import meme1 from "@/assets/meme-1.jpg";
import meme2 from "@/assets/meme-2.jpg";
import meme3 from "@/assets/meme-3.jpg";

const CA = "KoPiCat11111111111111111111111111111111111";
const DEX = "https://jup.ag/swap/SOL-" + CA;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$KOPI — Meme Coin Kucing Ngopi di Solana" },
      {
        name: "description",
        content:
          "$KOPI adalah meme coin kucing paling kafein di Solana. Lihat lore, tokenomics, cara beli, roadmap, dan contract address resmi.",
      },
      { property: "og:title", content: "$KOPI — Meme Coin Kucing Ngopi di Solana" },
      {
        property: "og:description",
        content: "Lore, tokenomics, how to buy, dan meme gallery $KOPI. Ngopi dulu, baru ke bulan.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["lore", "Lore"],
  ["tokenomics", "Tokenomics"],
  ["how-to-buy", "How to Buy"],
  ["roadmap", "Roadmap"],
  ["memes", "Memes"],
];

const alloc = [
  { label: "Liquidity Pool (burned)", value: 60, color: "oklch(0.78 0.19 62)" },
  { label: "Community & Airdrop", value: 20, color: "oklch(0.72 0.16 145)" },
  { label: "Marketing / CEX", value: 12, color: "oklch(0.68 0.15 25)" },
  { label: "Dev (vested 6 bln)", value: 8, color: "oklch(0.6 0.05 60)" },
];

function Pie() {
  let start = 0;
  const stops = alloc
    .map((a) => {
      const end = start + a.value;
      const s = `${a.color} ${start}% ${end}%`;
      start = end;
      return s;
    })
    .join(", ");
  return (
    <div
      className="mx-auto aspect-square w-56 rounded-full border-2 border-border sm:w-72"
      style={{ backgroundImage: `conic-gradient(${stops})` }}
      role="img"
      aria-label="Alokasi token KOPI"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-1/2 w-1/2 flex-col items-center justify-center rounded-full bg-background text-center">
          <span className="font-display text-lg text-primary">1B</span>
          <span className="text-[10px] text-muted-foreground">supply</span>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-lg">
            <img src={mascot} alt="Maskot kucing $KOPI" width={40} height={40} className="h-9 w-9" />
            $KOPI
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-muted-foreground transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={DEX}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 font-display text-sm text-primary-foreground transition-transform hover:scale-105"
          >
            Buy Now
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero-bg border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-block rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                Built on Solana · Fair launch
              </span>
              <h1 className="mt-5 text-5xl leading-tight sm:text-6xl">
                $KOPI
                <span className="block text-primary">Kucing Ngopi</span>
              </h1>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                Kucing paling kafein di blockchain. Tidur 20 jam, pump 4 jam. Ngopi dulu, baru ke bulan.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={DEX}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow rounded-full bg-primary px-7 py-3 font-display text-primary-foreground transition-transform hover:scale-105"
                >
                  Buy on Jupiter
                </a>
                <a
                  href={`https://raydium.io/swap/?outputMint=${CA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-border px-7 py-3 font-display transition-colors hover:border-primary hover:text-primary"
                >
                  Raydium
                </a>
              </div>

              <div className="pop-card mt-8 p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Contract Address</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <code className="break-all text-sm text-primary">{CA}</code>
                  <button
                    onClick={copy}
                    className="rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                  <a className="hover:text-primary" href={`https://solscan.io/token/${CA}`} target="_blank" rel="noopener noreferrer">
                    Solscan ↗
                  </a>
                  <a className="hover:text-primary" href={`https://birdeye.so/token/${CA}`} target="_blank" rel="noopener noreferrer">
                    Birdeye ↗
                  </a>
                  <a className="hover:text-primary" href={`https://dexscreener.com/solana/${CA}`} target="_blank" rel="noopener noreferrer">
                    DexScreener ↗
                  </a>
                </div>
              </div>
            </div>

            <img
              src={mascot}
              alt="Maskot $KOPI: kucing oranye berkacamata hitam memegang secangkir kopi"
              width={1024}
              height={1024}
              className="wiggle mx-auto w-64 drop-shadow-2xl sm:w-80 md:w-full md:max-w-md"
            />
          </div>
        </section>

        {/* LORE */}
        <section id="lore" className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
            <h2 className="text-3xl sm:text-4xl">Lore</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Tahun 2021, seekor kucing oranye bernama Kopi tidur di atas laptop trader yang sedang
                buka chart. Tanpa sengaja pantatnya menekan tombol buy. Trader itu jadi kaya.
              </p>
              <p>
                Sejak hari itu, Kopi dipercaya punya insting market yang lebih tajam daripada 400 indikator.
                Dia cuma minta satu hal sebagai bayaran: kopi, tiap pagi, tanpa gula.
              </p>
              <p className="text-foreground">
                $KOPI lahir untuk membiayai kebiasaan ngopi kucing ini — dan komunitas yang percaya bahwa
                keputusan finansial terbaik dibuat setelah cangkir pertama.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Fair launch", "Tanpa presale, tanpa VC, tanpa insider."],
                ["LP burned", "Likuiditas dikunci selamanya."],
                ["Contract renounced", "Nggak ada yang bisa ngutak-ngatik."],
              ].map(([t, d]) => (
                <div key={t} className="pop-card p-5">
                  <h3 className="text-base text-primary">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOKENOMICS */}
        <section id="tokenomics" className="border-b border-border bg-card/30">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
            <div>
              <h2 className="text-3xl sm:text-4xl">Tokenomics</h2>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["Total Supply", "1,000,000,000"],
                  ["Buy / Sell Tax", "0% / 0%"],
                  ["Network", "Solana (SPL)"],
                  ["Mint Authority", "Revoked"],
                ].map(([k, v]) => (
                  <div key={k} className="pop-card p-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-display text-lg text-primary">{v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 space-y-3">
                {alloc.map((a) => (
                  <li key={a.label} className="flex items-center gap-3 text-sm">
                    <span className="h-4 w-4 rounded-sm" style={{ backgroundColor: a.color }} aria-hidden />
                    <span className="flex-1 text-muted-foreground">{a.label}</span>
                    <span className="font-display">{a.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <Pie />
          </div>
        </section>

        {/* HOW TO BUY */}
        <section id="how-to-buy" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <h2 className="text-3xl sm:text-4xl">How to Buy</h2>
            <p className="mt-3 text-muted-foreground">Baru pertama kali? Empat langkah, lima menit.</p>
            <ol className="mt-8 grid gap-5 md:grid-cols-4">
              {[
                ["Install Phantom", "Download wallet Phantom di HP atau extension browser, simpan seed phrase offline."],
                ["Beli SOL", "Beli SOL di exchange (Indodax, Binance, dll) lalu kirim ke alamat Phantom kamu."],
                ["Buka Jupiter", "Connect wallet di jup.ag, paste contract address $KOPI di kolom output."],
                ["Swap ke $KOPI", "Set slippage 3-5%, konfirmasi swap. Selamat, kamu resmi jadi kucing."],
              ].map(([t, d], i) => (
                <li key={t} className="pop-card p-6">
                  <span className="font-display text-3xl text-primary">0{i + 1}</span>
                  <h3 className="mt-3 text-base">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
            <h2 className="text-3xl sm:text-4xl">Roadmap</h2>
            <div className="mt-8 space-y-5">
              {[
                ["Phase 1 — Bangun Tidur", ["Fair launch di Raydium", "LP burn + renounce", "1.000 holder pertama"]],
                ["Phase 2 — Nyeruput", ["Trending DexScreener", "CoinGecko & CMC listing", "Meme contest mingguan"]],
                ["Phase 3 — Melek Total", ["Marketing push KOL", "10.000 holder", "Merch & sticker pack"]],
                ["Phase 4 — To The Moon (beneran)", ["Listing CEX tier-2", "Kolaborasi komunitas kucing", "Donasi shelter kucing"]],
              ].map(([title, items]) => (
                <div key={title as string} className="pop-card p-6">
                  <h3 className="text-lg text-primary">{title as string}</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                    {(items as string[]).map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEMES */}
        <section id="memes" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <h2 className="text-3xl sm:text-4xl">Meme Gallery</h2>
            <p className="mt-3 text-muted-foreground">Bikinan komunitas. Kirim punyamu di Telegram.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                [meme1, "Kucing $KOPI naik roket ke bulan"],
                [meme2, "Kucing $KOPI melototin chart hijau"],
                [meme3, "Kucing $KOPI tidur di atas cangkir kopi"],
              ].map(([src, alt]) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="pop-card w-full object-cover transition-transform hover:-rotate-2 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="hero-bg">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
            <h2 className="text-3xl sm:text-4xl">Join the Cat Cult</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Komunitas $KOPI hidup 24/7 — sama seperti kucingnya yang selalu bangun jam 3 pagi.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                ["Telegram", "https://t.me/"],
                ["X (Twitter)", "https://x.com/"],
                ["Discord", "https://discord.com/"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-border bg-card px-7 py-3 font-display transition-colors hover:border-primary hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl space-y-4 px-4 py-10 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-foreground">CA:</span>
            <code className="break-all text-primary">{CA}</code>
            <button onClick={copy} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p>
            Disclaimer: $KOPI adalah meme coin tanpa utilitas dan tanpa janji keuntungan finansial.
            Crypto sangat berisiko — DYOR dan jangan pakai uang dapur. Audit & LP burn proof tersedia di Solscan.
          </p>
          <p>© {new Date().getFullYear()} $KOPI. Dibuat oleh komunitas, untuk kucing.</p>
        </div>
      </footer>
    </div>
  );
}
