export class ColorSet {
    constructor(n, m) {
        this.fillNum = n;
        this.strokeNum = m;
        this.fillColor = ['rgba(255, 255, 255)','rgba(120, 120, 120)', 'rgba(0, 0, 0)',
            'rgba(200, 0, 0)', 'rgba(250, 120, 0)', 'rgba(240, 220, 102)', 'rgba(100, 240, 100)', 'rgba(51, 138, 47)', 
            'rgba(43, 102, 235)', 'rgba(22, 9, 145)', 'rgba(134, 103, 235)'];
        this.strokeColor = ['rgba(255, 255, 255, 0.8)', 'rgba(120, 120, 120, 0.8)', 'rgba(0, 0, 0, 0.8)',
            'rgba(200, 0, 0, 0.8)', 'rgba(250, 120, 0, 0.8)', 'rgba(240, 220, 102, 0.8)', 'rgba(100, 240, 100, 0.8)', 'rgba(51, 138, 47, 0.8)',
            'rgba(43, 102, 235, 0.8)', 'rgba(22, 9, 145, 0.8)', 'rgba(134, 103, 235, 0.8)'];
    }

    fillColorChange(x) {
        this.fillNum = x;
    }

    strokeColorChange(x) {
        this.strokeNum = x;
    }
}