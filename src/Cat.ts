class Cat {

    private mood : number = 1000;
    private hunger : number = 1000;
    private energy: number = 1000;

    private energyOutput: HTMLElement;
    private hungerOutput: HTMLElement;
    private moodOutput: HTMLElement;

    constructor(energyOutput: HTMLElement, hungerOutput: HTMLElement, moodOutput: HTMLElement) {
        this.energyOutput = energyOutput;
        this.hungerOutput = hungerOutput;
        this.moodOutput = moodOutput;
    }
    
    /**
     * timeTick
     */
    public timeTick() {
        this.mood -= 5;
        this.hunger -= 10;
        this.energy -= 15;
        console.log(this.mood);
        console.log(this.hunger);
        console.log(this.energy);
        
        this.healthUpdate();
        this.healthCheck();
    }

    /**
     * Checks the health of the cat
     */
    private healthCheck() {
        if (this.energy === 100) {
            alert(`The cat is fucking dead! Let it sleep next time. The cat survived for ${document.getElementById('output').innerText}`);
            window.location.reload();
        } else if (this.hunger === 100) {
            alert(`The cat starved to death! Feed it next time. The cat survived for ${document.getElementById('output').innerText}`);
            window.location.reload();
        } else if (this.mood === 100) {
            alert(`The cat fucking killed itself! Play with it next time! The cat survived for ${document.getElementById('output').innerText}`);
            window.location.reload();
        }
    }
    
    private meow() {
        console.log(`Meow`);
    }

    /**
     * Play with the cat
     */
    public play() {
        this.mood += 40;
        this.energy -= 50;
        this.hunger -= 20;
        this.meow();
    }

    /**
     * Feeds the cat
     */
    public feed() {
        this.hunger += 60;
        this.energy += 10;
        this.meow();
    }

    /**
     * Lets the cat sleep
     */
    public sleep() {
        this.mood += 10;
        this.energy += 100;
        this.hunger -= 100;
    }

    private healthUpdate() {
        const energyUpdate = this.energy;
        if (this.energy <= 250) {
            this.energyOutput.className = "";
            this.energyOutput.classList.add('badStats');
        } else if (this.energy <= 500) {
            this.energyOutput.className = "";
            this.energyOutput.classList.add('fairStats');
        } else if (this.energy <= 750) {
            this.energyOutput.className = "";
            this.energyOutput.classList.add('goodStats');
        } else {
            this.energyOutput.className = "";
            this.energyOutput.classList.add('greatStats');
        };
        this.energyOutput.innerText = `${energyUpdate}`;
        
        const hungerUpdate = this.hunger;
        if (this.hunger <= 250) {
            this.hungerOutput.className = "";
            this.hungerOutput.classList.add('badStats');
        } else if (this.hunger <= 500) {
            this.hungerOutput.className = "";
            this.hungerOutput.classList.add('fairStats');
        } else if (this.hunger <= 750) {
            this.hungerOutput.className = "";
            this.hungerOutput.classList.add('goodStats');
        } else {
            this.hungerOutput.className = "";
            this.hungerOutput.classList.add('greatStats');
        };
        this.hungerOutput.innerText = `${hungerUpdate}`;
        
        const moodUpdate = this.mood;
        if (this.mood <= 250) {
            this.moodOutput.className = "";
            this.moodOutput.classList.add('badStats');
        } else if (this.mood <= 500) {
            this.moodOutput.className = "";
            this.moodOutput.classList.add('fairStats');
        } else if (this.mood <= 750) {
            this.moodOutput.className = "";
            this.moodOutput.classList.add('goodStats');
        } else {
            this.moodOutput.className = "";
            this.moodOutput.classList.add('greatStats');
        };
        this.moodOutput.innerText = `${moodUpdate}`;
    }


}