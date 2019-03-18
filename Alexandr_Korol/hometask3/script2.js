// ��������� ����� private
class SimpleCalculator{
    constructor(a, b){
        this.first = a;
        this.second = b;
    }
    private sum(){ // ����������� ������� private � JS ���� �� ����������
        return "Result:" + (this.first + this.second);
    }
    dis(){
        return "Result: " + (this.first - this.second);
    }
}
class AdvancedCalculator extends SimpleCalculator{
    mul(){
        return "Result: " + this.first * this.second;
    }
    div(){
        return "Result:" + this.first / this.second;
    }
}
var a = new AdvancedCalculator(15,15);

console.log(a.dis());
console.log(a.mul());
console.log(a.div());