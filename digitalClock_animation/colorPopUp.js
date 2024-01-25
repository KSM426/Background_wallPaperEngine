import { ColorSet } from "./colorSet.js";

export class ColorPopUp{
    constructor() {
        this.color = document.querySelector("#color");
        this.colorBlock = document.querySelector("#colorBlock");
        this.colorPop = document.querySelector('#colorPop');

        this.color.addEventListener("click", this.colorPopOn.bind(this));
        this.colorBlock.addEventListener("click", this.colorPopOff.bind(this)); 
    
        this.colorSet = new ColorSet(0, 1);

        this.fillC();
        this.strokeC();
    }
    
    colorPopOn() {
        this.color.style.top = '40%';
        this.colorBlock.style.display = 'block';
        this.colorPop.style.top = '0%';
    }
    
    colorPopOff() {
        this.color.style.top = '0';
        this.colorBlock.style.display = 'none';
        this.colorPop.style.top = '-40%';
    }
    
    fillC() {
        this.div = document.querySelector("#fill");
        // this.
        this.div.textContent = 'Fill';
        for(let i=0; i<this.colorSet.fillColor.length; i++) {
            this.label = document.createElement('label');
            this.input = document.createElement('input');
            this.input.type = 'radio';
            this.input.name = 'fillC';
            this.input.value = i;
            this.input.style.width = "20px";
            this.input.style.height = "20px";
            if(i == this.colorSet.fillNum) this.input.checked = true;
            this.label.appendChild(this.input);
            this.colorBox = document.createElement('div');
            this.colorBox.style.backgroundColor = this.colorSet.fillColor[i];
            this.colorBox.style.width = '100%';
            this.colorBox.style.height = '20px';
            this.colorBox.style.marginLeft = '5px'
            this.label.appendChild(this.colorBox);
            this.label.style.marginTop = "5px";
            this.label.style.width = "80%";
            this.div.appendChild(this.label);
        }

        this.fillB = document.querySelectorAll('input[name="fillC"]');

        this.fillB.forEach((fB) => {
            fB.addEventListener('change', this.fillChange.bind(this));
        });
    }

    fillChange(event) {
        var selectedOption = event.target.value;
        this.colorSet.fillColorChange(selectedOption);
    }

    strokeC() {
        this.div = document.querySelector("#stroke");
        this.div.textContent = 'Stroke';
        for(let i=0; i<this.colorSet.strokeColor.length; i++) {
            this.label = document.createElement('label');
            this.input = document.createElement('input');
            this.input.type = 'radio';
            this.input.name = 'strokeC';
            this.input.value = i;
            this.input.style.width = "20px";
            this.input.style.height = "20px";
            if(i == this.colorSet.strokeNum) this.input.checked = true;
            this.label.appendChild(this.input);
            this.colorBox = document.createElement('div');
            this.colorBox.style.backgroundColor = this.colorSet.strokeColor[i];
            this.colorBox.style.width = '100%';
            this.colorBox.style.height = '20px';
            this.colorBox.style.marginLeft = '5px'
            this.label.appendChild(this.colorBox);
            this.label.style.marginTop = "5px";
            this.label.style.width = "80%";
            this.div.appendChild(this.label);
        }

        this.strokeB = document.querySelectorAll('input[name="strokeC"]');

        this.strokeB.forEach((sB) => {
            sB.addEventListener('change', this.strokeChange.bind(this));
        });
    }
    strokeChange(event) {
        var selectedOption = event.target.value;
        this.colorSet.strokeColorChange(selectedOption);
    }

}