import React, { useRef } from 'react'
import {frameImg, frameVideo, igImg, floImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animation';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>
<br/>
<br/>
                  <p className="hiw-text g_fadeIn">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters. and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Pro-class GPU</p>
                <p className="hiw-text">with 6 cores</p>
              </div>
              </div>
            </div>
           
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           

            <div className="flex flex-col items-center font-bold">
            <h2 className="hiw-title ">
               A camera that captures your <br/>wildest imagination.
            </h2>
  
            <p className="hiw-subtitle">
            From dramatic framing flexibility to next-generation portraits, see what you <br/>can do with our most powerful iPhone camera system.
            </p>
          </div>
          <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={igImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
          </div>
          <p className="text-gray text-center font-semibold mt-3 ">A green iguana, captured by the 48MP Main camera</p>
          </div>

          <div className="flex flex-col">
          <p className="hiw-haa ">
          With iPhone 15 Pro, you have multiple focal lengths to work with. It’s like having   <span className="text-white">
          seven pro lenses in your pocket
        </span>, everywhere you go.
          </p>
          <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={floImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
          </div>
          </div>
          </div>
         
                  <div className="flex flex-col items-center font-bold">
                  <h2 className="hiw-title1">
                  120 mm of<br/>
                  pure Pro zoom.
                  </h2>
                  </div>

                  <div className="mt-10 md:mt-20 mb-14">
                  <div className="relative h-full flex-center">
                    <img 
                        src={'https://cdn.mos.cms.futurecdn.net/sEAubE8uVEUHTsFcWUZJDk-1200-80.jpg'}
                        alt="frame"
                        className="bg-transparent relative z-10"
                      />
                    </div>
                  </div>
                <div className="flex flex-col items-center">
                  <h2 className="hiw-title mt-10">Gigablast<br /> your gigabits.</h2>
        <p className="hiw-subtitle">
                    It's here. The biggest redesign in the history of Apple GPUs.
                  </p>
                </div>
        
                <div className="mt-10 md:mt-20 mb-14">
                  <div className="relative h-full flex-center">
                    <div className="overflow-hidden">
                      <img 
                        src={"https://www.apple.com/in/iphone-15-pro/images/overview/usb-c/usbc__dqdn0phay4mu_large.jpg"}
                        alt="frame"
                        className="bg-transparent relative z-10"
                      />
                    </div></div></div>
    </section>
  )
}

export default HowItWorks