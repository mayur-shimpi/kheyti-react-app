const Tab1 = () => {
    return (
        <div className='text-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-center'>
                <div className='text-center lg:col-span-2'>
                    <img src="/assets/svg/greenhouse-box-state-1.svg" alt="Greenhouse Box" className="mx-auto w-[70%] lg:w-[65%]"/>
                </div>
                <div className='flex justify-center mt-10 lg:mt-0'>
                    <ul className='text-left lg:w-full justify-content-center lg:justify-content-left p-0'>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>High-quality installation</span>
                        </li>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Routine maintenance visits</span>
                        </li>
                        <li className='flex items-start'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Training on basic maintenance</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tab1