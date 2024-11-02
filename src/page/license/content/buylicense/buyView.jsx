import React, { useState } from 'react';
import { BuyLicensePage } from './buylicense';
import { PolicyLicensePage } from './policyLicense';

export function BuyView() {

    const [isNextPage, setIsnextPage] = useState(true)
    const handleNextPage = () => {
        setIsnextPage(false);
    }
    const handleBackPage = () => {
        setIsnextPage(true)
    }
    return (
        <div className='container-fluid'>

            {isNextPage ? (
                <div className="">
                    <BuyLicensePage />
                    <div className="container mb-4">
                        <div className="mt-4 text-end">
                            <button onClick={handleNextPage} className="custom-button rounded border-0" >Tiếp tục</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="">
                    <div className="pt-5">
                        <button onClick={handleBackPage} className="custom-button rounded border-0" >Quay lại</button>
                    </div>
                    <PolicyLicensePage />
                </div>
            )}
        </div>
    );
}
