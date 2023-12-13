import { IPayment } from '@/assets/Payment';
import CopyToClipboardButton from '@/components/Copy';
import Timer from '@/components/Timer';
import { Button } from '@/components/ui/button';
import React from 'react';

interface IProps {
  data: IPayment | undefined;
  onBack: () => void;
}
export default function Payment({ data, onBack }: IProps) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between border-b border-muted-foreground p-6 ">
          <div className="flex flex-col ">
            <p className="text-xl font-bold text-neutral-800">Send Payment</p>
            <p className=" max-w-[90%] text-muted ">
              Open your crypto wallet and scan the QR code, or copy the{' '}
              {data?.code} address below to make a payment.
            </p>
          </div>{' '}
          <Timer duration={3600} />
        </div>
        <div className=" flex items-center justify-center p-6">
          <img src={data?.QRCode} alt={data?.code} />
        </div>
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex flex-col">
            <p className="text-sm text-muted">{data?.code} Address</p>
            <p>{data?.address}</p>
          </div>
          <CopyToClipboardButton textToCopy={data?.address} />
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
