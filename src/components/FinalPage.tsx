import thankyou from '../assets/icon-thank-you.svg';

export default function FinalPage() {
    return (
        <div className=" px-6 py-20 ds:px-4 ds:pl-16 ds:pr-10 ds:pt-32 ds:pb-6 ds:max-w-[550px] text-center items-center flex justify-center flex-col ">
            <img className='w-14 h-14 mb-4 ds:mb-6 ds:w-20 ds:h-20' src={thankyou} />
            <h1 className="font-extrabold text-[24px] ds:text-[32px] text-marine_blue mb-2">Thank you!</h1>
            <p className="text-cool_gray mb-6 ds:mb-8 text-base ds:text-[15.5px]">
                Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>

        </div>
    )
}
