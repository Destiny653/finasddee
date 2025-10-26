import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

// Convert flat dotted keys (e.g. "nav.sendMoney") into nested objects
function nestifyMessages(flat) {
  const out = {};
  for (const [key, value] of Object.entries(flat || {})) {
    const parts = key.split('.');
    let cur = out;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLeaf = i === parts.length - 1;
      if (isLeaf) {
        cur[part] = value;
      } else {
        if (typeof cur[part] !== 'object' || cur[part] === null) {
          cur[part] = {};
        }
        cur = cur[part];
      }
    }
  }
  return out;
}

export default getRequestConfig(async ({requestLocale}) => {
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value;
  let locale = cookieLocale || (await requestLocale) || 'en';

  return {
    locale,
    messages: nestifyMessages((await import(`./messages/${locale}.json`)).default)
  };
});
