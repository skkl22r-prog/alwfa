import { useState } from "react";

const Rsvp = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("حطي رابط Apps Script هنا", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        attending,
      }),
    });

    alert("تم تسجيل الحضور");

    setName("");
    setAttending("");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl text-center mb-6">
        تأكيد الحضور
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3"
          required
        />

        <select
          value={attending}
          onChange={(e) => setAttending(e.target.value)}
          className="w-full border rounded-lg p-3"
          required
        >
          <option value="">اختاري</option>
          <option value="yes">سأحضر</option>
          <option value="no">لن أتمكن من الحضور</option>
        </select>

        <button
          type="submit"
          className="w-full rounded-lg p-3"
        >
          تأكيد الحضور
        </button>

      </form>
    </div>
  );
};

export default Rsvp;