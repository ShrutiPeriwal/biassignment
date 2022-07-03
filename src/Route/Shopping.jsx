import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const Shopping = () => {
  const [cart, setCart] = useState({
    show: false,
    items: [],
  });
  const products = [
    {
      title: 'Round Neck White T-Shirt',
      imgUrl:
        'https://rukminim1.flixcart.com/image/800/960/l4vnbm80/t-shirt/3/l/x/xs-fc4356-metronaut-original-imagfzmvuvykzneg.jpeg?q=50',
      price: 299,
      index: 0,
    },
    {
      title: 'Round Neck Blue T-Shirt',
      imgUrl:
        'https://rukminim1.flixcart.com/image/800/960/kzd147k0/t-shirt/q/z/m/m-tsrt-303-reya-original-imagbefyffzh68wj.jpeg?q=50',
      price: 399,
      index: 1,
    },
    {
      title: 'Round Neck Grey T-Shirt',
      imgUrl:
        'https://rukminim1.flixcart.com/image/800/960/kkfrjww0/t-shirt/h/1/t/l-t312-cgblwh-new-eyebogler-original-imafzs5hrjgzsfpr.jpeg?q=50',
      price: 499,
      index: 2,
    },
  ];
  console.log(cart.items);
  return (
    <>
      <div>
        <nav className="bg-[#2E64BC] text-white font-semibold text-xl flex flex-row justify-between items-center mb-4">
          <IconButton
            onClick={e => {
              setCart(prev => {
                return { ...prev, show: false };
              });
            }}
          >
            <HomeIcon />
          </IconButton>
          <h1 className="">Shopping App</h1>
          <IconButton
            onClick={e => {
              setCart(prev => {
                return { ...prev, show: true };
              });
            }}
          >
            <ShoppingCartIcon color="action" />
            {cart.items.length}
          </IconButton>
        </nav>
        {/* Product Grid */}
        {!cart.show && (
          <>
            {/* Product Grid */}
            <h1 className="text-center font-semibold text-4xl mb-6">
              Our Items
            </h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 text-start bg-slate-100 p-4">
              {products.map((el, ind) => {
                return (
                  <div className="p-2 flex flex-col bg-cyan-100 " key={ind}>
                    <img
                      src={el.imgUrl}
                      alt={el.title}
                      srcset=""
                      className="h-60"
                    />
                    <h1>{el.title}</h1>
                    <h2>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <h1>
                      <span>Price:Rs</span>
                      {el.price}
                    </h1>
                    <Button
                      variant="contained"
                      id={ind}
                      onClick={e => {
                        setCart(prev => {
                          console.log(prev);
                          return {
                            ...prev,
                            items: [...prev.items, e.target.id],
                          };
                        });
                      }}
                    >
                      Add To Cart
                    </Button>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Cart Page  -Main Container*/}
        {cart.show && (
          <>
            <h1 className="text-center font-semibold text-4xl mb-6">
              You Have Orderd
            </h1>
            {/* Cart Item Gallary */}
            <div className="flex flex-col justify-center items-center bg-slate-100 p-2">
              {cart.items.map((el, ind) => {
                return (
                  <div className="p-2 flex flex-row bg-cyan-100 w-3/4 mb-4">
                    <img
                      src={products[el]['imgUrl']}
                      alt={products[el]['title']}
                      srcset=""
                      className="h-40"
                    />
                    <div className="info flex flex-col items-center justify-center">
                      <h1>{products[el]['title']}</h1>
                      <h2>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </h2>
                      <h1>
                        <span>Price:Rs</span>
                        {products[el]['price']}
                      </h1>
                    </div>
                    <div className="Center">
                      <Button
                        variant="contained"
                        color="error"
                        id={ind}
                        onClick={e => {
                          console.log(ind);
                          setCart(prev => {
                            const list = [...prev.items];
                            list.splice(e.target.id, 1);
                            return {
                              ...prev,
                              items: list,
                            };
                          });
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Shopping;