'use client'

import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {

const onSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
e.preventDefault()

const formData = new FormData(e.target)
const user = Object.fromEntries(formData.entries())

 const { data, error } = await authClient.signUp.email({
            name: user.name as string,
            email: user.email as string,
            password: user.password as string,
            callbackURL: "/",
        })

if(data){
    toast.success("Successfully signed up!")
    redirect("/")
}
if(error){
    console.log(error)

}
}

const handleGoogleSignIn = async () => {
 const data = await authClient.signIn.social({
    provider: "google",
  });
}

const handleGithubSignIn = async () => {
     const data = await authClient.signIn.social({
    provider: "github",
})}

    return (
        <div>
             <form onSubmit={onSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>

<label className="label">Name</label>
<input type="text" name="name" className="input" placeholder="Name" />

<label className="label">Email</label>
<input type="email" name="email" className="input" placeholder="Email" />

<label className="label">Password</label>
<input type="password" name="password" className="input" placeholder="Password" />

  <button type="submit" className="btn btn-neutral mt-4">sign up</button>
</fieldset>
           </form>
            <button onClick={handleGoogleSignIn} className='btn'>Sign up with Google</button>
            <button onClick={handleGithubSignIn} className='btn'>Sign up with Github</button>
        </div>
    );
};

export default SignUpPage;