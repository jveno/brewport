import localFont from 'next/font/local'

export const roboto = localFont({
    src: [
      {
        path: './_fonts/Roboto/Roboto-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './_fonts/Roboto/Roboto-Italic.ttf',
        weight: '400',
        style: 'italic',
      },
      {
        path: './_fonts/Roboto/Roboto-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
      {
        path: './_fonts/Roboto/Roboto-BoldItalic.ttf',
        weight: '700',
        style: 'italic',
      },
    ],
  });
  
  export const oswald = localFont({
    src: [
      {
        path: './_fonts/Oswald/Oswald-VariableFont_wght.ttf',
      },
    ],
  });