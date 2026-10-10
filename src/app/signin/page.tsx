'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';
const SignInPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user)

        const { data, error } = await authClient.signIn.email({
            email: user.email as string,
            password: user.password as string,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Successfully signed in!");
            console.log(data);
        }
        if (error) {
            toast.error("Invalid email or password. Please try again.");
            console.log(error);
        }
    };


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

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <button type="submit" className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>

            <button onClick={handleGoogleSignIn} className='btn'>Sign in with Google</button>
            <button onClick={handleGithubSignIn} className='btn'>Sign in with Github</button>
        </div>
    );
};

export default SignInPage;