import {requireNonNullish} from "./lib/util/requireNonNullish";

export const REACT_APP_API_KEY = requireNonNullish(process.env.REACT_APP_API_KEY);
export const REACT_APP_PROJECT_ID = requireNonNullish(process.env.REACT_APP_PROJECT_ID);
export const REACT_APP_STORAGE_BUCKET = requireNonNullish(process.env.REACT_APP_STORAGE_BUCKET);
export const REACT_APP_MESSAGING_SENDER_ID = requireNonNullish(process.env.REACT_APP_MESSAGING_SENDER_ID);
export const REACT_APP_APP_ID = requireNonNullish(process.env.REACT_APP_APP_ID);
export const REACT_APP_MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID;
export const REACT_APP_AUTH_DOMAIN = requireNonNullish(process.env.REACT_APP_AUTH_DOMAIN);
export const REACT_APP_DATABASE_URL = requireNonNullish(process.env.REACT_APP_DATABASE_URL);


/**
 * Without trailing slash, e.g. 'https://your.domain.com/base/url' or 'https://api.other.com'
 */
// export const REACT_APP_API_URL = requireNonNullish(process.env.REACT_APP_API_URL);

export const MAX_SITE_WIDTH = 1441;

export const AUTH_VERSION = 4;

export const LOADER_DEBUG = true;
