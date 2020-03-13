function a(start,endnumber,steppingnumber){
    var currentnumber=start
    var sum=0
    for(;currentnumber>endnumber;)
    {
        sum +=currentnumber;
        currentnumber-=steppingnumber

    }
    return sum;
};
console.log(a(1000,100,20))