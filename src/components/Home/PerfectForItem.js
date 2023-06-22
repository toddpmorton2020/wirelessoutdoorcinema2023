import React, { useState, useEffect } from 'react'

const PerfectForItem = ({ item }) => {
    const [over, setOver] = useState();
    const boxRef = React.useRef(null);

    useEffect(() => {
        //console.log('mouse over',over)
    }, [over]);

    const handleMouseEnter = (id) => {
        setOver(id)
    };
    const Image = over == item.id ? item.imghover : item.img
    return (
        <div
            id={item.id}
            className='rollover-svg-item w-full mx-auto col-span-2 lg:mb-0 mb-4'
            ref={boxRef}
            onMouseOver={() => handleMouseEnter(item.id)}
            onMouseOut={() => handleMouseEnter('')}
        >

            <div className='border wblock  rounded-md border-grey-theater p-2 text-center h-full flex flex-col justify-start'>
                <div className='flex justify-center'>
                    <div>
                        <Image
                            style={{
                                maxWidt: ''
                            }}
                            className='my-3 pb-3 lg:pb-0 md:w-auto lg:h-9 h-16 mx-auto dynamic-svg design-plan-svg'
                        />
                    </div>
                </div>
                <p className="font-bold text-lg md:txt-2xl mb-3 rollover-color-title">
                    {item.title}
                </p>
                <p className="mb-3 text-sm">{item.text}</p>
            </div>
        </div>
    )
}

export default PerfectForItem
