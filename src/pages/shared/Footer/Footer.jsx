

const Footer = () => {
    return (
        <div>
            <footer className="footer gap-0 sm:footer-horizontal text-white lg:mt-16 mt-5 ">
                <aside className="bg-[#1F2937] w-full h-full justify-center  py-30">
                    <h1>CONTACT US</h1>
                    <p>
                        123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00 <br />
                    </p>
                </aside>
                <aside className="bg-[#111827] w-full h-full justify-center py-30">

                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content  p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;