const fs = require('fs');
const readline = require('readline');

const rawData = './rawdata/test_reviews.csv';
//test_reviews.csv
const newFile = './rawdata/test.csv';

async function processLineByLine() {
  const fileStream = fs.createReadStream(rawData);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  var count = 0;
  var collect = [];

  for await (const line of rl) {
    // console.log(`Line from file: ${line}`);
    const data = line.split(',');
    if (data.length === 12) {
      // console.log(data);
      if (data[6] === 'true') {
        data[6] = '1';
      } else if (data[6] === 'false') {
        data[6] = '0';
      }
      if (data[7] === 'true') {
        data[7] = '1';
      } else if (data[7] === 'false') {
        data[7] = '0';
      }
    }
    // console.log(data.join(','));
    collect.push(data.join(','));
  }
  // console.log(collect.join('\n'));
  file = collect.join('\n');
  // console.log(file);

  fs.writeFile(newFile, file, function (err) {
    if (err) return console.log(err);
  })
}

processLineByLine();


/*
tables reviews

data cleaning: date: timestamp
recommend: boolean
reported: boolean
*/

/*
tables products

( recommend: int, not_recommend: int,rating_1: int, rating_2: int,rating_3: int,
rating_4: int,rating_5: int )
*/

/*
data validation
total number, missing parts
string, number
boolean
null

batches
group of same kind of things

5760708 lines total
5688363 lines have 12 attributes 98%
72345 lines have 11 attributes 2%

    (id, product_id, rating, date, summary, body,recommend,reported, reviewer_name, reviewer_email,response, helpfulness )

  [
  '138',
  '32',
  '1599355502710',
  '"Ipsum repellendus alias earum et est autem molestiae quis quia."',
  '"Natus est quaerat voluptate possimus nihil tenetur et et ea. Necessitatibus voluptas iste. Quibusdam consequaturvelit dolores asperiores amet."',
  'true',
  'false',
  '"Jedidiah.DAmore31"',
  '"Jeramie_Greenfelder41@hotmail.com"',
  'null',
  '11'
]
*/