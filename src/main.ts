console.log("Javascript is working!");

// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    
    const clock = new ClockDisplay(document.getElementById('output'));
    const cat = new Cat(document.getElementById('catEnergy'), document.getElementById('catHunger'), document.getElementById('catMood'));

    const animator = new Animator(clock, cat);

    document.getElementById('tickerButton').addEventListener("click", () => {
        console.log("User clicked ticker button");
        animator.toggleAnimation();
    });

    document.getElementById('feedTheCat').addEventListener("click", () => {
        cat.feed();
    });
    
    document.getElementById(`playCatGames`).addEventListener("click", () => {
        cat.play();
    });

    document.getElementById(`catSleep`).addEventListener("click", () => {
        cat.sleep();
    });

    document.getElementById('setTime').addEventListener("click", () => {
        console.log("User clicked setTime button");
        const hoursInput = document.getElementById('hoursInput') as HTMLInputElement;
        const minutesInput = document.getElementById('minutesInput') as HTMLInputElement;
        const secondsInput = document.getElementById('secondsInput') as HTMLInputElement;
        clock.setTime(hoursInput.value, minutesInput.value, secondsInput.value);
    });

});