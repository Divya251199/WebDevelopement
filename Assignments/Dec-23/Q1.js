// Check from the objects.js file g_class. Give list of students which have greater than or equal to 85 marks.(use for loop)

var g_class = {
    'name': "Dec21WebFundamentals",
    'instructor' : {
        'name': "Aayush Sinha",
        'subject' :"MERN"
    },
    'students':[
        {'name':'a',
         'marks': 89
        } ,
        {'name':'b',
         'marks': 76
        },
        {'name':'c',
         'marks': 90
        },
        {'name':'d',
         'marks':87
        },
        {'name':'e',
         'marks':73
        }
    ]
}

var arr = g_class['students']

for(var i = 0; i < arr.length; i = i + 1) {
    var a = arr[i]['marks'];
    if(a >= 85){
        console.log(arr[i].name)
    }
}