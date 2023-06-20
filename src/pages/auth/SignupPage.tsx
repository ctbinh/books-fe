// import React from 'react'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Input from "../../components/Input"
import { Link } from "react-router-dom"
import { authService } from "../../services"
import { toast } from "react-toastify"

const SignupPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if(data.password !== data.confirmPassword) {
      toast.warning("Password does not match")
      return
    }
    try {
      const responseData = await authService.signup({email: data.email, password: data.password})
      console.log(responseData)
      toast.success("Account successfully created");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(err: any) {
      toast.error(err.message);
    }
  }

  return (
    <div className="mx-auto lg:p-24 p-6 gap-2 bg-none">
      <h1 className="font-bold mx-auto text-3xl max-w-2xl text-center text-sky-600">
        Create new account
      </h1>
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-12 max-w-md"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-3">
          <Input
            id="email"
            type="email"
            placeholder="Your email address"
            label="Email"
            register={register}
            errors={errors}
            required={true}
          />
          <Input
            id="password"
            type="password"
            placeholder="Your password"
            label="Password"
            register={register}
            errors={errors}
            required={true}
          />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            label="Confirm password"
            register={register}
            errors={errors}
            required={true}
          />
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full border border-sky-700 rounded-md hover:border hover:border-sky-700 bg-sky-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Create Account
          </button>
          <div className="text-center mt-3">Already have an account? 
            <Link className="text-sky-600" to={'/login'}> Log in</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignupPage