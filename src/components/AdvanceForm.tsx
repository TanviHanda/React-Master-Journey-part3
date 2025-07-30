import { useForm, type SubmitHandler } from 'react-hook-form'

interface FormData {
  firstname: string
  lastname: string
  email: string
  city: string
  state: string
  zip: string
  country: string
  completeLocation: string
}

const AdvanceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-8">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-3xl font-sans">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Registration Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'First Name', id: 'firstname' },
            { label: 'Last Name', id: 'lastname' },
            { label: 'Email', id: 'email', type: 'email' },
            { label: 'City', id: 'city' },
            { label: 'State', id: 'state' },
            { label: 'Zip', id: 'zip' },
            { label: 'Country', id: 'country' },
            { label: 'Complete Location', id: 'completeLocation' },
          ].map((field) => (
            <div key={field.id} className="flex flex-col">
              <label htmlFor={field.id} className="text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type || 'text'}
                id={field.id}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                {...register(field.id as keyof FormData, {
                  required: `${field.label.toLowerCase()} is required`,
                  ...(field.id === 'email'
                    ? {
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'invalid email',
                        },
                      }
                    : {}),
                })}
              />
              {errors[field.id as keyof FormData] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.id as keyof FormData]?.message}
                </p>
              )}
            </div>
          ))}

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdvanceForm
