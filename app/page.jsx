// app/page.jsx
export default function Home() {
  return (
    <main className="wrap">
      <header className="header">
        {/* Upload your logo to /public/assets/zevegan-logo.png */}
        <img className="logo" src="/assets/zevegan-logo.png" alt="Zevegan logo" />
        <h1>Launching Soon</h1>
        <p className="tag">
          ZeTrack — <span className="brand">Powered by Zevegan</span>
        </p>
        <p className="sub">India’s #1 AI Powered Nutritionist</p>
      </header>

      <section className="grid">
        <div className="card">
          <h2>Be first to try ZeTrack</h2>
          <p>
            Smart protein tracking, Indian‑meal AI analysis, macros pie‑charts,
            and goal‑based Zevegan product recommendations.
          </p>

          {/* ✅ Netlify Forms (no backend needed) */}
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="cta"
            onSubmit={(e) => {
              // inline success without redirect
              e.preventDefault();
              const form = e.target;
              const data = new FormData(form);
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(data).toString(),
              }).then((r) => {
                if (r.ok) {
                  form.reset();
                  document.getElementById("ok").style.display = "block";
                } else {
                  alert("Couldn’t submit. Email hello@zevegan.in");
                }
              });
            }}
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <input className="input" type="email" name="email" placeholder="Enter your email" required />
            <button className="btn" type="submit">Join the waitlist</button>
          </form>
          <div id="ok" className="success">Thanks! You’re on the list. 🎉</div>

          <ul className="bullets">
            <li><span className="dot" /> AI meal analyzer for roti, dal, idli, dosa, paneer.</li>
            <li><span className="dot" /> Hit your protein goal with progress bars & macros pie.</li>
            <li><span className="dot" /> Zevegan Store suggestions when you’re short on protein.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Countdown ⏳</h2>
          <p>We’re polishing the MVP. Target launch:</p>
          <div className="count">
            <div className="badge"><span id="d">00</span>Days</div>
            <div className="badge"><span id="h">00</span>Hours</div>
            <div className="badge"><span id="m">00</span>Min</div>
            <div className="badge"><span id="s">00</span>Sec</div>
          </div>

          <h2 style={{ marginTop: 18 }}>See the MVP</h2>
          <p><a className="pill" href="https://YOUR-MVP-LINK" target="_blank" rel="noopener">Open demo</a></p>
        </div>
      </section>

      <footer className="footer">
        <div className="links">
          <span className="pill">© {new Date().getFullYear()} Zevegan Private Limited</span>
          <a className="pill" href="mailto:hello@zevegan.in">Contact</a>
          <a className="pill" href="#" onClick={(e)=>{e.preventDefault(); alert('Educational estimates only. Not medical advice.')}}>Disclaimer</a>
        </div>
      </footer>

      {/* Countdown script */}
      <script dangerouslySetInnerHTML={{ __html: `
const target = new Date("2025-10-01T10:00:00+05:30").getTime();
const ids={d:document.getElementById('d'),h:document.getElementById('h'),m:document.getElementById('m'),s:document.getElementById('s')};
function tick(){const n=Date.now();let diff=Math.max(0,target-n);
const d=Math.floor(diff/86400000); diff-=d*86400000;
const h=Math.floor(diff/3600000); diff-=h*3600000;
const m=Math.floor(diff/60000); diff-=m*60000;
const s=Math.floor(diff/1000);
ids.d.textContent=String(d).padStart(2,'0');
ids.h.textContent=String(h).padStart(2,'0');
ids.m.textContent=String(m).padStart(2,'0');
ids.s.textContent=String(s).padStart(2,'0');}
tick(); setInterval(tick,1000);`}} />
    </main>
  );
}
