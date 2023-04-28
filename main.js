//Favorable for survival DNA Bases
const favorableBases = ['C','G'];
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function that takes a unique organism number...
// and an array representing the DNA strand as parameters...
// returns an object that contains the properties specimenNum...
// and DNA that correspond to the parameters provided.
function pAequorFactory(specimenNumber, specimenStrand)
{
  return {
    specimenNumber : specimenNumber,
    specimenStrand : specimenStrand,
    // .mutate() is responsible for randomly selecting a base...
    // in the object’s dna property and changing the current...
    // base to a different base. Then .mutate() will return...
    // the object’s dna
    mutate()
    {
      let selectRandomBase=Math.floor(Math.random()*15);
      let newBase='';
      do {
        newBase = returnRandBase();
      } while (this.specimenStrand[selectRandomBase]==newBase);
      this.specimenStrand[selectRandomBase] = newBase;
      return this.specimenStrand;
    },
    // .compareDNA() is to compare the current pAequor‘s DNA...
    // with the passed in pAequor‘s .dna and compute how many bases...
    // are identical and in the same...
    // locations. .compareDNA() does not return anything, but prints...
    // a message that states the percentage of DNA the two objects...
    // have in common — use the .specimenNum to identify which...
    // pAequor objects are being compared.
    compareDNA(specimenToCompare)
    {
      let sumBasesEqual=0;
      this.specimenStrand.forEach((element,index)=>{
        if (element==specimenToCompare.specimenStrand[index]){
          sumBasesEqual++;
        }
      });
      console.log(`Specimen #${this.specimenNumber} and Specimen #${specimenToCompare.specimenNumber} have ${Math.floor((sumBasesEqual / 15) * 100)}% bases in common`);
      return (sumBasesEqual==100 ? false : true);
    },
    //.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
    willLikelySurvive()
    {
      let sumFavs=0;
      this.specimenStrand.forEach((element)=>{
        if (favorableBases.includes(element))
        {
          sumFavs++;
        }
      })
      return ((sumFavs / 15)*100) >= 60 ? true : false;
    }
  };
}
/*
let specimen1 = pAequorFactory(1, mockUpStrand());
console.log(specimen1);
console.log(specimen1.willLikelySurvive());
let specimen2 = pAequorFactory(2,mockUpStrand());
console.log(specimen2);
console.log(specimen2.willLikelySurvive());
specimen1.compareDNA(specimen2);
*/
let masterSpecimenList = [];
do
{
  let tempSpecimen = pAequorFactory(masterSpecimenList.length+1, mockUpStrand());
  if (tempSpecimen.willLikelySurvive())
  {
    if (masterSpecimenList.every((element)=>{
      return tempSpecimen.compareDNA(element);
    })){
      masterSpecimenList.push(tempSpecimen);
    }
  }
} while (masterSpecimenList.length<30);

console.log(masterSpecimenList);



