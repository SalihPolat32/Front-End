// Egzersiz 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

// 1.	E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp sabitleri dizisinin öğelerini destructuring işlemi uygulayın ve atayın.

const [e, pi, yerçekimi, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, yerçekimi, humanBodyTemp, waterBoilingTemp);

// 2.	fin, est, sw, den veya nor olarak ülkeler dizisinin öğelerini destructuring işlemi uygulayın ve atayın.

const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// 3.	Dikdörtgen nesnesini özelliklerine veya anahtarlarına göre destructuring işlemi uygulayın.

const {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);

// Egzersiz 2
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

// 4.	Kullanıcılar dizisini Iterator ve destructuring kullanarak nesnenin tüm anahtarlarını alın.

for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age);
}

// 5.	İkiden az beceriye sahip kişileri bulun.

for (const {name, scores, skills, age} of users) {
    if (skills.length < 2) {
        console.log("İkiden Az Beceriye Sahip Kişiler: " + name, scores, skills, age);
    }
}

// Egzersiz 3
// 6.	Tüm ülkelerin adını, sermayesini, nüfusunu ve dillerini yazdıran ülkeler nesnesine destructuring işlemi uygulayın.

const ulkeler = {
  turkiye: {
    ad: "Türkiye",
    nufus: 82000000,
    diller: ["Türkçe"]
  },
  hollanda: {
    ad: "Hollanda",
    nufus: 17000000,
    diller: ["Flemenkçe"]
  },
  almanya: {
    ad: "Almanya",
    nufus: 83200000,
    diller: ["Almanca"]
  }
};

const { ad, nufus, diller } = ulkeler.turkiye;

console.log("Ülke Adı:", ad);
console.log("Nüfus:", nufus);
console.log("Diller:", diller.join(", "));


// 7.	Küçük bir geliştirici, öğrenci adını, becerilerini ve puanını okunması kolay olmayabilecek diziler halinde yapılandırır. Aşağıdaki dizi adını da, beceriler dizisini becerilere, puan dizisini puanlara, JavaScript puanını jsScore'a ve React puanını React değişkenine tek bir satırda destructuring işlemi uygulayın.

  const student1 = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

  const [name, skills, [, , jsScore, reactScore]] = student1;

  console.log(name, skills, jsScore, reactScore) // David (4) ["HTM", "CSS", "JS", "React"] 90 95

// 8.	Diziyi bir structure nesnesine dönüştürebilen convertArrayToObject adlı bir fonksiyon yazın.

  const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

  function convertArrayToObject(array) {

    const obj = {};
  
    for (let i = 0; i < array.length; i++) {

      const student = array[i];
  
      const name = student[0];
      const skills = student[1];
      const scores = student[2];
  
      obj[name] = {
        skills: skills,
        scores: scores,
      };
    }
  
    return obj;
  }

    console.log(convertArrayToObject(students));

  // [
  //   {
  //     name: 'David',
  //     skills: ['HTML', 'CSS', 'JS', 'React'],
  //     scores: [98,85,90,95]
  //   },
  //   {
  //     name: 'John',
  //     skills: ['HTML', 'CSS', 'JS', 'React'],
  //     scores: [85, 80, 85, 80]
  //   }
  // ]

// 9.	Öğrenci nesnesini orijinal nesneyi değiştirmeden newStudent'e kopyalayın.Yeni nesnede aşağıdakini ekleyin?
// •	frontEnd beceri setlerine seviye 8 ile Bootstrap ekleyin.
// •	backEnd beceri setlerine 9. seviye Express'i ekleyin.
// •	dataBase beceri setlerine seviye 8 ile SQL ekleyin.
// •	dataScience beceri setlerine seviye olmadan SQL ekleyin.

    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
    
// Kopyalanan nesne çıktısı şöyle görünmelidir:
//    {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }