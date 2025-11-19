export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "/logo.svg";

// Company information
export const COMPANY_NAME = "Netz Informatique";
export const COMPANY_PHONE = "+33 3 67 31 02 01";
export const COMPANY_EMAIL = "contact@netzinformatique.fr";
export const COMPANY_ADDRESS = "1a Route de Schweighouse, 67500 Haguenau, France";
export const COMPANY_LEGAL_FORM = "SASU (Société par actions simplifiée à associé unique)";
export const COMPANY_CAPITAL = "1 000,00 €";
export const COMPANY_SIREN = "818 347 346";
export const COMPANY_RCS = "Strasbourg B 818 347 346";
export const COMPANY_TVA = "FR44818347346";
export const COMPANY_DIRECTOR = "Mikail Lekesiz";
export const COMPANY_DIRECTOR_TITLE = "Président";
export const BUSINESS_HOURS = "Lun-Sam: 09:00-12:00 / 14:00-18:00";
export const CERTIFICATIONS = { qualiopi: true, datadock: true };

// Social links
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/netz-informatique",
  twitter: "https://x.com/NetzInformatiq1",
  facebook: "https://www.facebook.com/informatiquehaguenau",
};

// Related websites
export const RELATED_SITES = {
  netzInformatique: "https://netzinformatique.fr",
  formationHaguenau: "https://formation-haguenau.fr",
  netzBlog: "https://netz-blog.fr",
  informatiqueHaguenau: "https://informatique-haguenau.fr",
};

// CPF link
export const CPF_LINK = "https://www.moncompteformation.gouv.fr/";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
