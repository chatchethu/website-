# Animated Birthday Webpage

A festive and interactive birthday webpage with animations, confetti, balloons, a slideshow, and a surprise button.

## Features

- Animated "Happy Birthday" message with the recipient's name
- Floating balloons animation
- Confetti effects
- Photo slideshow with captions and navigation
- Surprise button that reveals a special message or video
- Fully responsive design for all devices

## How to Use

1. **Basic Usage:**
   - Simply open `index.html` in any modern web browser
   - The default name is "Sarah"

2. **Personalize with URL Parameter:**
   - Add `?name=PersonName` to the URL to customize the birthday message
   - Example: `index.html?name=John`

3. **Customize Photos:**
   - Replace the images in the `images` folder with your own photos
   - Keep the same filenames (`photo1.jpg`, `photo2.jpg`, etc.)
   - Or update the image paths in the `initSlideshow()` function in `js/script.js`

4. **Customize Surprise:**
   - Edit the surprise content in the `initSurpriseButton()` function in `js/script.js`
   - You can replace the YouTube video with any content you want

## Customization Options

### Change the Color Scheme

Edit the CSS variables in `css/style.css` to change the color scheme.

### Change the Slideshow Captions

Edit the `captions` array in the `initSlideshow()` function in `js/script.js`.

### Change the Birthday Message

Edit the HTML in `index.html` to change the birthday message.

### Add More Animations

This project uses the [Animate.css](https://animate.style/) library. You can add more animations by adding classes to elements.

## Technical Details

- Built with HTML5, CSS3, and JavaScript
- Uses [Animate.css](https://animate.style/) for animations
- Uses [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) for confetti effects
- No jQuery or other dependencies required

## License

Feel free to use and modify this code for personal use.

## Credits

- Confetti effect: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- Animations: [Animate.css](https://animate.style/)
- Fonts: Google Fonts
- Images: Sample images from Unsplash