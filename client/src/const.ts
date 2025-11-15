export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "/logo.svg";

// Company information
export const COMPANY_NAME = "Netz Informatique";
export const COMPANY_PHONE = "+33 3 67 31 02 01";
export const COMPANY_EMAIL = "contact@netzinformatique.fr";
export const COMPANY_ADDRESS = "1 Rue de la Laiterie, 67500 HAGUENAU, France";

// Social links
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/netz-informatique",
  twitter: "https://twitter.com/netzinfo",
  facebook: "https://www.facebook.com/netzinformatique",
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
