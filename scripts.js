// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//forEach Basics 
console.log(`challenge 1 `)
provinces.forEach(province => {
  console.log(province)
})

names.forEach(name => console.log(name))

names.forEach((name, index) => console.log(`${name}(${provinces[index]})`) )

console.log('\n')
//Uppercase Transformation
console.log('Challenge 2 :')
const uppercaseProvinces = provinces.map(province => province.toUpperCase())
console.log(uppercaseProvinces)
console.log('\n')

//Name Lengths
const nameLengths = names.map(name => name.length)
console.log(`Challenge 3 : ${nameLengths}`)
console.log('\n')

//Sorting
const sortedProvinces = [...provinces].sort()
console.log(`Challenge 4 : ${sortedProvinces}`)
console.log('\n')

//Filtering Cape
const provincesWithoutCape = provinces.filter(province => !province.includes('Cape'))
console.log (`Challenge 5 : There are ${provincesWithoutCape} provinces without a Cape `)
console.log('\n')

//Findings 'S'
//Case sensitive 
const hasS = names.map(name => name.includes('S') )
console.log(`Challenge 6 : names with S are`)
names.forEach((name,index) => console.log(`${name}:${hasS[index]}`) )
//Case insensitive 
const hasAnyS = names.map(name => name.toLowerCase().includes('s') )
console.log(`Challenge 6 : names with any s are`)
names.forEach((name,index) => console.log(`${name}:${hasAnyS[index]}`) )
//Some
const instanceOfS = names.some(name => name.includes('S'))

//console.log(`Challenge 6 : names with S are, ${hasS}`)
//console.log(`Challenge 6 : names with any s are, ${hasAnyS}`)
console.log(`Challenge 6 : names using some are, ${instanceOfS}`)
console.log('\n')

const namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index]
  return acc
}, {})

console.log(namesToProvinces)
console.log('\n')

// Advanced Challenges 

console.log (
  `
  Products: ${products.map(product => product.product )},
  shortNames : ${names.filter(name => name.length <= 5 )},
  Price Manipulatin : ${products
                          .filter(product => product.price)
                          .map(product => parseFloat(product.price))
                          .filter(Boolean)
                          .reduce((acc, price) => acc + price, 0)
                        },
   Concated Products : ${products
                          .reduce((acc,product)=> acc + product.product + ' ', '')
   },

   
  ExtremePrices : ${(() => {
    const prices = products
      .filter(product => product.price) 
      .map(product => parseFloat(product.price))
      .filter(Boolean)

    if (prices.length === 0) return 'No prices available';

    const highest = Math.max(...prices);
    const lowest = Math.min(...prices);

    return `Highest: ${highest}. Lowest: ${lowest}.`;
  })()
  }

  'Object Transformation: ${JSON.stringify(products
    .reduce((acc, { product, price }) => {
      acc[product] = { product, cost: parseFloat(price) || 0 }
      return acc
    }, {}), null, 2 )
   
  }

  `
)
