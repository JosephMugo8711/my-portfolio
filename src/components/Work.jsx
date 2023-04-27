import React from "react";
import photos from './photos/work-1.png';

import photo from './photos/work-2.png';

import phot from './photos/work-3.png';

function Work() {
    return(
        <>
                                           <div id="portfolio">

<div class="container" id="work"> 
<h2 class="section-title">My Work</h2>
<div class="work-list">
  <div class="work">
     <img 
        src={photos}
        alt="work1"
        />

 <div class="layer">
    <h3>YuTekBank</h3>
    <p>It's a web app for byuing and selling Real Estate using Crypocurrency</p>
    <a href="https://github.com/JosephWamiti1178/Yu-Tech-Bank" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</div>
</div>


    <div class="work">
      <img
      src={photo}
        alt="work2"
      />
       <div class="layer">
        <h3>Banda School</h3>
        <p>We developed a full-stack web application called Banda-school using agile methodologies. The application is built with a Ruby on Rails API backend and a React frontend, providing students with access to various features through a user-friendly portal.</p>
        <a href="https://github.com/Emmanuel-FSE/banda-school" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>

    </div>

    <div class="work">
         <img 
         src={photos}
         alt="work3" />
        <div class="layer">
        <h3>Land Watten</h3>
        <p>Web application to manage real estate land selling. The application include various functions and features that make it 
            easier to manage land, such as viewing land records, adding and editing land information, tracking land transactions, and generating reports</p>
        <a href="https://github.com/JosephWamiti1178/Land-Watten" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>

</div>
</div>
<a href="https://github.com/JosephWamiti1178" target="_blank" class="btn">See more</a>
</div>
</div>
        </>
    )
}

export default Work;