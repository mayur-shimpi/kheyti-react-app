
const Tab3 = () => {
    return (
        <div className='text-center'>
            <div className='grid grid-cols-3 items-center'>
                <div className='text-center col-span-2'>
                    <img src="/assets/svg/greenhouse-box-state-3.svg" alt="Green House Box" className="mx-auto w-full lg:w-[65%]" />
                </div>
                <div className='text-left'>
                    <ul className='text-left w-full justify-content-left p-0'>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Recommending crop and farm-specific inputs</span>
                        </li>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Farmer-friendly packaging</span>
                        </li>
                        <li className='flex items-start'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Timely last-mile delivery</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tab3