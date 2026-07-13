export const soninkeResponses = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'hiya', 'greeting'],
    transliteration: 'Anga Soninke mukua ba lee ona andehma anahkalisi sende.',
    audioFile: null,
  },
  {
    id: 'send_money',
    keywords: ['send', 'money', 'transfer', 'remit', 'remittance'],
    transliteration:
      'Baa sendenya sankore bila, Kuringo do bani fula baka kili ka taa West Africa.',
    audioFile: null,
  },
  {
    id: 'fees',
    keywords: ['fee', 'fees', 'cost', 'charge', 'charges'],
    transliteration:
      'Kuringo ye fee basaara, o ye bijanbara, ka mansa fo o foyi.',
    audioFile: null,
  },
  {
    id: 'delivery',
    keywords: ['same day', 'same-day', 'fast', 'today', 'quick'],
    transliteration:
      'Sendi do bani fula, si tuma la, o ye taani, an nafee sa.',
    audioFile: null,
  },
  {
    id: 'support',
    keywords: ['support', 'help', 'assist', 'assistance'],
    transliteration:
      'N nafa yafa, Kuringo do ye a lafi si a foyi ka taa girima.',
    audioFile: null,
  },
]

export function getSoninkeResponse(query) {
  const normalized = query.toLowerCase()
  for (const response of soninkeResponses) {
    if (response.keywords.some((keyword) => normalized.includes(keyword))) {
      return response
    }
  }
  return {
    id: 'default',
    keywords: [],
    transliteration:
      'Anga n ye ka kadi. I naxa sariya ani sele, an nafa dafa a foyi.',
    audioFile: null,
  }
}
