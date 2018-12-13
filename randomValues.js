var random_array = [];

function generate_random_value() 
{
    var from = document.getElementById("from_RNG").value;
    var to = document.getElementById("to_RNG").value;
    var number_amount = document.getElementById("amount_RNG").value;
    for (var i = 0; i  < number_amount ; i++)
    {
        var random_value = (Math.floor(Math.random() * ( to - from )) + from);
        random_array.push(random_value);
        console.log(random_array[i]) ;
        
    }
}

function check_duplicates()
{    
    random_array.sort()
    
    var countArray = [] ;
    
    for (var i = 0; i < random_array.length; i++) 
    {
        var currentIndex = countArray.push({number:random_array[i], count: 0}) -1 ;
        
        for (var j = i; j < random_array.length; j++) 
        {
            if (random_array[i] == random_array[j])
            {
                countArray[currentIndex].count++ ;
            } 
            else 
            {
                i = j - 1 ;
                
                break ;
            }
        }
    }

    countArray.forEach(function(element) 
    {
        document.getElementById("random_test").innerHTML += element.number + " = " 
        + element.count + "<br>" ;

    }
    )
        
    
    console.log(countArray)
    
}