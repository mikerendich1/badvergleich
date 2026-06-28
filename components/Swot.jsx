// Stärken-/Schwächen-Block im Testseiten-Stil (grüner / roter Kopfbalken).
// pros: Array aus { title?, text }  ·  cons: Array aus Strings

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2f9e44" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c0473a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
}

export default function Swot({ pros = [], cons = [] }) {
  return (
    <div className="swot">
      <div className="swot-block">
        <div className="swot-head pro">Stärken</div>
        <ul className="swot-list">
          {pros.map((p, i) => (
            <li key={i}>
              <CheckIcon />
              <span>
                {p.title ? (
                  <>
                    <b>{p.title}:</b> {p.text}
                  </>
                ) : (
                  p.text
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="swot-block">
        <div className="swot-head con">Schwächen</div>
        <ul className="swot-list">
          {cons.map((c, i) => (
            <li key={i}>
              <CrossIcon />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
