import React from 'react';

function CarouselLink({prevOrNext}) {
    const aClass = `${prevOrNext === "prev" ? "left":"right"} carousel-control`;
    const spanClass = `glyphicon glyphicon-chevron-${prevOrNext==="prev"?"left":"right"}`;
    const innerSpan = prevOrNext==="prev"?"Previous":"Next";

    return(
        <a className={aClass} href="#myCarousel" data-slide={prevOrNext}>
            <span className={spanClass}></span>
            <span className="sr-only">{innerSpan}</span>
        </a>
    );
}

function ImageToCarusel({image , index}) {
    const imageStyle = {width:"1000px",height:"400px" , margin:"auto"};
    const divClassName = index===0 ? "item active": "item";

    return (
        <div key={index} className={divClassName}>
            {React.cloneElement(image,{style: imageStyle})}
            <div className="carousel-caption">
                <h3>Image number {index + 1}</h3>
                <p>LA is always so much fun!</p>
            </div>
        </div>
    ); 
}

export default function Carousel(props) {
    const countImages = React.Children.count(props.children);
    const images = React.Children.toArray(props.children);
    const imageStyle = {width:"1000px",height:"400px" , margin:"auto"};

    return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel" style={imageStyle}>
                <ol className="carousel-indicators">
                    {new Array(countImages).fill(0).map((_ , index)=>(
                        <li key={index} data-target="#myCarousel" data-slide-to={index} className={index===0 ? "active": ""} style={{margin: "2px"}}></li>
                    ))}
                </ol>
                
                <div className="carousel-inner" role="listbox" style={{margin:"auto"}}>
                    {images.map((image , index)=>(<ImageToCarusel key={index} image={image} index={index}/>))}
                </div>
                <CarouselLink prevOrNext="prev"/>
                <CarouselLink prevOrNext="next"/>
            </div>
    );
}
