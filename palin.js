 
let N= 10; let str="1234";
{
    let bag="";
    for(let i=N-1; i>=0; i--){
        bag=bag+str[i];
    }
    if(str==bag){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
