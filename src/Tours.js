import React from 'react'
import { useState } from 'react';


const TourInJordan = [

    {
        id: 1,
        name: "Petra",
        info: "one of Seven wonders of the world",
        img: "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 10

    },
    {
        id: 2,
        name: "Dead sea",
        info: "Lowest spot in the world",
        img: "https://images.pexels.com/photos/3370311/pexels-photo-3370311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 12

    },
    {
        id: 3,
        name: "Ma'in",
        info: "Hot water",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/7260168.jpg?k=3e753e89904344fb7b6080d2c4a233356ebc1c42f2ef274e661ddd0cefc16aa0&o=&hp=1",
        price: 14

    },
    {
        id: 4,
        name: "Wadi rum",
        info: "full of sand",
        img: "https://images.pexels.com/photos/10658089/pexels-photo-10658089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 10

    },
    {
        id: 5,
        name: "Petra",
        info: "one of Seven wonders of the world",
        img: "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 10

    },


]



const Tours = () => {
    const [selectedTour, setSelectedTour] = useState(null);

    function show(index) {
        if (selectedTour === index) {
            setSelectedTour(null);
        } else {
            setSelectedTour(index);
        }
    }

    return TourInJordan.map((tours, index) => (
        <div className="card">
            <h3 className='placeName'>{tours.name}</h3>
            <img src={tours.img} alt='Jordan place'></img>
            <div className='readMoreBtn'>
                <button onClick={() => show(index)}>read more</button>
                {selectedTour === index && (
                    <div>
                        <p>{tours.info}</p>
                    </div>
                )}
            </div>
        </div>
    ));
};

export default Tours