import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Showcase = () => {
  const imgCard = [
    {
      title: 'Image by Shruti',
      imgUrl:
        'https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      title: 'Image by Mike Anderson',
      imgUrl: 'https://www.stockvault.net/data/2007/03/01/102413/thumb16.jpg',
    },
    {
      title: 'Image by Nick Fury',
      imgUrl: 'https://www.stockvault.net/data/2009/07/22/109588/thumb16.jpg',
    },
  ];
  const [preview, setPreview] = useState({
    show: false,
    index: null,
  });
  // console.log(preview.index, preview.show);
  return (
    <>
      <div className="relative">
        <h1 className="text-xl text-center font-bold bg-blue-400 w-full mb-4">
          Photographer Showcase
        </h1>
        {/* Image Gallary */}
        <div className="grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 p px-24">
          {imgCard.map((el, ind) => {
            return (
              // Image Card Div
              <div
                className="flex flex-col item-center a justify-between"
                key={ind}
              >
                <div className="image w-[100%] h-[200px]">
                  <img
                    src={el.imgUrl}
                    alt={el.title}
                    srcset=""
                    className="h-[100%] w-[100%]"
                    id={ind}
                    onClick={e =>
                      setPreview(prev => {
                        return {
                          ...prev,
                          show: true,
                          index: e.target.id,
                        };
                      })
                    }
                  />
                </div>
                <h1 className="text-center">{el.title}</h1>
              </div>
            );
          })}
        </div>
        {/* Image Full Preview */}
        {preview.show && (
          <div className="flex items-center justify-center absolute top-10 right-5 left-5 w-[80%] h-[70vh] m-auto p-2">
            <div className="relative">
              <div className="absolute l right-0">
                <Tooltip
                  title="Close"
                  onClick={e =>
                    setPreview(prev => {
                      return { ...prev, show: false };
                    })
                  }
                >
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <img
                src={imgCard[preview.index]['imgUrl']}
                alt=""
                className="h-[100%] w-[100%] "
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Showcase;