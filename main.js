// Import GSAP core
import gsap from "gsap";

// Import the plugins you intend to use
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import Flip from "gsap/Flip";
import MotionPathPlugin from "gsap/MotionPathPlugin";

// Register the plugins with GSAP
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);


// Listen for a click event on the mobile nav button
document.querySelector('.nav-mobile-button').addEventListener('click', function() {
  // Select all items within .mobile-nav_items
  const items = document.querySelectorAll('.mobile-nav_items > *'); // Adjust this if your structure is different
  
  // Use GSAP to animate these items
  gsap.to(items, {
    opacity: 1, // Animate to full opacity
    duration: 0.4, // Duration of 0.4 seconds
    ease: "cubic-bezier(.49,.03,.13,.99)", // Custom cubic-bezier easing
    stagger: {
      // This is where the "stagger" effect is defined
      amount: 0.4, // Total animation time for the stagger effect
      from: "start", // Start staggering from the first element
      // You can adjust 'amount' to control the total duration of the stagger effect
    }
  });
});
