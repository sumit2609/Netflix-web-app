import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";

ReactDom.render(
  <>
    <h1 className="heading_style"> List Of Top 5 Netflix Series in 2020</h1>

    <Card 
      sname={Sdata[0].sname}
      imgscr={Sdata[0].imgscr}
      title={Sdata[0].title}
      link={Sdata[0].link}
    />

  <Card 
      sname={Sdata[1].sname}
      imgscr={Sdata[1].imgscr}
      title={Sdata[1].title}
      link={Sdata[1].link}    
    />

  <Card 
      sname={Sdata[2].sname}
      imgscr={Sdata[2].imgscr}
      title={Sdata[2].title}
      link={Sdata[2].link}   
    />

  <Card
      sname={Sdata[3].sname}
      imgscr={Sdata[3].imgscr}
      title={Sdata[3].title}
      link={Sdata[3].link}
  />
  <Card 
      sname={Sdata[4].sname}
      imgscr={Sdata[4].imgscr}
      title={Sdata[4].title}
      link={Sdata[4].link} 
  />
  </>,
    document.getElementById('root')
);