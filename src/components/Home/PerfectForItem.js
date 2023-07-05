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
            className='rollover-svg-item w-full mx-auto col-span-2 lg:mb-0 mb-3'
            ref={boxRef}
            onMouseOver={() => handleMouseEnter(item.id)}
            onMouseOut={() => handleMouseEnter('')}
        >

            <div className='border item_box rounded-md border-grey-theater md:p-2 px-3 py-2 text-center h-full flex flex-col justify-start'>
                <div className='flex justify-center'>
                    <div>
                        <Image
                            style={{
                                maxWidt: ''
                            }}
                            className='my-2 md:w-auto lg:h-9 h-14 mx-auto'
                        />
                    </div>
                </div>
                <p className="font-bold text-lg mb-1 rollover-color-title">
                    {item.title}
                </p>
                <p className="mb-3 sm:text-lg text-base">{item.text}</p>
            </div>
        </div>
    )
}

export default PerfectForItem
