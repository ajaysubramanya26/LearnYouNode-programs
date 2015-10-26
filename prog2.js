var res= 0;
process.argv.forEach(function(val,index){
    if(index > 1){
        res = res + parseInt(val,10);
    }
});
console.log(res);
