export interface GoogleUser {
  uid?: string;
  name?: string | null;
  email?: string | null;
  avatar?: string | null;
}

const REMEMBER_EMAIL_KEY = 'rememberEmail';
const EMAIL_SUGGESTIONS_KEY = 'emailSuggestions';
const GOOGLE_USER_KEY = 'googleUser';

const parseJson = <T>(value: string | null, fallback: T): T => {
  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

export const saveRememberEmail = (email: string) => {
  localStorage.setItem(REMEMBER_EMAIL_KEY, email);
};

export const getRememberEmail = () => {
  return localStorage.getItem(REMEMBER_EMAIL_KEY) || '';
};

export const removeRememberEmail = () => {
  localStorage.removeItem(REMEMBER_EMAIL_KEY);
};

export const saveEmailSuggestion = (email: string) => {
  const normalizedEmail = email.trim();

  if (!normalizedEmail) {
    return getEmailSuggestions();
  }

  const saved = getEmailSuggestions();
  const updated = [
    normalizedEmail,
    ...saved.filter((item) => item !== normalizedEmail),
  ].slice(0, 5);

  localStorage.setItem(
    EMAIL_SUGGESTIONS_KEY,
    JSON.stringify(updated)
  );

  return updated;
};

export const getEmailSuggestions = () => {
  return parseJson<string[]>(
    localStorage.getItem(EMAIL_SUGGESTIONS_KEY),
    []
  );
};

export const saveGoogleUser = (user: GoogleUser) => {
  localStorage.setItem(GOOGLE_USER_KEY, JSON.stringify(user));
};

export const getGoogleUser = () => {
  return parseJson<GoogleUser>(
    localStorage.getItem(GOOGLE_USER_KEY),
    {}
  );
};
