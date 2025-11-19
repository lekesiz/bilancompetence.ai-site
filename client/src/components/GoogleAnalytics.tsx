// Google Analytics helper functions
// Note: gtag.js is loaded in index.html

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Helper functions for tracking events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (!window.gtag) {
    console.warn('[GA] Google Analytics not initialized');
    return;
  }

  window.gtag('event', eventName, eventParams);
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', {
    form_name: formName,
  });
};

export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
};

export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
  });
};
