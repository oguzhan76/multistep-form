import checkMark from '../assets/check-mark-svgrepo-com.svg';
import { AddonsFormData } from '../types/FormTypes';
import { AddonKeys } from '../types/FormTypes';
import { AddonOffers } from '../Data/Data';

type AddonsFormProps = {
  addons: AddonsFormData,
  onChange: React.Dispatch<React.SetStateAction<AddonsFormData>>
}

export default function AddonsForm({ addons, onChange }: AddonsFormProps) {

  const handleAddonSelection = (selectedAddon: string) => {
    onChange({ ...addons, [selectedAddon]: !addons[selectedAddon] });
  }

  return (
    <div className=" px-6 py-7 ds:px-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
      <h1 className="font-extrabold text-[24px] ds:text-[32px] text-marine_blue mb-1">Pick add-ons</h1>
      <p className="text-cool_gray mb-6 ds:mb-8 text-[15.5px]">Add-ons help enhance your gaming experience.</p>
      <Card addon={AddonKeys.ONLINESERVICE as string} addons={addons} onClick={handleAddonSelection}/>
      <Card addon={AddonKeys.LARGERSTORAGE as string} addons={addons} onClick={handleAddonSelection}/>
      <Card addon={AddonKeys.CUSTOMIZABLEPROFILE as string} addons={addons} onClick={handleAddonSelection}/>
    </div>
  )
}

type CardProps = {
  addon: string, 
  addons: AddonsFormData, 
  onClick: (value: string) => void
}

const Card = ({addon, addons, onClick}: CardProps) => {
  return (
    <div 
      className={`card px-4 py-2 ds:p-4 mb-4 justify-between items-center cursor-pointer select-none ${addons[addon] && 'selected-card'}`} 
      onClick={() => onClick(addon)}>
    <div className="flex items-center gap-6">
      <div className='relative flex'>
        <input
          type="checkbox"
          className="appearance-none w-5 h-5 border border-1 border-light_gray rounded checked:bg-purplish_blue"
          checked={addons[addon]}
          readOnly
        />
        <img className='absolute top-1 left-1' src={checkMark} />
      </div>
      <div>
        <h4 className='text-marine_blue font-bold'>{AddonOffers[addon].title}</h4>
        <p className="ds:text-sm text-xs text-cool_gray" >{AddonOffers[addon].subtitle}</p>
      </div>
    </div>
    <p className="text-sm text-purplish_blue" >+${AddonOffers[addon].price}/mo</p>
  </div>
  )
}