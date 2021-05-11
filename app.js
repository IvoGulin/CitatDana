const arrayOfQuotes = 
[
    {'author': 'Jim Rohn', 
     'quote': 'Čuvajte se onoga što postajete u potrazi za onim što želite.'
    },
    {'author': 'Epictetus', 
     'quote': 'Nije važno što vam se događa, već kako reagirate na to.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'Najbolja osveta je veliki uspjeh.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'Promašite 100% pokušaja koje ne napravite.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Ogorčenost je poput pijenja otrova i čekanja da vaši neprijatelji umru.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Ne shvaćajte život previše ozbiljno. Nećete izaći živi.'
    },
	{'author': 'Albert Einstein', 
     'quote': 'Slabi ljudi se osvećuju. Snažni ljudi opraštaju. Inteligentni ljudi ignoriraju.'
    },
	{'author': 'Aristotel', 
     'quote': 'Lijepo je ono što je skladno..'
    },
];

function generateQuote()
{
	var randomNumber = Math.random()*arrayOfQuotes.length + 1;
	const random = Number.parseInt(randomNumber);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `${arrayOfQuotes[random].author}`; 
}