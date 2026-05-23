import type { MetadataRoute } from "next";
import { DOCTORS } from "./lib/doctors-data";
import { CASES } from "./lib/cases-data";

const BASE_URL = "https://maviclinic.kz";

export default function sitemap(): MetadataRoute.Sitemap {
  const doctorUrls = DOCTORS.map((doctor) => ({
    url: `${BASE_URL}/doctors/${doctor.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseUrls = CASES.map((c) => ({
    url: `${BASE_URL}/cases/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...doctorUrls,
    ...caseUrls,
  ];
}
