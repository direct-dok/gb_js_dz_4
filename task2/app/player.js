const player = {
    x: 0,
    y: 0, 
    move(nextPoint) {
        let conf = config.rowsCount;
        this.x = this.checkColRows(nextPoint.x);
        this.y = this.checkColRows(nextPoint.y);
    }, 
    checkColRows(position) {
        if(position > (config.rowsCount - 1)) {
            return config.rowsCount - 1;
        } else if (position < 0) {
            return 0;
        } else {
            return position;
        }
    }
}