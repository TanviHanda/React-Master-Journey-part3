import {useForm, type SubmitHandler} from "react-hook-form"
interface FormData {
    name:string;
    email:string;
    password:string;
}
const Form1 = () => {
    const {register,
        handleSubmit,
        formState: {errors ,isSubmitted},
} = useForm<FormData>();
const onSubmit: SubmitHandler = (data) => {

}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" {...register('name',{required: 'name is required'})}/>

            {errors.name && <p className="text-red">{errors.name.message}</p>}
            
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" {...register('email',required:'email is required', pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })} />
        </div>
    </form>
  )
}

export default Form1