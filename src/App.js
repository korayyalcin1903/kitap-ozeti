import { useEffect } from "react";
import AppRouter from "./routers/AppRouter";

const App = () => {
  useEffect(() => {
    const menuButton = document.querySelector('.menu-button');
    const mainMenu = document.querySelector('.main-menu');
    const category = document.querySelector('.category');

    if (menuButton && mainMenu && category) {
      menuButton.addEventListener('click', () => {
        mainMenu.classList.toggle('hidden');
        category.classList.toggle('hidden');
      });

      const checkSize = () => {
        if (window.innerWidth < 600) {
          category.classList.remove('visible');
          mainMenu.classList.add('hidden');
          category.classList.add('hidden');
        } else {
          mainMenu.classList.remove('hidden');
          category.classList.remove('hidden');
        }
      };

      checkSize();

      const slides = document.querySelector('.slides');
      const slideCount = document.querySelectorAll('.slide').length;
      let currentIndex = 0;

      function showSlide(index) {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
      }

      const nextButton = document.querySelector('.next');
      const prevButton = document.querySelector('.prev');

      if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % slideCount;
          showSlide(currentIndex);
        });

        prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + slideCount) % slideCount;
          showSlide(currentIndex);
        });

        setInterval(() => {
          nextButton.click();
        }, 3000);
      } 
    }
  }, []); 

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
