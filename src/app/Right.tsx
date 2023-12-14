'use client';
import Coin, { gateway, gatewayPolygon } from '@/components/Coin';
import { CustomerForm } from '@/components/ContactForm';
import Timer from '@/components/Timer';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import Payment from './Payment';
import { IPayment, PaymentData } from '@/assets/Payment';
import { useRouter } from 'next/navigation';

export default function Right() {
  enum STEPS {
    CUSTOMER_DETAILS = 0,
    PAYMENT_GATEWAY = 1,
    PAYMENT_QR = 2,
  }
  const [step, setStep] = useState(STEPS.CUSTOMER_DETAILS);
  const [paymentWallet, setPaymentWallet] = useState<IPayment | undefined>(
    undefined,
  );
  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };
  const Wallet = (title: string) => {
    setPaymentWallet(
      PaymentData.find((paymentData) => paymentData.code === title),
    );
    onNext();
  };
  const router = useRouter();
  let body = (
    <>
      <div className="flex flex-col">
        <div className="w-full border-b border-muted-foreground p-6 ">
          <p className="text-xl font-bold text-neutral-800">
            Enter customer details
          </p>
        </div>
        <CustomerForm onNext={onNext} />
      </div>
    </>
  );

  if (step === STEPS.PAYMENT_GATEWAY) {
    body = (
      <>
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-between border-b border-muted-foreground p-6 ">
            <p className="text-xl font-bold text-neutral-800">Payment method</p>{' '}
            <Timer duration={3600} />
          </div>
          <div className="p-6">
            <p className="py-5 text-base">Express Checkout</p>
            <Button
              variant={'default'}
              className="text-md w-full  rounded-full"
              onClick={() => router.push('/sign-in')}
            >
              Pay with<span className="ml-1 font-bold"> coinbase</span>
            </Button>
            <p className="py-5 text-base">
              or select a cryptocurrency to pay with another wallet
            </p>
            <Coin data={gateway} Wallet={Wallet} />
            <p className="flex items-center py-5 text-sm font-bold">
              <span className="mr-2 rounded-full bg-primary p-1 font-bold text-white ">
                NEW
              </span>{' '}
              Now available on Polygon network{' '}
            </p>
            <Coin data={gatewayPolygon} Wallet={Wallet} />
          </div>
        </div>
        <div className="self-end border-muted-foreground p-6 max-lg:w-full max-lg:border-t">
          <Button
            variant={'secondary'}
            className="text-md rounded-full   font-bold max-lg:w-full "
            onClick={onBack}
          >
            Back
          </Button>
        </div>
      </>
    );
  }
  if (step === STEPS.PAYMENT_QR) {
    body = <Payment data={paymentWallet} onBack={onBack} />;
  }

  return (
    <div className="flex h-full min-h-[calc(100vh-24px)] flex-1 flex-col justify-between overflow-scroll border-l border-muted-foreground lg:p-6">
      <div className="flex flex-col gap-4 ">
        <div className="flex w-full gap-1 max-lg:p-6">
          <div
            className={`h-1 flex-1 rounded-sm ${
              step === STEPS.CUSTOMER_DETAILS
                ? 'bg-primary'
                : 'bg-muted-foreground'
            }`}
          />
          <div
            className={`${
              step === STEPS.PAYMENT_GATEWAY || step === STEPS.PAYMENT_QR
                ? 'bg-primary'
                : 'bg-muted-foreground'
            } h-1 flex-1
          rounded-sm`}
          />
        </div>
        <div className="flex min-h-[80px] items-center gap-6 rounded-sm border border-muted-foreground p-6 max-lg:flex-col max-lg:items-start max-lg:border-none">
          <img
            src="/images/logo.png"
            alt="image"
            className="max-h-[80px] max-w-[80px] max-lg:max-h-[200px] max-lg:max-w-[200px] "
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-neutral-800">50 Steps to Beach</h2>
            <p className="text-muted">
              Our beach home is located right off of the sandy white beaches,
              and is a perfect place for the whole family.{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-sm border border-muted-foreground max-lg:border-x-0 max-lg:border-b-0">
          {body}
        </div>
      </div>
      <p className="p-3 text-center text-muted sm:p-6">
        By completing payment you agree that the information you enter here will
        be sent to the payee who created this page, subject to their privacy
        policy. Your payment information will be processed by Coinbase Commerce
        on behalf of such payee.
      </p>
    </div>
  );
}
