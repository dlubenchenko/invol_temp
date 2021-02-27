const amadeus = new Gds(
    +twdAma
    .split(/\n/gi)
    .filter(key => key.includes('BSR'))
    .join()
    .split(' ')
    .filter(key => key !== '')[twdAma
        .split(/\n/gi)
        .filter(key => key.includes('BSR'))
        .join()
        .split(' ')
        .filter(key => key !== '')
        .indexOf('BSR') + 1],

    +twdAma
    .split(/\n/gi)
    .map(key => key
        .split(' ')
        .filter(key => key
            .includes("ROE")))
    .join()
    .split(',')
    .filter(key => key !== '')[0].slice(3),

    +twdAma
    .split(/\n/gi)
    .filter(key => key.includes('FARE'))
    .join()
    .split(' ')
    .filter(key => +key > 0),

    twdAma
    .split(/\n/gi)
    .filter(key => key.includes('TOTAL'))
    .join()
    .split(' ')
    .slice(1, 2)
    .toString(),

    +twdAma
    .split(/\n/gi)
    .filter(key => key.includes('EQUIV'))
    .join()
    .split(' ')
    .filter(key => +key > 0)[0],

    1,

    twdAma
    .split(/\n/gi)
    .filter(key => key.includes('DOI-'))
    .map(key => key.split(' ').filter(key => key.includes('DOI-')))
    .toString()
    .slice(4),

    3,

    4,

    twdAma
    .split(/\n/gi)
    .filter(key => key.includes('TX'))
    .join()
    .replace(/,/g, ' ')
    .split(' ')
    .filter(tax => tax != '' && tax
        .slice(0, 2)
        .indexOf('TX'))
    .filter((key, i) => i % 2 !== 0)



);

console.log(twdAma)
console.log(amadeus)