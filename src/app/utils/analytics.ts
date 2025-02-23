"use client";

import { sendGAEvent } from "@next/third-parties/google";

type GAEventParams = {
  event?: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

export const trackEvent = (params: GAEventParams) => {
  try {
    sendGAEvent("event", params.event || "user_interaction", {
      event_category: params.category,
      event_action: params.action,
      event_label: params.label,
      value: params.value,
      ...params,
    });
  } catch (error) {
    console.error("Error sending GA event:", error);
  }
};
