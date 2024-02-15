import { PersonalInfoFormData } from "../types/FormTypes";

export type PersonalInfoFormError = {
  name: string | null,
  email: string | null,
  phone: string | null
}

type PersonalInfoFormProps = {
  data: PersonalInfoFormData,
  onChange: React.Dispatch<React.SetStateAction<PersonalInfoFormData>>,
  error: PersonalInfoFormError
}

export default function PersonalInfoForm({ data, onChange, error }: PersonalInfoFormProps) {

  const inputStyle = "my-2 rounded-md border h-12 w-full indent-4 font-medium hover:cursor-pointer focus:border-purplish_blue focus:outline-none";
  const labelStyle = "text-sm text-marine_blue font-bold"
  
  return (
    <div className=" px-6 py-8 ds:px-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
      <h1 className="font-extrabold text-[32px] text-marine_blue mb-1">Personal info</h1>
      <p className="text-cool_gray mb-8 text-[15.5px]">Please provide your name, email, address, and phone number.</p>
      <div className="my-2">
        <div className="flex justify-between">
          <label className={labelStyle}>Name</label>
          {error.name && <p className="text-sm font-bold text-strawberry_red">{error.name}</p>}
        </div>
        <input
          className={`${inputStyle} ${error.name ? 'border-strawberry_red' : 'border-light_gray'}`}
          type="text"
          placeholder="e.g. Stephen King"
          value={data.name}
          onChange={(e) => onChange(prev => ({ ...prev, name: e.target.value }))}
          required
          autoFocus
        />
      </div>
      <div className="my-2">
        <div className="flex justify-between">
          <label className={labelStyle}>Email Address</label>
          {error.email && <p className="text-sm font-bold text-strawberry_red">{error.email}</p>}
        </div>
        <input
          className={`${inputStyle} ${error.email ? 'border-strawberry_red' : 'border-light_gray'}`}
          type="text"
          placeholder="e.g stephenking@lorem.com"
          value={data.email}
          onChange={(e) => onChange(prev => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>
      <div className="my-2">
        <div className="flex justify-between">
          <label className={labelStyle}>Phone Number</label>
          {error.phone && <p className="text-sm font-bold text-strawberry_red">{error.phone}</p>}
        </div>
        <input
          className={`${inputStyle} ${error.phone ? 'border-strawberry_red' : 'border-light_gray'}`}
          type="text"
          placeholder="e.g +1 234 567 890"
          value={data.phone}
          onChange={(e) => onChange(prev => ({ ...prev, phone: e.target.value }))}
          required
        />
      </div>
    </div>
  )
}