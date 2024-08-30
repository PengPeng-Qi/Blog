"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    switch (metric.name) {
      // case "FCP":
      //   console.log(metric.name, metric);
      //   break;
      default:
        console.log(metric.name, metric);
    }
  });
  return <></>;
}
