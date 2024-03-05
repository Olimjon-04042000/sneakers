

  import React, {  useState } from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  
  import {useSelector } from "react-redux";
  import {useCounterActions} from "./stores/actions";



  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/navigation";
  import "swiper/css/thumbs";

  import { FreeMode, Navigation, Thumbs } from "swiper/modules";


  const Products = () => {
  

  const count=useSelector((state)=>state.count);
  const { increment, decrement } = useCounterActions();  
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
   

    return (
      <div className="mt-[90px] px-12 flex justify-between ">
        <div className="mb-[132px]">
          <div
            className="btn  h-[445px] border-none min-h-[445px] max-lg:w-[350px]  rounded shadow-none bg-white hover:bg-white hover:border-none"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 max-lg:w-[350px] "
            >
              <SwiperSlide>
                <img src="/img-product4.jpg" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img-product1.jpg" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img-product2.jpg" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img-product3.jpg" alt="product" />
              </SwiperSlide>
            </Swiper>
          </div>
          <dialog id="my_modal_2" className="modal bg-black bg-opacity-60">
            <div className="modal-box p-0 bg-transparent border-none shadow-none  ">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src="/img-product4.jpg" alt="product" />
                </SwiperSlide>
                <SwiperSlide className="rounded-[10px] bg-transparent">
                  <img src="/img-product1.jpg" alt="product" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img-product2.jpg" alt="product" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img-product3.jpg" alt="product" />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={31}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide className="rounded-[15px] cursor-pointer">
                  <img src="/small-img-product4.jpg" alt="product" />
                </SwiperSlide>
                <SwiperSlide className="rounded-[15px] cursor-pointer">
                  <img src="/small-img-product1.jpg" alt="product" />
                </SwiperSlide>
                <SwiperSlide className="rounded-[15px] cursor-pointer">
                  <img src="/small-img-product2.jpg" alt="product" />
                </SwiperSlide>
                <SwiperSlide className="rounded-[15px] cursor-pointer">
                  <img src="/small-img-product3.jpg" alt="product" />
                </SwiperSlide>
              </Swiper>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={31}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide className="cursor-pointer ">
              <img src="/small-img-product4.jpg" alt="product" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer ">
              <img src="/small-img-product1.jpg" alt="product" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer ">
              <img src="/small-img-product2.jpg" alt="product" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer ">
              <img src="/small-img-product3.jpg" alt="product" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-[62px] w-[44%] ">
          <h3 className="text-[#FF7E1B] text-[13px] uppercase font-bold tracking-[2px] mb-[27px]">
            Sneaker Company
          </h3>
          <h1 className="text-[#1D2026] font-bold text-[44px] leading-[48px] mb-8">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-[#69707D] leading-[26px] mb-7">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="text-[28px] text-[#1D2026] font-bold flex items-center gap-4 mb-[10px]">
            $125.00{" "}
            <span className="text-[#FF7E1B] text-[16px]  bg-[#FFEEE2] rounded-md px-2  py-[4px]">
              50%
            </span>
          </div>
          <h3 className=" text-[#B6BCC8] font-bold leading-[26px] line-through mb-8">
            $250.00
          </h3>
          <div className="flex gap-4">
            <div className="flex items-center justify-between px-4 rounded-[10px] h-14 w-[157px] bg-[#F6F8FD]">
              <button onClick={decrement} className=" border-none">
                <img src="/minus.svg" alt="minus-icon" />
              </button>
              <p className="text-[#1D2026] font-bold text-[16px]">{count}</p>
              <button onClick={increment} className="border-none">
                <img src="/plus.svg" alt="plus-icon" />
              </button>
            </div>
            <button className="bg-[#FF7E1B] hover:bg-[#FFAB6A] text-white flex items-center gap-[15.54px] rounded-[10px] px-[76px] max-xl:px-[60px] max-lg:px-[40px] py-4 font-bold text-[16px]">
              <img src="/white-cart.svg" alt="cart" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Products;
