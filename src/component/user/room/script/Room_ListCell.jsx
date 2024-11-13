import Room_ImgSlider from "./Room_ImgSlider";
import Room_Info from "./Room_Info";

export default function Room_cell(){
    return(
  
   <div className="cell_container">
   <h2 className="room_name">객실 이름 , 객실 타입</h2>
    
        {/* <Room_ImgSlider/> */}
        <Room_Info />
       </div>
    )
};