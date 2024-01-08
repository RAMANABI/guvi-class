function outerFunction() {
    this.outer="Outer";

    function innerFunction() {
        console.log(this.outer);
    }

    innerFunction();
}                   

outerFunction();
