import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Donate = () => {
    const titleRef = useScrollAnimation({ yStart: 50, opacityStart: 0 });
    const cardsRef = useScrollAnimation({ yStart: 80, opacityStart: 0, delay: 0.2 });
    
    return (
        <section id="donate" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" ref={titleRef}>
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Support Your Alma Mater
                    </h2>
                    <p className="mt-4 text-xl text-gray-300 leading-relaxed font-medium">
                        Your alma mater shaped your earliest dreams and stood as the foundation of your journey.
                        Now, you can be the guiding light for the dreamers walking the same halls. 
                        Every contribution, big or small, helps write a brighter future for the next generation.
                    </p>
                    <div className="mt-8">
                        <a
                            href="https://forms.gle/3MACJYcPqgHD9sCRA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-blue-500/30"
                        >
                            Donate Now
                        </a>
                    </div>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2" ref={cardsRef}>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Bank Details
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex flex-col sm:flex-row justify-between">
                                <span className="font-medium text-gray-300">
                                    Account Name:
                                </span>
                                <span className="text-gray-400">ABV-IIITM ALUMNI ASSOCIATION</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <span className="font-medium text-gray-300">Bank:</span>
                                <span className="text-gray-400">
                                    Bank of India (IIITM Campus, Gwalior)
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <span className="font-medium text-gray-300">
                                    Account Number:
                                </span>
                                <span className="text-gray-400">945210100125037</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <span className="font-medium text-gray-300">IFSC Code:</span>
                                <span className="text-gray-400">BKID0009462</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Support Initiatives
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Cultural festival (Aurora), technical fest
                                    (Infotsav), sports fest (Urja and Twaran)
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Hostel upgradation and facilities
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Student scholarships and fee support
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Research labs and development activities
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="ml-3 text-gray-300">
                                    If supporting any special initiatives like following the please explicitly mention at the donation email at alumninet@iiitm.ac.in.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 bg-gray-900 border border-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-white mb-5">
                            We welcome alumni to support the following in kind contributions. For details, please contact us at alumninet@iiitm.ac.in.
                        </h3>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <h4 className="font-medium text-gray-200 mb-2">
                                    Curriculum Development
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Share your expertise to improve academic
                                    programs
                                </p>
                            </div>
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <h4 className="font-medium text-gray-200 mb-2">Mentorship</h4>
                                <p className="text-sm text-gray-400">
                                    Guide students and startups
                                </p>
                            </div>
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <h4 className="font-medium text-gray-200 mb-2">
                                    Industry Connect
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Help establish MOUs and placement
                                    opportunities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
