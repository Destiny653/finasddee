"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [temp, setTemp] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value;
    setTemp(next);
    document.cookie = `NEXT_LOCALE=${next}; Path=/; Max-Age=${60 * 60 * 24 * 365}`;
    router.refresh();
  };

  return (
    <select
      value={temp ?? locale}
      onChange={onChange}
      className="border border-gray-300 rounded-md text-sm px-2 py-1 bg-white text-gray-700"
      aria-label="Language"
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}
