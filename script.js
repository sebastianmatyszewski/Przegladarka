function generateRandomNumbers(){
    var even = [];
    var odd = [];
    for(var i = 0; i <20; i++){
        var random = Math.floor(Math.random()*100)+1;
        if(even.includes(random) || odd.includes(random)){
            i--;
        }else{
           if(random % 2 == 0){
                even.push(random);
            }else{
                odd.push(random);
            } 
        }    
    }
    even.sort((a,b) => a - b);
    odd.sort((a,b) => a - b);
    return{even, odd};
}

function tableCreate() {
    var elem = document. getElementById("table"); 
    if(elem){
        elem. remove();   
    }
    var numbers = generateRandomNumbers();
    const body = document.body,
    table = document.createElement('table');
    table.style.width = '200px';
    table.id = "table";
    var tr = table.insertRow();
    var th = tr.insertCell();
    th.appendChild(document.createTextNode("Even"));
    th = tr.insertCell();
    th.appendChild(document.createTextNode("Odd"));
    for (let i = 0; i < Math.max(numbers.even.length, numbers.odd.length); i++) {
        tr = table.insertRow();
        for (let j = 0; j < 2; j++) {
            if(j==0){
                if(i<numbers.even.length){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(numbers.even[i]));
                }else{
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(" "));
                }
            }
            if(j==1){
                if(i<numbers.odd.length){
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(numbers.odd[i]));
                }else{
                    const td = tr.insertCell();
                    td.appendChild(document.createTextNode(" "));
                }
            }
        }
    }
    body.appendChild(table);
}