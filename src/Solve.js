let precedence = {'-':1, '+':1, '*':2, '/':2};
let operands = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

function infixToPostfix(expr){
    let st = [];
    let res = "";

    for(let i=0;i< expr.length;i++) {
        let el = expr[i];
        
        if (operands.indexOf(el) !== -1) 
            res += el;
        else if (el == '(')
            st.push('(');
        else if (el == ')'){
            while(st[st.length-1] != '('){
                res += st.pop();
            }
            st.pop();
        }
        else {
            while(st.length!=0 && precedence[el] <= precedence[st[st.length-1]]){
                res += st.pop();
            }
            st.push(el);
        }
    }

    while(st.length !== 0)
        res += st.pop();

    return res;
}

function evaluatePostfix(exp)
{
    let stack=[];
    
    for(let i=0;i<exp.length;i++)
    {
        let c=exp[i];

        if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
            
        else
        {
            let val1 = stack.pop();
            let val2 = stack.pop();
                
            switch(c)
            {
                case '+':
                stack.push(val2+val1);
                break;
                    
                case '-':
                stack.push(val2- val1);
                break;
                    
                case '/':
                stack.push(val2/val1);
                break;
                    
                case '*':
                stack.push(val2*val1);
                break;
                default:
            }
        }
    }
    return stack.pop();   
}

let postf = infixToPostfix("(1+2)*(3+4)");
console.log(postf);
let val = evaluatePostfix(postf);
console.log(val);

export {infixToPostfix, evaluatePostfix};