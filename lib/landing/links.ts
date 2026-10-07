/* Links into the product app. The marketing site is a separate deployment on
   its own domain, so these are absolute URLs on the app host (see site.ts). */

import { appUrl } from "./site";

export const LOGIN_URL = appUrl("/auth/login");
export const DASHBOARD_URL = appUrl("/dashboard");
export const SIGN_UP_URL = appUrl("/auth/register");
export const FORGOT_PASSWORD_URL = appUrl("/auth/forgot-password");
