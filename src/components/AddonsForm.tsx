import checkMark from '../assets/check-mark-svgrepo-com.svg';
import { AddonsFormData } from '../types/FormTypes';

type AddonsFormProps = {
  addons: AddonsFormData,
  onChange: React.Dispatch<React.SetStateAction<AddonsFormData>>
}

export default function AddonsForm({addons, onChange}: AddonsFormProps ) {

  const handleAddonSelection = (selectedAddon: string) => {
    onChange({...addons, selectedAddon: !addons[selectedAddon]});

  }

  return (
    <div className=" px-6 py-8 ds:px-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
      <h1 className="font-extrabold text-[32px] text-marine_blue mb-1">Pick add-ons</h1>
      <p className="text-cool_gray mb-8 text-[15.5px]">Add-ons help enhance your gaming experience.</p>
      <div className="card justify-between items-center" onClick={() => handleAddonSelection('onlineService')}>
        <div className="flex items-center gap-4">
          <div className='relative flex'>
            <input className="appearance-none w-5 h-5 border border-1 border-light_gray rounded bg-purplish_blue" type="checkbox" />
            <img className='absolute top-1 left-1' src={checkMark} />
          </div>
          <div>
            <h4>Online Services</h4>
            <p className="text-sm text-cool_gray" >Access to multiplayer games</p>
          </div>
        </div>
        <p className="text-sm text-purplish_blue" >+$1/mo</p>
      </div>
    </div>
  )
}
