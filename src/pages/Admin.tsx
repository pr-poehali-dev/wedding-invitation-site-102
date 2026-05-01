import { useEffect, useState } from "react";

const RSVP_LIST_URL = "https://functions.poehali.dev/4b28b3fd-5291-4da2-96d4-2d356eddeeab";

interface Response {
  id: number;
  name: string;
  phone: string;
  attending: string;
  parts: string;
  alcohol: string;
  transport: string;
  wishes: string;
  created_at: string;
}

export default function Admin() {
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(RSVP_LIST_URL)
      .then((r) => r.json())
      .then((data) => {
        setResponses(data.responses || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Не удалось загрузить ответы");
        setLoading(false);
      });
  }, []);

  const attending = responses.filter((r) => r.attending === "Придёт").length;
  const notAttending = responses.filter((r) => r.attending === "Не придёт").length;

  return (
    <div style={{ minHeight: "100vh", background: "#f4f7f2", padding: "32px 16px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ color: "#2d5a2d", fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          Ответы гостей
        </h1>

        {!loading && !error && (
          <div style={{ display: "flex", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: "16px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#2d5a2d" }}>{responses.length}</div>
              <div style={{ fontSize: 13, color: "#666" }}>Всего ответов</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, padding: "16px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#2d7a2d" }}>{attending}</div>
              <div style={{ fontSize: 13, color: "#666" }}>Придут</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, padding: "16px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#c0392b" }}>{notAttending}</div>
              <div style={{ fontSize: 13, color: "#666" }}>Не придут</div>
            </div>
          </div>
        )}

        {loading && (
          <div style={{ textAlign: "center", padding: 60, color: "#666" }}>Загрузка...</div>
        )}

        {error && (
          <div style={{ background: "#ffeaea", borderRadius: 10, padding: 20, color: "#c0392b" }}>{error}</div>
        )}

        {!loading && !error && responses.length === 0 && (
          <div style={{ background: "#fff", borderRadius: 12, padding: 40, textAlign: "center", color: "#888" }}>
            Пока никто не ответил на анкету
          </div>
        )}

        {!loading && !error && responses.length > 0 && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <thead>
                <tr style={{ background: "#2d5a2d", color: "#fff" }}>
                  {["Дата", "Имя", "Телефон", "Присутствие", "Части", "Алкоголь", "Транспорт", "Пожелания"].map((h) => (
                    <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {responses.map((r, i) => (
                  <tr key={r.id} style={{ background: i % 2 === 0 ? "#fff" : "#f9fbf9", borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px 14px", fontSize: 12, color: "#888", whiteSpace: "nowrap" }}>{r.created_at}</td>
                    <td style={{ padding: "10px 14px", fontWeight: 600, color: "#1a3a1a", whiteSpace: "nowrap" }}>{r.name}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, whiteSpace: "nowrap" }}>{r.phone}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13 }}>
                      <span style={{
                        display: "inline-block",
                        padding: "2px 10px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 600,
                        background: r.attending === "Придёт" ? "#e8f5e9" : "#ffeaea",
                        color: r.attending === "Придёт" ? "#2d7a2d" : "#c0392b",
                      }}>
                        {r.attending}
                      </span>
                    </td>
                    <td style={{ padding: "10px 14px", fontSize: 13 }}>{r.parts}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13 }}>{r.alcohol}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13 }}>{r.transport}</td>
                    <td style={{ padding: "10px 14px", fontSize: 13, maxWidth: 200, color: r.wishes === "—" ? "#bbb" : "#333" }}>{r.wishes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
