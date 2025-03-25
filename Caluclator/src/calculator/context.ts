export class Calculator {
    private currentValue: string = "0";
    private isOperatorPressed: boolean = false;
    private display : HTMLInputElement;

    constructor(display:HTMLInputElement){
        this.display = display;
    }
    
    public getCurrentValue():string{
        return this.currentValue;
    }

    public setValue(value:string):void {
        this.currentValue = value;
        this.updateDisplay();
    }

    public appendValue(value:string):void{
        this.currentValue += value;
        this.updateDisplay();
    }

    public clear():void {
        this.currentValue = "0";
        this.isOperatorPressed = false;
        this.updateDisplay();
    }

    public setOperatorPressed(isPressed: boolean):void{
        this.isOperatorPressed = isPressed;
    }

    public updateDisplay():void {
        this.display.value = this.currentValue;
    }
}