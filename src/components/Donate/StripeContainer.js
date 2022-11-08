import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe} from '@stripe/stripe-js'
import PaymentFrom from './PaymentFrom'

const PUBLIC_KEY = "pk_live_51M1HAACXCszZ7Ve2916QEFncsTBDHKnwwXkOY6hqmDffBAGfW7ufSBow2eVXKaowMXWE5WjJ9tE8XvsIkGm8mA1z00bSprtDpX"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentFrom />
    </Elements>
  )
}

export default StripeContainer