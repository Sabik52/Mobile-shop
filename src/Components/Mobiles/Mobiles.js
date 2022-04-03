import React from 'react';
import Mobile from './Mobile';




const Mobiles = () => {
    const mobiles = [
        {
          "id": "6249381bee656c4060b408a8",
          "picture": "http://placehold.it/32x32",
          "price": 225,
          "name": "Hill Young"
        },
        {
          "id": "6249381b632364dbad7a98d8",
          "picture": "http://placehold.it/32x32",
          "price": 277,
          "name": "Pittman Henderson"
        },
        {
          "id": "6249381bcf34dbb3b4024fa2",
          "picture": "http://placehold.it/32x32",
          "price": 264,
          "name": "Charmaine Gould"
        },
        {
          "id": "6249381bf22e0757d1dbdedd",
          "picture": "http://placehold.it/32x32",
          "price": 346,
          "name": "Kaye Thornton"
        },
        {
          "id": "6249381b8a8b416d77ecb867",
          "picture": "http://placehold.it/32x32",
          "price": 202,
          "name": "Washington Walters"
        },
        {
          "id": "6249381b01e0b0ab93d92493",
          "picture": "http://placehold.it/32x32",
          "price": 263,
          "name": "Ford Mcdonald"
        },
        {
          "id": "6249381bc96a73213446fca6",
          "picture": "http://placehold.it/32x32",
          "price": 350,
          "name": "Monica Mckinney"
        },
        {
          "id": "6249381bc155528097ec0e07",
          "price": 378,
          "name": "Yates Hendrix"
        }
      ]
    return (
        <div>
             <h1>Choose Your Favourite Mobile</h1>
             {
                mobiles.map(mobile => <Mobile
                  key= {mobile.id}
                  mobile = {mobile}
                ></Mobile>)
             }
        </div>
    );
};

export default Mobiles;