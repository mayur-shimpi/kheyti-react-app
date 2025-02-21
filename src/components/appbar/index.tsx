import { PrimaryButton } from '../buttons'

const menuItems = [
    {
        id: 0,
        name: 'About Us',
        path: '#',
        isActive: false
    },
    {
        id: 1,
        name: 'Our Solution',
        path: '#',
        isActive: false
    },
    {
        id: 2,
        name: 'Partners and Supporters',
        path: '#',
        isActive: false
    },
    {
        id: 3,
        name: 'Join Us',
        path: '#',
        isActive: false
    },
    {
        id: 4,
        name: 'Recources',
        path: '#',
        isActive: false
    }

]

const Appbar = () => {
    return (
        <header className='w-full cronosMedium absolute top-0 left-0 z-10 bg-transparent text-center py-6 px-5 lg:px-10'>
            <div className='bg-[#00000082] lg:max-w-7xl backdrop-blur-md container mx-auto rounded-full px-3'>
                <div className='grid grid-cols-4 items-center'>
                    <div>
                        <img
                            src="./assets/common/logo-light.svg"
                            alt='Logo'
                            width={200}
                            height={80}
                            className='h-[50px] w-[100px] lg:h-[60px] lg:w-[120px] lg:ml-2'
                        />
                    </div>
                    <div className='col-span-2'>
                        <ul className='list-style-none flex items-center justify-center'>
                            {
                                menuItems?.map((item) => {
                                    return (
                                        <li key={item.id} >
                                            <a href={item.path} className='text-white text-lg px-3 py-3 whitespace-nowrap hover:text-primary400'>
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='text-right'>
                        <PrimaryButton 
                            name='Contact Us'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Appbar