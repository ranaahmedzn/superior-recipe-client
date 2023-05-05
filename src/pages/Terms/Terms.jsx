import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='max-w-screen-xl mx-auto p-5'>
            <div>
                <h2 className='text-5xl font-bold font-poppins  mt-10 mb-3'>Terms and Conditions:</h2>
                <p className='text-gray-600 mb-5'>
                    Welcome to our Italian foods website. By accessing and using this website, you agree to be bound by the following terms and conditions:

                    1. Use of Website

                    a. You agree to use this website for lawful purposes only.

                    b. You agree not to use this website in any way that may cause damage or impairment to the website or its content.

                    c. You agree not to use this website to copy, reproduce, distribute, or sell any of the content without our express written permission.

                    d. You agree not to use any data mining, robots, or similar data gathering and extraction tools to extract any information from the website.

                    2. Intellectual Property Rights

                    a. All content on this website, including but not limited to text, graphics, images, logos, and software, is the property of the website owner or its content suppliers.

                    b. You may not use any content from this website without our express written permission.

                    c. Any unauthorized use of the content may result in legal action.

                    3. Disclaimer of Liability

                    a. We make no warranty or representation as to the accuracy or completeness of the information on this website.

                    b. We shall not be liable for any damages arising from the use of this website or its content.

                    c. We shall not be liable for any damages arising from any third-party links on this website.

                    4. Governing Law and Jurisdiction

                    a. These terms and conditions shall be governed by and construed in accordance with the laws of Italy.

                    b. Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Italy.

                    5. Changes to Terms and Conditions

                    a. We reserve the right to update these terms and conditions at any time without prior notice.

                    b. By continuing to use this website, you agree to be bound by the updated terms and conditions.

                    Thank you for visiting our Italian foods website.
                </p>
                <Link to='/register'>
                    <button className='submit-btn flex gap-2 items-center'>
                        <FaHome />
                        <span>Back to Register</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Terms;