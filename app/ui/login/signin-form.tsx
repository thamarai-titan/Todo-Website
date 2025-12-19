import Button from "../components/button";

export default function SignInForm() {
    const labelStyle = "pb-3 text-md font-medium";
    const InputStyle = "rounded border border-zinc-700 py-1 px-2 mb-6";
    return (
        <form action="" className="border border-zinc-800 flex flex-col rounded-2xl p-6 bg-[#171717] text-white">
            <h2 className="text-[16px] font-semibold pb-3">Login to your account</h2>
            <p className="text-sm pb-4">Enter your email below to login to your account</p>
            <label htmlFor="" className={`${labelStyle}`}>Email</label>
            <input type="text" placeholder="John Doe" className={`${InputStyle}`} name="email"/>
            <label htmlFor="" className={`${labelStyle}`}>Password</label>
            <input type="text" placeholder="" className={`${InputStyle}`} name="password"/>
            <Button variant="primary" className="my-3" type="submit">
                Create Account
            </Button>
        </form>
    )
}