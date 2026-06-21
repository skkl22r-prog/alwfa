import { useState } from "react";

// Google Form action (NEW LINK)
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeCCc76FLMiqg_BMz4jLmcJ8RWBs0pYdOlhx0Rba1ZIbKxctQ/formResponse";

// Entry IDs (from your prefilled link)
const FIELD_NAME = "entry.2121080640";
const FIELD_ATTEND = "entry.1078161612";
const FIELD_MESSAGE = "entry.2105314445";

const Rsvp = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append(FIELD_NAME, name);
    formData.append(
      FIELD_ATTEND,
      attendance === "yes" ? "تأكيد الحضور" : "الاعتذار عن الحضور"
    );
    formData.append(FIELD_MESSAGE, message);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      alert("تم تسجيل الرد بنجاح");
      setName("");
      setAttendance("");
      setMessage("");
    } catch (err) {
      alert("صار خطأ بالإرسال");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="max-w-md mx-auto p-6 text-white">


<form
  onSubmit={handleSubmit}
  className="space-y-4 rounded-2xl p-5"
  style={{
    background: "#ffffff",
    border: "1.5px solid #B36E71",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  }}
>

        {/* الاسم */}
        <input
          type="text"
          placeholder="اكتب اسمك الكريم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-white/70"
style={{
  background: "rgba(255,255,255,0.10)",
  border: "1px solid #B36E71",
}}
        />

        {/* خيارات الحضور */}
        <div className="grid grid-cols-2 gap-2">

  {/* تأكيد الحضور */}
  <button
    type="button"
    onClick={() => setAttendance("yes")}
    className="rounded-xl px-3 py-3 text-sm border transition"
    style={{
      background:
        attendance === "yes"
          ? "#B36E71"
          : "rgba(255,255,255,0.10)",
      border: "1px solid #B36E71",
      color: attendance === "yes" ? "#fff" : "#fff",
    }}
  >
    تأكيد الحضور
  </button>

  {/* الاعتذار */}
  <button
    type="button"
    onClick={() => setAttendance("no")}
    className="rounded-xl px-3 py-3 text-sm border transition"
    style={{
      background:
        attendance === "no"
          ? "#B36E71"
          : "rgba(255,255,255,0.10)",
      border: "1px solid #B36E71",
      color: attendance === "no" ? "#fff" : "#fff",
    }}
  >
    الاعتذار عن الحضور
  </button>

</div>

        {/* الرسالة */}
        <textarea
          placeholder="رسالة إلى العروسين (اختياري)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
className="w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-white/70 resize-none"
style={{
  background: "rgba(255,255,255,0.10)",
  border: "1px solid #B36E71",
}}

        />

        {/* زر الإرسال */}
        <button
          type="submit"
          disabled={loading}
className="w-full rounded-full text-white px-5 py-3 text-sm font-medium shadow transition"
style={{
  background: "#B36E71",
}}
          {loading ? "جاري الإرسال..." : "تأكيد الإرسال"}
        </button>

      </form>
    </div>
  );
};

export default Rsvp;