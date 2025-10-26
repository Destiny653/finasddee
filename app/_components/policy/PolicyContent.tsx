"use client";

import { useLocale } from 'next-intl'
import React from 'react'

import PrivacyEn from '@/app/_content/policy/privacy.en'
import PrivacyFr from '@/app/_content/policy/privacy.fr'
import CookieEn from '@/app/_content/policy/cookie.en'
import CookieFr from '@/app/_content/policy/cookie.fr'
import UserAgreementEn from '@/app/_content/policy/user-agreement.en'
import UserAgreementFr from '@/app/_content/policy/user-agreement.fr'

export type PolicySlug = 'privacy' | 'cookie' | 'user-agreement'

export default function PolicyContent({ slug }: { slug: PolicySlug }) {
  const localeRaw = useLocale()
  const locale = (localeRaw || 'en').toLowerCase().split('-')[0]

  if (slug === 'privacy') {
    return locale === 'fr' ? <PrivacyFr /> : <PrivacyEn />
  }
  if (slug === 'cookie') {
    return locale === 'fr' ? <CookieFr /> : <CookieEn />
  }
  if (slug === 'user-agreement') {
    return locale === 'fr' ? <UserAgreementFr /> : <UserAgreementEn />
  }
  return null
}
