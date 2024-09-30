export type PaymentCardType = {
  image: string
  name: string
  cardLastDigit?: number
  lastSecretBit?: string
  isPrimary: boolean
  validTill?: string
}
