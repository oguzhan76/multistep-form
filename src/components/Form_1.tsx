import { personalInfoData } from "../types/FormTypes";

export type PersonalInfoFormError = {
  name: string | null,
  email: string | null,
  phone: string | null
}

type Form1Props = {
  data: personalInfoData,
  onChange: React.Dispatch<React.SetStateAction<personalInfoData>>,
  error: PersonalInfoFormError
}

export default function Form_1({ data, onChange, error }: Form1Props) {

  const inputStyle = "my-2 rounded-md border border-light_gray h-12 w-full indent-4 font-medium";
  const inputStyle_error = "my-2 rounded-md border border-strawberry_red outline-none h-12 w-full indent-4 font-medium";
  const labelStyle = "text-sm text-marine_blue font-bold"
  
  return (
    <div className="pl-4 pr-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
      <h1 className="font-extrabold text-[32px] text-marine_blue mb-1">Personal info</h1>
      <p className="text-cool_gray mb-8 text-[15.5px]">Please provide your name, email, address, and phone number.</p>
      <div className="my-2">
        <div className="flex justify-between">
          <label className={labelStyle}>Name</label>
          {error.name && <p className="text-sm font-bold text-strawberry_red">{error.name}</p>}
        </div>
        <input
          className={error.name ? inputStyle_error : inputStyle}
          type="text"
          placeholder="e.g. Stephen King"
          value={data.name}
          onChange={(e) => onChange(prev => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div className="my-2">
        <div className="flex justify-between">
          <label className={labelStyle}>Email Address</label>
          {error.email && <p className="text-sm font-bold text-strawberry_red">{error.email}</p>}
        </div>
        <input
          className={error.email ? inputStyle_error : inputStyle}
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
          className={error.phone ? inputStyle_error : inputStyle}
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