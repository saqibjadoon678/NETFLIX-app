import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Pdata from './Pdata';
import './index.css';


// creating a fucntion to use map method 
function Ndata(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}




ReactDOM.render(
  // <>
  //   <div className='cards'>
  //     <div className='card'>
  //       <img src='https://www.hollywoodreporter.com/wp-content/uploads/2024/08/OUTERBANKS_401_Unit_10082RC.jpg?w=1296' alt='myPic' className='card_img ' />
  //       <div className='card_info'>
  //         <span className='card_category'>Netflix Series</span>
  //         <h3 className='card_title'> Outer Banks</h3>
  //         <a href='https://www.netflix.com/np/title/80236318' target='blank'>
  //           <button>Watch Now</button>
  //         </a>
  //       </div>
  //     </div>
  //   </div>

  // </>, 


  <>
    <h1 className='Heading_'>List of Top Netflix Series in 2024</h1>


    {/* array map method accesed here */}
    <div className='cards'> 
    {Pdata.map(Ndata)}
</div>

    {/* when we create a custom attribute type we have to pass it in function, so as i have passed 
    props above in   function */}

    {/* <Card imgsrc='https://www.hollywoodreporter.com/wp-content/uploads/2024/08/OUTERBANKS_401_Unit_10082RC.jpg?w=1296'
      title='Famous Netflix Series 2024'
      sname='Outer Banks'
      link='https://www.netflix.com/np/title/80236318'
    />,
    <Card imgsrc='https://www.hollywoodreporter.com/wp-content/uploads/2024/08/OUTERBANKS_401_Unit_10082RC.jpg?w=1296'
      title='Famous Netflix Series 2024'
      sname='Outer Banks'
      link='https://www.netflix.com/np/title/80236318'
    />,
    <Card imgsrc='https://www.hollywoodreporter.com/wp-content/uploads/2024/08/OUTERBANKS_401_Unit_10082RC.jpg?w=1296'
      title='Famous Netflix Series 2024'
      sname='Outer Banks'
      link='https://www.netflix.com/np/title/80236318'
    /> */}

    {/* using arrays // */}
    <div className='cards'>
      {/* <Card
        imgsrc={Pdata[0].imgsrc}
        title={Pdata[0].title}
        sname={Pdata[0].sname}
        link={Pdata[0].link}
      />
      <Card
        imgsrc={Pdata[1].imgsrc}
        title={Pdata[1].title}
        sname={Pdata[1].sname}
        link={Pdata[1].link}
      />
      <Card
        imgsrc={Pdata[2].imgsrc}
        title={Pdata[2].title}
        sname={Pdata[2].sname}
        link={Pdata[2].link}
      />
      <Card
        imgsrc={Pdata[3].imgsrc}
        title={Pdata[3].title}
        sname={Pdata[3].sname}
        link={Pdata[3].link}
      />
      <Card
        imgsrc={Pdata[4].imgsrc}
        title={Pdata[4].title}
        sname={Pdata[4].sname}
        link={Pdata[4].link}
      />
      <Card
        imgsrc={Pdata[5].imgsrc}
        title={Pdata[5].title}
        sname={Pdata[5].sname}
        link={Pdata[5].link}
      />
      <Card
        imgsrc={Pdata[6].imgsrc}
        title={Pdata[6].title}
        sname={Pdata[6].sname}
        link={Pdata[6].link}
      />
         <Card
        imgsrc={Pdata[7].imgsrc}
        title={Pdata[7].title}
        sname={Pdata[7].sname}
        link={Pdata[7].link}
      />
      <Card
        imgsrc={Pdata[8].imgsrc}
        title={Pdata[8].title}
        sname={Pdata[8].sname}
        link={Pdata[8].link}
      /> */}
    </div>


  </>, document.getElementById('root')
);