const loader = document.querySelector('.loading-text');
const image = document.querySelector('.bg');

let load = 0;

//set the time interval/level of loading
let int = setInterval(blurring, 30); //milliseconds

function blurring () {
    load++;
 
    if(load > 99) { 
        clearInterval(int);
    }

    // //displaying the load text
    loader.innerText = `${load}%`;
    // //passing in a range of numbers to another range
    const scale= (num, in_min, in_max, out_min, out_max) => {return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min };
    loader.style.opacity = scale (load, 0, 100, 1, 0)
    //setting the blur maximum
    image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
