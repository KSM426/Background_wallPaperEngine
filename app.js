import { SideButton } from "./sideButton/sideButton.js";

class App{
    constructor() {
        this.sideButton = new SideButton("./digitalClock_animation/clock.html", "./schedule/schedule.html");
    }
}

window.onload = () => {
    new App();
}