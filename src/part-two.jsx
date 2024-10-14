import React from 'react';
import a from '../src/nitro-assets/img3.svg';
import b from '../src/nitro-assets/top.svg';
import c from '../src/nitro-assets/fly.svg';
import d from '../src/nitro-assets/all.svg';
import e from '../src/nitro-assets/rabit.svg';
import f from '../src/nitro-assets/im3.png';

function Part2() {
  const cardPart = [
    { 
      name: "Customize Your Profile", 
      address: "Use a different avatar, profile theme, banner, and bio in each of your servers.",
      image: a,
      buttonText: "Learn More"
    },
    { 
      name: "More Emoji Power", 
      address: "Hype, roast, and meme with custom emoji anywhere.",
      image: d,
      
    },
    { 
      name: "500MB Uploads", 
      address: "Upload what you want with increased 500MB upload size.",
      image: b,
      
    },
    { 
      name: "HD Video", 
      address: "Better video resolutions for all your streams. Stream apps and games in sweet, sweet HD.",
      image: c,
      
    },
    { 
      name: "Color Your Experience", 
      address: "Add your vibe to Discord with unique theme colors.",
      image: e,
      buttonText: "Customize Colors"
    },
    { 
      name: "Custom App Icons", 
      address: "Choose a mobile and in-app desktop icon that fits your vibe.",
      image: f,
      buttonText: "Set Icons"
    },
  ];

  return (
    <div className='new-with-nitro'>
      <div className='new-with-nitro-box'>
        <div className='new-tytile'>
          <h1>See What's New With Nitro</h1> 
          <p>These are the freshest offerings exclusive for our illustrious Nitro members. We're adding more all the time!</p>
        </div>

        <div className='month-free-card'>
          <div className='card-try-free'>
            <h1>More Emoji Power</h1>
            <p>Use a different avatar, profile theme, banner, and bio in each of your servers</p>
              <img className='imo' src="src\nitro-assets\demo1.svg" alt="" />
          </div>
          <div className='card-try-free'>
          <h1>Custom App Icons</h1>
          <p>Use a different avatar, profile theme, banner, and bio in each of your servers</p>
               <img className='imo'  src="src\nitro-assets\demo2.svg" alt="" />
          </div>
          <div className='card-try-free'>
          <h1>Power</h1>
          <p>Use a different avatar, profile theme, banner, and bio in each of your servers</p>
                <img className='imo'  src="src\nitro-assets\demo3.svg" alt="" />
          </div>
        </div>

        <div className='nitro-fav-checkout'>
         
          <h1>Check Out These Nitro Favorites</h1>
          <p>Explore the most popular perks that come with your Nitro <br />subscription.</p>
          <button className='See-All'>See All</button>
        </div>

        <div className='card-container'>
          {cardPart.map((item, index) => (
            <div key={index} className='cardpp'>
              <h2>{item.name}</h2>
              <p className=''>{item.address}</p>
              <img className='imo' src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Part2;
