//Block scope
function path(){
    if (true){
        var msg= 'I am block var variable';
        console.log('Inside block',msg);
    }
    console.log('outside block',msg);
}
path()
//block scope
function message(){
    if(true){
        let msg='Iam let variable'
        console.log('Iam inside block',msg);
}
    }
message();
if (true){
    const msg='Iam const var'
    console.log('Iam inside block',msg);
}
