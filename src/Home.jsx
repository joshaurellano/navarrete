import React from 'react';
import './Home.css'

function Home() {
  return (
    <div>
      <h1 className='home-h1'>Welcome to Francine's Website!</h1>
      <p className='home-p'>Welcome to my personal website, where I aim to showcase my creativity and innovative ideas.</p>

      <section>
        <h2 className='home-h2'>About Me</h2>
        <p className='home-p'>Hello! I'm Francine Mae Navarrete, a college student pursuing a Bachelor of Science in Information Systems at Naga College Foundation.</p>
      </section>

      <section>
        <h2 className='home-h2'>Explore My Website</h2>
        <p className='home-p'>Use the navigation bar above to learn more about me, my education, hobbies, and how to get in touch!</p>
      </section>
    </div>
  );
}

export default Home;
