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
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl text-center mb-6">تأكيد الحضور</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* الاسم */}
        <input
          type="text"
          placeholder="اكتب اسمك الكريم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-pink-300 rounded-lg p-3"
          required
        />

        {/* خيارات الحضور */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setAttendance("yes")}
            className={`p-3 rounded-lg border ${
              attendance === "yes"
                ? "bg-pink-500 text-white border-pink-500"
                : "border-pink-300"
            }`}
          >
            تأكيد الحضور
          </button>

          <button
            type="button"
            onClick={() => setAttendance("no")}
            className={`p-3 rounded-lg border ${
              attendance === "no"
                ? "bg-pink-500 text-white border-pink-500"
                : "border-pink-300"
            }`}
          >
            الاعتذار عن الحضور
          </button>
        </div>

        {/* الرسالة */}
        <textarea
          placeholder="رسالة إلى العروسين (اختياري)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-pink-300 rounded-lg p-3"
          rows={3}
        />

        {/* زر الإرسال */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 text-white rounded-lg p-3"
        >
          {loading ? "جاري الإرسال..." : "تأكيد الإرسال"}
        </button>

      </form>
    </div>
  );
};

export default Rsvp;