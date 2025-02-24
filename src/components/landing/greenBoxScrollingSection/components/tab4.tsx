const Tab4 = () => {
    return (
        <div className='text-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-center'>
                <div className='text-center col-span-2 '>
                    <img src="/assets/svg/greenhouse-box-state-4.svg" alt="Greenhouse Box" className="mx-auto w-[70%] lg:w-[65%]"/>
                </div>
                <div className='flex justify-center mt-10 lg:mt-0'>
                    <ul className='text-left w-[80%] lg:w-full justify-content-center lg:justify-content-left p-0'>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Assisting farmers in crop choice and planning</span>
                        </li>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Trials and world-class protocol building</span>
                        </li>
                        <li className='flex items-start'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Easy WhatsApp and on-call advisory</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tab4