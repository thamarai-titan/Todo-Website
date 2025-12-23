    "use client";
    import {ButtonHTMLAttributes,ReactNode} from "react";

    interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
        children: ReactNode,
        className?: string,
        variant: "primary" | "secondary" | "shadow";
    }

    export default function Button({children,className,variant,...props}:ButtonProps){
        const baseStyles = "transition-colors duration-150 ease-in-out disabled:opacity-50 cursor-pointer"

        const variantStyles = {
            primary: "px-2 md:px-3 py-2 rounded-lg bg-[var(--btn-color)] text-[var(--btn-text)] text-sm font-light hover:-translate-y-1 hover:shadow-md transform transition duration-200",
            secondary: "px-2 md:px-3 py-2 rounded-lg border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md",
            shadow: "px-2 py-2 rounded-2xl border border-gray-500 bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200",
        }

        const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

        return (
            <button
                className={styles}
                {...props}
            >
                {children}
            </button>
        )

    }
