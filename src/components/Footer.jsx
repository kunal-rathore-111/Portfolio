
export default function Footer() {
    return (
        <footer className="p-8 w-full flex flex-col items-center justify-center text-center gap-2 relative overflow-hidden">
            <div className="flex flex-col items-center w-full max-w-[98vw]">

                <span className="font-playfair text-2xl md:text-3xl italic font-light mb-10 opacity-80 flex flex-col gap-6">
                    <span className="flex flex-col gap-2">
                        Designed & Developed <br /> by,
                        <span className="text-red-600 dark:text-yellow-400 text-4xl md:text-5xl font-vogue">
                            Kunal Rathore
                        </span>
                    </span>
                    <span className="text-lg md:text-xl font-vogue">
                        © 2026 - All rights reserved
                    </span>
                </span>
            </div>
        </footer>
    )
}