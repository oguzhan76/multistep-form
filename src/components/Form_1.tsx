export default function Form_1() {
  //send form data at unmount
  return (
    <div className="px-4 py-6">
      <h1 className="mt-1 font-extrabold text-2xl text-marine_blue mb-2">Personal info</h1>
      <p className="text-cool_gray mb-2">Please provide your name, email, address, and phone number.</p>
      <div className="my-2">
        <label className="text-sm text-marine_blue font-bold">Name</label>
        <br />
        <input
          className="rounded border border-light_gray h-10 w-full indent-4 font-medium"
          type="text"
          placeholder="e.g Stephen King"
        />
      </div>
      <div className="my-2">
        <label className="text-sm text-marine_blue font-bold">Email Address</label>
        <br />
        <input
          className="rounded border border-light_gray h-10 w-full indent-4 font-medium"
          type="text"
          placeholder="e.g stephenking@lorem.com"
        />
      </div>
      <div className="my-2">
        <label className="text-sm text-marine_blue font-bold">Phone Number</label>
        <br />
        <input
          className="rounded border border-light_gray h-10 w-full indent-4 font-medium"
          type="text"
          placeholder="e.g +1 234 567 890"
        />
      </div>
    </div>
  )
}
