export default class Canvas{
    constructor(elementId){
        this.canvas = document.querySelector(elementId);
        this.canvas.height = 600;
        this.canvas.width = window.innerWidth - 60;

        this.context = this.canvas.getContext("2d");
        this.context.fillStyle = "white";
        this.context.fillRect(0,0, this.canvas.width, this.canvas.height);

        this.start_background_color = "white";
        this.draw_color = 'black';
        this.draw_width = "2";
        this.is_drawing = false;

        this.restore_array = [];
        this.undo_array = [];
        this.undo_index = -1;
        this.redo_index = -1;
    }

    async start(event){
        this.is_drawing = true;
        this.context.beginPath();
        this.context.moveTo(event.clientX - this.canvas.offsetLeft, 
                    event.clientY - this.canvas.offsetTop);
    }

    async draw(event) {
        if (this.is_drawing) {
            this.context.lineTo(event.clientX - this.canvas.offsetLeft, 
            event.clientY - this.canvas.offsetTop);
            this.context.strokeStyle = this.draw_color;
            this.context.strokeStyle = this.draw_color;
            this.context.lineWidth = this.draw_width;
            this.context.lineCap = 'round';
            this.context.lineJoin = "round";
            this.context.stroke();
        }
    }

    async stop(event){
        if (this.is_drawing) {
            this.context.stroke();
            this.context.closePath();
            this.is_drawing = false;
        }
        if(event.type != 'mouseout'){
            this.undo_array.push(this.context.getImageData(0, 0, this.canvas.width, this.canvas.height));
            this.undo_index += 1;
        }
    }

    async clear_canvas() {
        this.context.fillStyle = this.start_background_color;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
        this.undo_index = -1;
        this.undo_array = [];
    }
    
    async undo_last(){
        if(this.undo_index <= 0) {
            this.clear_canvas();
        }else{
            this.undo_index -= 1;
            this.restore_array.push(this.undo_array.pop());
            this.redo_index += 1;
            this.context.putImageData(this.undo_array[this.undo_index], 0, 0);
        }
    }
    
    async redo_last(){
        if(this.redo_index < 0) {
            this.restore_array = [];
            this.redo_index = -1;
            console.log('pass');
        } else {
            this.context.putImageData(this.restore_array[this.redo_index], 0, 0);
            this.redo_index -= 1;
            this.undo_array.push(this.restore_array.pop());
            this.undo_index += 1;
        }
    }
    
    async save_image() {
        const link = document.createElement('a');
        link.download = 'download.png';
        link.href = this.canvas.toDataURL();
        link.click();
        link.delete;
    }
}

export function clear_canvas(canvas) {
    canvas.context.fillStyle = canvas.start_background_color;
    canvas.context.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.context.fillRect(0,0,canvas.canvas.width, canvas.canvas.height);
    canvas.undo_index = -1;
    canvas.undo_array = [];
}
