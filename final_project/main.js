import Canvas from './canvas.js';

const canvas = new Canvas('#canvas');

canvas.canvas.addEventListener("touchstart", event => {
    canvas.start(event)
}, false);

canvas.canvas.addEventListener("touchmove", event => {
    canvas.draw(event);
}, false);

canvas.canvas.addEventListener("mousedown", event => {
    canvas.start(event);
}, false);

canvas.canvas.addEventListener("mousemove", event => {
    canvas.draw(event);
}, false);

canvas.canvas.addEventListener("touchend", event => {
    canvas.stop(event);
}, false);

canvas.canvas.addEventListener("mouseout", event => {
    canvas.stop(event);
}, false);

canvas.canvas.addEventListener("mouseup", event => {
    canvas.stop(event);
}, false);

const clear = document.querySelector('#clear');

clear.addEventListener("click", () => {
    canvas.clear_canvas();
})

const undo = document.querySelector('#undo');

undo.addEventListener("click", () => {
    canvas.undo_last();
})

const redo = document.querySelector('#redo');

redo.addEventListener("click", () => {
    canvas.redo_last();
})

const save = document.querySelector('#save');

save.addEventListener("click", () => {
    canvas.save_image();
})

const color = document.querySelector('.color-picker');

color.addEventListener("change", () => {
    canvas.draw_color = color.value
})

const size = document.querySelector('.pen-range');

size.addEventListener("change", () => {
    canvas.draw_width = size.value
})


// const canvas = document.querySelector('#canvas');
// canvas.height = 600;
// canvas.width = window.innerWidth - 60;

// let context = canvas.getContext("2d");
// context.fillStyle = "white";
// context.fillRect(0,0, canvas.width, canvas.height)

// let start_background_color = "white";
// let draw_color = 'black';
// let draw_width = "2";
// let is_drawing = false;

// let restore_array = [];
// let undo_array = [];
// let undo_index = -1;
// let redo_index = -1;


// canvas.addEventListener("touchstart", start, false);
// canvas.addEventListener("touchmove", draw, false);
// canvas.addEventListener("mousedown", start, false);
// canvas.addEventListener("mousemove", draw, false);
// canvas.addEventListener("touchend", stop, false);
// canvas.addEventListener("mouseout", stop, false);
// canvas.addEventListener("mouseup", stop, false);


// function start(event) {
//     is_drawing = true;
//     context.beginPath();
//     context.moveTo(event.clientX - canvas.offsetLeft, 
//                 event.clientY - canvas.offsetTop);
//                 event.preventDefault();
// }

// function draw(event) {
//     if (is_drawing) {
//         context.lineTo(event.clientX - canvas.offsetLeft, 
//             event.clientY - canvas.offsetTop);
//         context.strokeStyle = draw_color;

//         context.strokeStyle = draw_color;
//         context.lineWidth = draw_width;
//         context.lineCap = 'round';
//         context.lineJoin = "round";
//         context.stroke();
//     }
//     event.preventDefault();
// }

// function stop(event) {
//     if (is_drawing) {
//         context.stroke();
//         context.closePath();
//         is_drawing = false;
//     }
//     event.preventDefault();
//     if(event.type != 'mouseout'){
//         undo_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
//         undo_index += 1;
//     }
// }

// function clear_canvas() {
//     context.fillStyle = start_background_color;
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.fillRect(0,0,canvas.width, canvas.height);

//     undo_index = -1;
//     undo_array = [];
// }

// function undo_last(){
//     if(undo_index <= 0) {
//         clear_canvas();
//     }else{
//         undo_index -= 1;
//         restore_array.push(undo_array.pop());
//         redo_index += 1;
//         context.putImageData(undo_array[undo_index], 0, 0);
//     }
// }

// function redo_last(){
//     if(redo_index < 0) {
//         restore_array = [];
//         redo_index = -1;
//         console.log('pass');
//     } else {
//         context.putImageData(restore_array[redo_index], 0, 0);
//         redo_index -= 1;
//         undo_array.push(restore_array.pop());
//         undo_index += 1;
//     }
// }

// function save_image() {
//     const link = document.createElement('a');
//     link.download = 'download.png';
//     link.href = canvas.toDataURL();
//     link.click();
//     link.delete;
// }

// window.addEventListener('load', () => {
//     const canvas = document.querySelector('#canvas');
//     const ctx = canvas.getContext('2d');

//     resizeCanvas();

//     let painting = false;

//     function startPosition(e) {
//         painting = true;
//         draw(e);
//     }

//     function finishedPosition() {
//         painting = false;
//         ctx.beginPath();
//     }

//     function draw(e){
//         if(!painting) return;
//         ctx.lineWidth = 10;
//         ctx.lineCap = 'round';

//         ctx.lineTo(e.clientX, e.clientY);
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.moveTo(e.clientX, e.clientY)
//     }

//     // event listeners
//     canvas.addEventListener('mousedown', startPosition);
//     canvas.addEventListener('mouseup', finishedPosition);
//     canvas.addEventListener('mousemove', draw);

// });

// window.addEventListener('resize', () => {
//     resizeCanvas();
// });

// function resizeCanvas() {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// };