"use client";

import { useEffect } from "react";
import { trackEvent } from "@/app/utils/analytics";

interface PageViewTrackerProps {
  pageType: string;
  title?: string;
  slug?: string;
}

export function PageViewTracker({
  pageType,
  title,
  slug,
}: PageViewTrackerProps) {
  useEffect(() => {
    trackEvent({
      event: "page_view",
      category: pageType,
      action: "view_post",
      label: title || slug || pageType,
    });
  }, [pageType, title, slug]);

  return null;
}
