import React from "react";
import Image1 from '../../imgs/05.png';
import "./exercise1.css";
import StringToReactComponent from 'string-to-react-component';

const Exercise1 = () => {
  return (
    <StringToReactComponent data={{Image1}}>
      {`(props)=>{
         const {Image1}=props;
         return (<>
          <div className='container'>
          <div className='flexy'>
            <div className='title'>النشاط الأول</div>
            <div className='name'>إسمي ز ع ت ر</div>
          </div>
            <br />
            <br />
    
            <div className='text'>ألون حرف الزاي (ز),أول حرف من اسمي واكمل الاحرف الناقصة في المربعات الملائمة حسب الكلمة والصورة</div>
    
            <div>
                <img className='image1' src={Image1} alt="" />
            </div>
            <div className='main'>
            <div className='side-right'>
                <div>زملاء</div>
                <div>ز</div>
            </div>
            <div>
              <img className='image2' src={Image1} alt="" />
              <div className='complete'>ز     ء</div>
            </div>
            </div>
            
        </div>
         </>);
       }`}
    </StringToReactComponent>
  )
}
export default Exercise1;