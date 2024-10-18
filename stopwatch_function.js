
function Stopwatch() {
    let duration=0, startTime=null, endTime=null, running=false;

    this.start = function() {
        if(running) throw new Error("Stopwatch already running.");
        running = true;
        startTime = new Date();
    }

    this.stop = function() {
        if (!running) throw new Error('Stopwatch not started.');
        running = true;
        const endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    }

    this.reset = function() {
        duration = 0;
        startTime = null;
        endTime = 0;
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}