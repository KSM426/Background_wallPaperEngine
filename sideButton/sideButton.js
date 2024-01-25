export class SideButton {
    constructor(lh, rh) {
        this.leftHref = lh;
        this.rightHref = rh;

        this.l = document.querySelector("#leftButton");
        this.r = document.querySelector("#rightButton");

        this.l.addEventListener("click", this.left.bind(this));
        this.r.addEventListener("click", this.right.bind(this));

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        document.addEventListener('pointermove', this.onMove.bind(this), false);

    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }

    onMove(e) {
        this.mousePosX = e.clientX;
        this.mousePosY = e.clientY;

        if(this.mousePosX < this.stageWidth * 0.04) {
            this.l.style.left = '0';
        } else {
            this.l.style.left = '-3%';
        }

        if(this.mousePosX > this.stageWidth * 0.96) {
            this.r.style.right = '0';
        } else {
            this.r.style.right = '-3%';
        }
    }

    left() {
        window.location.href = this.leftHref;
    }

    right() {
        window.location.href = this.rightHref;
    }

}