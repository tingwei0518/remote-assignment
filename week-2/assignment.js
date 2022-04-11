// Assignment 1: Function and Array
function max(numbers){
    let max_number = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if ( numbers[i] > max_number){
            max_number = numbers[i];
        }
    }
    return max_number
}

// max([1, 2, 4, 5]); // result to 5 
// max([5, 2, 7, 1, 6]); // result to 7



// Assignment 2: Object
function calculate(args){ 
    let result;
    if(args.op==="+"){ 
        result=args.n1+args.n2;
    }else if(args.op==="-"){ 
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
    return result; 
}
// first way
const expr1 = {n1:15,n2:10,op:"-"};
calculate(expr1); //5

// another way
class Expression2 {
	constructor(n1, n2, op){		
		this.n1 = n1;
		this.n2 = n2;
        this.op = op;
	}
	calculate(){ 
        let result;
        if(this.op === "+"){ 
            result = this.n1 + this.n2;
        }else if(this.op === "-"){ 
            result = this.n1 - this.n2;
        }else{
            result = "Not supported";
        }
        return result; 
    }
}

const expr2 = new Expression2(5,3,"+");
calculate(expr2); //8
expr2.calculate(); //8



// Assignment 3: Function, Array, and Object
function avg(data){
    let total = 0;
    data.products.forEach(product => {
        total += product.price; 
    })  
    return total/data.size;
} 

avg({
    size:3, 
    products:[
            {
                name:"Product 1",
                price:100 
            },
            {
                name:"Product 2",
                price:700 
            },
            {
                name:"Product 3",
                price:250 
            }
    ]
}); // show the average price of all products



// Assignment 5: Algorithm Practice (Advanced Optional)

// {value:index}
// [2, 7, 11, 15] -> {2: 0, 7: 1, 11: 2, 15: 3}
function indexOfNum(array){
    return array.reduce((acc, value, index) => ({ ...acc, [value]: index}), {});
}

function twoSum(nums, target){
    let indexOfNumObj = indexOfNum(nums);
    // console.log(indexOfNumObj);
    for(let i = 0; i < nums.length; i++){
        let goal = target-nums[i];
        if ((goal in indexOfNumObj) && (i != indexOfNumObj[goal])){          
            return [i, indexOfNumObj[goal]];
        }
    }
}
/*
    For example:
    twoSum([2, 7, 11, 15], 9); Should returns:
    [0, 1] Because:
*/