import { gsap } from 'gsap'

gsap
  .timeline()
  .to(document.querySelector('.HeaderBorder'), {
    delay: 0.3,
    duration: 1,
    transform: 'scaleX(1)',
    y: '30px',
  })
  .to(document.querySelector('header h1'), {
    duration: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    y: '30px',
  })
  .to(
    document.querySelector('header p'),
    {
      duration: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      y: '30px',
    },
    '-=0.5'
  )
