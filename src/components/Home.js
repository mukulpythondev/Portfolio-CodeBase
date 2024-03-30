import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect/dist/core';
import coder from './coder.jpg'

function Home() {
  useEffect(() => {
    const typedText = document.querySelector('.typed-text');
    const typewriter = new Typewriter(typedText, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString('Full Stack Developer')
      .pauseFor(1000)
      .deleteAll()
      .typeString('META Certified <span class="tick-icon">✅</span>')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Skilled')
      .pauseFor(1000)
      .deleteAll()
      .start();

    // Canvas animation setup
    const canvasBody = document.getElementById('canvas');
    const drawArea = canvasBody.getContext('2d');

    let w, h, particles;

    const resizeReset = function() {
      w = canvasBody.width = window.innerWidth;
      h = canvasBody.height = window.innerHeight;
    };

    const opts = {
      particleColor: "rgb(200,200,200)",
      lineColor: "rgb(200,200,200)",
      particleAmount: 30,
      defaultSpeed: 1,
      variantSpeed: 1,
      defaultRadius: 2,
      variantRadius: 2,
      linkRadius: 200,
    };

    const checkDistance = function(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const linkPoints = function(point1, hubs) {
      for (let i = 0; i < hubs.length; i++) {
        let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        let opacity = 1 - distance / opts.linkRadius;
        if (opacity > 0) {
           const rgb = opts.lineColor.match(/\d+/g);
          drawArea.lineWidth = 0.5;
          drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
          drawArea.beginPath();
          drawArea.moveTo(point1.x, point1.y);
          drawArea.lineTo(hubs[i].x, hubs[i].y);
          drawArea.closePath();
          drawArea.stroke();
        }
      }
    };

    const Particle = function(xPos, yPos) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.color = opts.particleColor;
      this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };
      this.update = function() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      };
      this.border = function() {
        if (this.x >= w || this.x <= 0) {
          this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
      };
      this.draw = function() {
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
      };
    };

    const setup = function() {
      particles = [];
      resizeReset();
      for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
      }
      window.requestAnimationFrame(loop);
    };

    const loop = function() {
      window.requestAnimationFrame(loop);
      drawArea.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      for (let i = 0; i < particles.length; i++) {
        linkPoints(particles[i], particles);
      }
    };

    resizeReset();
    setup();

  }, []);

  return (
    
    <div id='home' style={{height:'100vh'}} className='bg-black overflow-hidden'>
    <section className="z-10 relative flex flex-col md:flex-row items-center justify-between p-4 md:p-8 bg-black text-white" style={{ minHeight: "calc(100vh - 5rem)" }}>
      <div className="absolute inset-0 w-full h-full z-0">
        <canvas id="canvas"></canvas>
      </div>
      <div className="relative md:w-1/2 md:ml-2 md:mb-0 text-center md:text-left">
      <div className="p-5 md:mt-0">
 
  <h1 className="text-3xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInLeft">
    Hi, I am  <span className="text-green-400">Mukul Rana</span>
  </h1>
  <h1 className="overflow-hidden whitespace-nowrap text-xl md:text-4xl text-green-400 font-bold  animate__animated animate__fadeInDown">
    <span className="typed-text"></span>
  </h1>
</div>
<div className="md:mt-4">
 <a href="#contact" className='mt-4 md:ml-6 text-white px-3 md:px-4 py-2 rounded border border-green-400 hover:bg-green-600 '>Contact Me</a>
<a href="#about" className='ml-5 md:ml-5 border border-green-400 text-white px-3 md:px-4 py-2 rounded hover:bg-green-600'>About</a> 
</div>

<div className="mt-4 ml-12 md:mt-8 md:ml-3 flex space-x-3">
  <a href="https://www.linkedin.com/in/mukul-webdev/" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:text-green-400">
    <FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-2xl mx-2 md:ml-5" />
  </a>
  <a href="https://github.com/mukulpythondev" target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:text-green-400">
    <FontAwesomeIcon icon={faGithub} className="text-xl md:text-2xl mx-2 md:ml-5" />
  </a>
</div>
      </div>
      <div className="z-10 md:w-1/2 mt-20 animate__animated animate__fadeInRight">
      <img src={coder} alt="coder illustration" className="h-48 md:h-auto w-full md:mt-10 md:ml-8" />

      </div>
    </section>
  </div>
  );
}

export default Home;
