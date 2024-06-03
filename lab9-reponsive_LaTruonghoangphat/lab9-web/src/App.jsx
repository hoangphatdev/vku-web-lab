import React from 'react'
import {logo, winmart,  beckice,
    corona,
    heineiken,
    heineiken_xanh,
    nuocgiat,
    strongbow_dao,
    strongbow_tao,
    tiger_xanh,
    tiger,
    saigon_gold,
    hoe,
    saigon_red,
    tuborg,
    ruby,
    blanc, 
    saigon_premium,
    user,
    cart,
    audi,
    bmw,
    vinfast,
    mercedes,
    vku_logo,
    hplat,

    
  } from './assets'

const App = () => (
  <>
    <div>
      <div className=" sm:hidden sticky flex justify-around top-0 w-screen h-[50px text-white font-bold opacity-80 bg-gradient-to-r from-red-500 to-orange-400">
        <div className="flex items-center gap-x-2">
          <div>
            <img className="h-[30px]" src={cart} />
          </div>
          <div>Giỏ hàng</div>
        </div>
        <div className="flex items-center gap-x-2">
          <div>
            <img className="h-[30px]" src={user} />
          </div>
          <div> Hội viên</div>
        </div>
      </div>
      <div className=" m-5 flex justify-between ">
        <div className="flex">
          <img className="  object-contain w-[100px]" src={winmart} />
          <input
            className="w-[250px] sm:w-[300px] smm:w-[400px] md:w-[500px] lg:w-[700px]   pl-[20px]  ml-2  rounded-[20px] border border-solid border-2 border-red-400 "
            type="text"
            placeholder="Tìm kiếm nào..."
          />
        </div>

        <div className="flex  font-bold text-red-500">
          <div className="flex items-center">
            <img
              className="hidden sm:block w-[50px] object-contain"
              src={cart}
            />
            <div className="hidden sm:block">Giỏ Hàng</div>
          </div>
          <div className="flex items-center">
            <img
              className=" hidden sm:block w-[50px] object-contain"
              src={user}
            />
            <div className="hidden sm:block smm:text-green">Hội Viên</div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] grid-cols-2 grid sm:grid-cols-4 mx-[30px]  rounded-[50px] p-[20px]  lg:grid-cols-5  font-bold text-center border border-3 border-red-500 ">
        <div className="">
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={beckice} />
          </div>
          <div>Bia Beckice</div>
          <div>20.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={corona} alt="" />
          </div>
          <div>Bia Corona</div>
          <div>32.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={heineiken} />
          </div>
          <div>Bia Heineiken</div>
          <div>20.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={strongbow_dao} />
          </div>
          <div>Bia Trái cây Strongbow Đào</div>
          <div>18.000d</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={strongbow_tao} />
          </div>
          <div>Bia Trái cây Strongbow Táo</div>
          <div>18.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={heineiken_xanh} />
          </div>
          <div>Bia Heineiken Xanh</div>
          <div>20.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={tiger} />
          </div>
          <div>Bia Tiger</div>
          <div>20.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={tiger_xanh} />
          </div>
          <div>Bia Tiger Xanh</div>
          <div>25.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={saigon_gold} />
          </div>
          <div>Bia Sài Gòn Gold</div>
          <div>15.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={hoe} />
          </div>
          <div>Bia Con Heo</div>
          <div>40.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={tuborg} />
          </div>
          <div>Bia Turbo</div>
          <div>100.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={saigon_premium} />
          </div>
          <div>Bia Sài Gòn Preminum</div>
          <div>30.000đ</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={saigon_red} />
          </div>
          <div>Bia Sài Gòn Đỏo</div>
          <div>20.000d</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={ruby} />
          </div>
          <div> Bia Ruby</div>
          <div> 25.000d</div>
        </div>
        <div>
          <div className="hover:scale-125 hover:rotate-12 transition ease-in ">
            <img src={blanc} />
          </div>
          <div> Bia Plan</div>
          <div> 50.000d</div>
        </div>
      </div>
      <div className=" bg-slate-700 p-3  text-slate-200 font-bold font-mono mt-[50px]  text-center rounded-[20px] md:mx-[100px]">
        Việt Nam là một trong những thị trường tiêu thụ rượu bia hấp dẫn nhất
        trên thế giới, đứng thứ 29 thế giới về sản lượng rượu bia được tiêu thụ
        mỗi năm. Bia, nước uống có cồn đang trở thành loại đồ uống quen thuộc
        không thể thiếu trên bàn tiệc, những buổi tụ tập liên hoan cùng bạn bè.
        Đối tượng sử dụng bia chủ yếu là nam giới độ tuổi thanh niên và trung
        niên, nhưng những năm gần với sự xuất hiện của những loại bia nhẹ, bia
        trái cây hay các loại đồ uống không cồn đã mở rộng đối tượng sử dụng
        bia, nước có cồn sang cả khách hàng nữ và giới trẻ nhiều hơn.
      </div>
      <div className="mt-[50px]">
        <div className="text-center text-[25px] font-bold text-stone-800 border-t rounded-[50px] border-red-500 border-t-[4px]">
          Tập Đoàn Hỗ Trợ
        </div>
        <div className="flex justify-evenly items-center mt-4 rounded-[50px] border border-2 p-[20px] ">
          <div>
            <img className="w-[60px] hover:scale-150 transition ease-linear" src={vinfast} />
          </div>
          <div>
            <img className="w-[60px] hover:scale-150 transition ease-linear" src={audi} />
          </div>
          <div>
            <img className="w-[60px] hover:scale-150 transition ease-linear" src={bmw} />
          </div>
          <div>
            <img className="w-[60px] hover:scale-150 transition ease-linear" src={mercedes} />
          </div>
        </div>
      </div>
      <div className=" text-slate-300 font-bold h-[100px] flex justify-around items-center mt-[80px]  bg-slate-600 ">
        <div> Powered By La Truong Hoang Phat</div>
        <div>Đại Học Công Nghệ Thông Tin và Truyền Thông Việt Hàn</div>
      </div>
      <div className=" bg-slate-500 flex justify-evenly height-[200px]">
        <div className='flex justify-center'>
          <img className=" w-1/5" src={hplat} />
        </div>
        <div className=" flex justify-center">
          <img className="  w-4/5" src={vku_logo} />
        </div>
      </div>
    </div>
  </>
);


export default App